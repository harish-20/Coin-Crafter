const REQUIRED_FIELDS = ["name", "email", "password"];

const { getInvalidFields } = require("../utils/helper");
const { ERROR_CODES } = require("../utils/errorCodes");

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
      return res.status(401).send(ERROR_CODES.INVALID_TOKEN);
    }

    const { name, email } = userData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const token = jwt.sign(email, SECRET_KEY);
      return res.status(200).send({
        token,
        user: existingUser,
      });
    } else {
      const user = User({ name, email, hasGoogleAuth: true });
      await user.save();

      const token = jwt.sign(email, SECRET_KEY);
      return res.status(200).send({
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
      return res.status(400).send(ERROR_CODES.INVALID_INPUTS);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser.hasGoogleAuth) {
      return res.status(409).send(ERROR_CODES.GOOGLE_AUTH_USER);
    }
    if (existingUser) {
      return res.status(409).send(ERROR_CODES.USER_ALREADY_EXISTS);
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
      console.log(errorFields);
      return res.status(400).send(ERROR_CODES.INVALID_DATA);
    }

    await user.save();
    const token = jwt.sign(email, SECRET_KEY);
    return res.status(200).send({
      token,
      user,
    });
  } catch (error) {
    return res.status(500).send(ERROR_CODES.CANNOT_LOGIN);
  }
};

module.exports.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const emailMatchedUser = await User.findOne({ email });
    if (!emailMatchedUser) {
      return res.status(404).send(ERROR_CODES.EMAIL_NOT_EXISTS);
    }

    if (emailMatchedUser.hasGoogleAuth) {
      return res.status(409).send(ERROR_CODES.GOOGLE_AUTH_USER);
    }

    const hashedPassword = emailMatchedUser.password;
    const isValidPassword = bcrypt.compareSync(password, hashedPassword);
    if (!isValidPassword) {
      return res.status(401).send(ERROR_CODES.INCORRECT_PASSWORD);
    }

    const token = jwt.sign(email, SECRET_KEY);
    return res.status(200).send({ token, user: emailMatchedUser });
  } catch (error) {
    return res.status(500).send(ERROR_CODES.CANNOT_LOGIN);
  }
};
