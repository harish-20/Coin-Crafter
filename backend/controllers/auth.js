const REQUIRED_FIELDS = ["name", "email", "password"];

const { getInvalidFields } = require("../utils/helper");
const { GOOGLE_CLIENT_ID, SECRET_KEY } = require("../configs/keys");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

const User = require("../models/user");

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const getUserFromToken = async (token) => {
  const loginTicket = await client.verifyIdToken({
    idToken: token.credential,
    audience: GOOGLE_CLIENT_ID,
  });
  if (!loginTicket) {
    return false;
  }

  const payload = loginTicket.getPayload();
  return {
    email: payload.email,
    name: payload.name,
  };
};

module.exports.verifyGoogleAccount = async (req, res, next) => {
  try {
    const { token } = req.body;

    const userData = await getUserFromToken(token);
    if (!userData) {
      res.status(401).send({
        errorCode: "invalidToken",
        message: "Invalid token",
      });
      return;
    }

    const { name, email } = userData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const token = jwt.sign(email, SECRET_KEY);
      res.status(200).send({
        token,
        user: existingUser,
      });
    } else {
      const user = User({ name, email, hasGoogleAuth: true });
      await user.save();

      const token = jwt.sign(email, SECRET_KEY);
      res.status(200).send({
        token,
        user,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).send({
        errorCode: "invalidParameters",
        message: "invalid or parameter missing",
      });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser.hasGoogleAuth) {
      res.status(409).send({
        errorCode: "googleAuthUser",
        message: "User had signed in with google auth",
      });
      return;
    }
    if (existingUser) {
      res.status(409).send({
        errorCode: "userAlreadyExists",
        message: "User already exists",
      });
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 5);
    const userData = {
      name,
      email,
      password: hashedPassword,
    };
    const user = new User(userData);
    const invalidData = user.validateSync();
    if (invalidData) {
      const errorFields = getInvalidFields(REQUIRED_FIELDS, invalidData.errors);
      res.status(400).send({
        errorCode: "invalidInputs",
        message: "Invalid data.",
        errorFields,
      });
      return;
    }

    await user.save();
    const token = jwt.sign(email, SECRET_KEY);
    res.status(200).send({
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const emailMatchedUser = await User.findOne({ email });
  if (!emailMatchedUser) {
    res.status(404).send({
      statusCode: "emailNotExists",
      message: "email not exists",
    });
    return;
  }

  const hashedPassword = emailMatchedUser.password;
  const isValidPassword = bcrypt.compareSync(password, hashedPassword);
  if (!isValidPassword) {
    res.status(401).send({
      statusCode: "incorrectPassword",
      message: "email and password not matched",
    });
    return;
  }

  const token = jwt.sign(email, SECRET_KEY);
  res.status(200).send({ token, user: emailMatchedUser });
};
