import { StyleSheet, Text, View } from "react-native"

import "@/locales"
import "@/styles/global.css"

export default function ProductDetails() {
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
