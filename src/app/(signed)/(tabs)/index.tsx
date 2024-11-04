import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function Products() {
  return (
    <View style={styles.container}>
      <Text>Tab One</Text>
      <Link href="/(signed)/10">
        <Text>Product Detail</Text>
      </Link>
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
