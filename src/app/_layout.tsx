import { Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter"
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider"
import "@/locales"
import "@/styles/global.css"

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
    Roboto_500Medium,
    Roboto_400Regular,
  })

  if (!fontsLoaded) return

  return (
    <GluestackUIProvider>
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(signed)" />
      </Stack>
    </GluestackUIProvider>
  )
}