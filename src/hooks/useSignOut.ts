import { Alert } from "react-native";
import { useMutation } from "@tanstack/react-query";

import * as AuthAPI from "@/api/auth";

const useSignOut = () => {
  const query = useMutation({
    mutationFn: AuthAPI.signOut,
    onError: (error) => {
      Alert.alert("Error", error.message);
    },
  });

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to continue?", [
      { text: "Cancel" },
      { text: "Ok", style: "destructive", onPress: () => query.mutate() },
    ]);
  };

  return {
    query: {
      mutate: handleSignOut,
      isPending: query.isPending,
    },
  };
};

export default useSignOut;
