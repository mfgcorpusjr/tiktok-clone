import { supabase } from "@/lib/supabase";

import { Form as SignUpForm } from "@/hooks/useSignUp";
import { Form as SignInForm } from "@/hooks/useSignIn";

export const signUp = async (form: SignUpForm) => {
  const { error } = await supabase.auth.signUp({
    ...form,
    options: {
      data: {
        username: form.username,
      },
    },
  });

  if (error) throw error;
};

export const signIn = async (form: SignInForm) => {
  const { error } = await supabase.auth.signInWithPassword(form);

  if (error) throw error;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
};
