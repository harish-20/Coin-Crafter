const express = require("express");

const { authMiddleware } = require("../auth/auth");

const expenseController = require("../controllers/expense");
const categoryController = require("../controllers/category");
const userController = require("../controllers/user");
const authController = require("../controllers/auth");

const router = express.Router();

router.post("/googleSignin", authController.verifyGoogleAccount);

router.get("/expense", authMiddleware, expenseController.getAllExpense);
router.get(
  "/expense/availableFilterMonths",
  authMiddleware,
  expenseController.availableFiltersMonth
);
router.get("/expense/:id", authMiddleware, expenseController.getSigleExpense);
router.delete("/expense/:id", expenseController.deleteExpense);
router.post("/expense/create", authMiddleware, expenseController.addExpense);
router.post("/expense/update", authMiddleware, expenseController.updateExpense);

router.get("/category/getAll", () => {});
router.get(
  "/category/getDefaultCategories",
  categoryController.getDefaultCategories
);
router.get(
  "/category/getCustomCategories",
  authMiddleware,
  categoryController.getCustomCategories
);
router.post(
  "/category/create",
  authMiddleware,
  categoryController.createCategory
);

router.get("/user/getUser", authMiddleware, userController.getUser);
router.post("/user/signup", authController.signUp);
router.post("/user/signin", authController.signIn);

module.exports = router;
