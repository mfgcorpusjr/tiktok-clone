import { Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";

import * as AuthAPI from "@/api/auth";

const schema = z.object({
  username: z
    .string("Username is required")
    .trim()
    .min(1, "Username is required"),
  email: z.email("Invalid email").trim().min(1, "Invalid email"),
  password: z
    .string("Password is required")
    .trim()
    .min(6, "Password must be at least 6 characters long"),
});

export type Form = z.infer<typeof schema>;

const useSignUp = () => {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const query = useMutation({
    mutationFn: AuthAPI.signUp,
    onError: (error) => {
      form.reset();
      Alert.alert("Error", error.message);
    },
  });

  return {
    Controller,
    form,
    query,
  };
};

export default useSignUp;
