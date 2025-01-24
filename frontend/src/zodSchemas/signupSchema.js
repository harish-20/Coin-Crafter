import * as zod from "zod";

import { passwordValidation } from "./passwordValidation";

export const signupSchema = zod
  .object({
    name: zod
      .string()
      .min(1, { message: "Name is required" })
      .max(30, { message: "Name should not exceed 30 characters" }),

    email: zod
      .string()
      .email({ message: "Invalid email.Please enter valid email." }),

    password: passwordValidation,

    confirmPassword: passwordValidation,

    isPoliciesAccepted: zod.boolean().refine((val) => val === true, {
      message: "Please check and accept the terms and conditions",
    }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        message: "Passwords didn't match",
        path: ["confirmPassword"],
      });
    }
  });
