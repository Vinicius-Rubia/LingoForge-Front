import { z } from "zod";

const register = z.object({
  email: z.email("E-mail é inválido"),
  password: z.string().refine((val) => val.length >= 6 && val.length <= 20, {
    message: "A senha deve ter entre 6 e 20 caracteres.",
  }),
});

export const AuthSchemas = {
  register
}