import "../../global.css";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import useAuth from "@/hooks/useAuth";

export default function RootLayout() {
  const { authLoaded } = useAuth();

  if (!authLoaded) return null;

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
