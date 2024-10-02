const express = require("express");

const { authMiddleware } = require("../auth/auth");

const {
  addExpense,
  deleteExpense,
  getAllExpense,
  updateExpense,
} = require("../controllers/expense");
const { createCategory } = require("../controllers/category");
const { findUser } = require("../controllers/user");
const { verifyGoogleAccount, signUp, signIn } = require("../controllers/auth");

const router = express.Router();

router.post("/googleSignin", verifyGoogleAccount);

router.get("/expense/getAll", getAllExpense);
router.post("/expense/create", addExpense);
router.post("/expense/update", updateExpense);
router.delete("/expense/delete", deleteExpense);

router.get("/category/getAll", () => {});
router.post("/category/create", createCategory);

router.post("/user/signup", signUp);
router.post("/user/signin", signIn);
router.post("/user/find", authMiddleware, findUser);

module.exports = router;
