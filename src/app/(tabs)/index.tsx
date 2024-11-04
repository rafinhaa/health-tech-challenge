import { StyleSheet, Text, View } from "react-native"

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider"
import "@/styles/global.css"

export default function TabOneScreen() {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <Text>Olá mundo!</Text>
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
