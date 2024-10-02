const { SECRET_KEY } = require("../configs/keys");

const jwt = require("jsonwebtoken");

module.exports.authMiddleware = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).send({
      errorCode: "noHeader",
      message: "No authorization found in the request header",
    });
  }
  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).send({
      errorCode: "noToken",
      message: "No token found in the request header",
    });
  }
  try {
    const email = jwt.verify(token, SECRET_KEY);
    req.body.email = email;
    next();
  } catch (err) {
    return res.status(401).send({
      errorCode: "invalidToken",
      message: "token sent is invalid or expired",
    });
  }
};
