import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_GRAPHQL_URI: z.string(),
});

export const getEnv = () => {
  return envSchema.parse(process.env);
};