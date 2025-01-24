import * as zod from "zod";

export const passwordValidation = zod
  .string()
  .min(8, { message: "Should contain 8 characters" })
  .regex(/[A-Z]+/, { message: "Should contain one capital letter" })
  .regex(/[a-z]+/, { message: "Should contain one lowercase letter" })
  .regex(/[0-9]+/, { message: "Should contain a number" })
  .regex(/[@$!%*?&#]+/, { message: "Should contain one special character" });
