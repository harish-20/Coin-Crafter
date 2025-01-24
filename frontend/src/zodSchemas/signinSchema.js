import * as zod from "zod";

import { passwordValidation } from "./passwordValidation";

export const signinSchema = zod.object({
  email: zod
    .string()
    .email({ message: "Invalid email.Please enter valid email." }),

  password: passwordValidation,
});
