import * as zod from "zod";

export const transactionSchema = zod.object({
  category: zod.string({ required_error: "Category is Required" }),

  amount: zod
    .string()
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value), {
      message: "Amount should be a valid number",
    })
    .refine((value) => value > 0, {
      message: "Amount should be a positive value",
    }),

  description: zod
    .string()
    .min(6, { message: "Should have at least 6 characters" }),
});
