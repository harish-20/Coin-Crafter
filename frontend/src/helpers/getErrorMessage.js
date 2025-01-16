const FRONTEND_ERROR_MESSAGES = {
  invalidToken: "Invalid token",
  googleAuthUser: "User had signed in with Google Auth. Use Google Login",
  cannotLogin: "Cannot login",
  userAlreadyExists: "User already exists. Please login or use new email",
  invalidInputs: "Invalid parameters",
  emailNotExists: "Email does not exist. Please sign up",
  incorrectPassword: "Email and password do not match",
  noUserFound: "No user found for this email",
  invalidData: "Invalid data. Please check the data once",
  cannotCreateCategory: "Cannot create category",
  noCategoryFound: "No category found. Please add some.",
  cannotGetCategory: "Cannot get category",
  cannotGetExpenses: "Cannot get expenses",
  noAccessToThisExpense: "This expense may not be related to this email",
  cannotGetFilters: "Cannot get filters",
  cannotAddExpense: "Cannot add expense",
  cannotUpdateExpense: "Cannot update expense",
  cannotGetUser: "Cannot get user",
};

export default function getErrorMessage(errorCode) {
  const message = FRONTEND_ERROR_MESSAGES[errorCode];
  if (message) {
    return message;
  } else {
    return "An unexpected error occurred.";
  }
}
