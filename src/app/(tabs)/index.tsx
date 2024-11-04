import { Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter"
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto"
import { useFonts } from "expo-font"
import { useTranslation } from "react-i18next"
import { StyleSheet, Text, View } from "react-native"

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider"
import "@/locales"
import "@/styles/global.css"

export default function TabOneScreen() {
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
    Roboto_500Medium,
    Roboto_400Regular,
  })

  const { t } = useTranslation()

  if (!fontsLoaded) return

  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <Text>{t("startingMessage")}</Text>
      </View>
    </GluestackUIProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
