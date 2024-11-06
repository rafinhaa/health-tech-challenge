import { Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter"
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider"
import "@/locales"
import "@/styles/global.css"

const queryClient = new QueryClient()

SplashScreen.preventAutoHideAsync()

function AppLayout() {
  return (
    <GluestackUIProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="signed" />
      </Stack>
    </GluestackUIProvider>
  )
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
    Roboto_500Medium,
    Roboto_400Regular,
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout />
    </QueryClientProvider>
  )
}
