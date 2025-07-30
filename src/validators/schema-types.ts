import type z from "zod";
import type { AuthSchemas } from "./auth-schemas";

export type RegisterSchemaType = z.infer<typeof AuthSchemas.register>;
