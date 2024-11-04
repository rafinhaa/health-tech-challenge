import { useTranslation } from "react-i18next"
import { StyleSheet, Text, View } from "react-native"

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider"
import "@/locales"
import "@/styles/global.css"

export default function TabOneScreen() {
  const { t } = useTranslation()

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
