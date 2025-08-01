import { Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";

import * as AuthAPI from "@/api/auth";

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

  const query = useMutation({
    mutationFn: AuthAPI.signIn,
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

export default useSignIn;
