import { Stack } from "expo-router"

export default function SignedLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tabs" options={{ title: "" }} />

      <Stack.Screen
        name="[productId]"
        options={{ headerShown: true, title: "" }}
      />
    </Stack>
  )
}
