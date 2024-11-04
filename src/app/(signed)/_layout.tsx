import { Stack } from "expo-router"

export default function SignedLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />

      <Stack.Screen name="[product-id]" />
    </Stack>
  )
}
