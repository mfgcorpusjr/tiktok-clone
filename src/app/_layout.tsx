import "../../global.css";

import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

import useAuth from "@/hooks/useAuth";

export default function RootLayout() {
  const { authLoaded } = useAuth();

  useEffect(() => {
    if (authLoaded) SplashScreen.hideAsync();
  }, [authLoaded]);

  if (!authLoaded) return null;

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
