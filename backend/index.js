require("./dbConnection")();

const { PORT, CORS_ORIGIN } = require("./configs/keys");

const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const { rateLimit } = require("express-rate-limit");

const router = require("./routes");
const { minutesToMilliseconds } = require("./utils/helper");

const app = express();

const middleware = morgan("combined", {
  skip: (req, res) => req.statusCode < 400,
});
const corsOptions = {
  origin: CORS_ORIGIN,
};
const limiter = rateLimit({
  windowMs: minutesToMilliseconds(5),
  max: 300,
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);
app.use(helmet());
app.use(middleware);
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api", router);

app.use("/", (err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).send({
    errorCode: "serverError",
    message: "Something went wrong in server",
  });
});

app.listen(PORT, () =>
  console.log(`\n\nServer awake, alive, and kicking on port ${PORT}! 💥💻`)
);
