import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.email("Invalid email").trim().min(1, "Invalid email"),
  password: z
    .string("Password is required")
    .trim()
    .min(1, "Password is required"),
});

export type Form = z.infer<typeof schema>;

const useSignIn = () => {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return {
    Controller,
    form,
  };
};

export default useSignIn;
