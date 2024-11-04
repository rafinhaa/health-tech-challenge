import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Link replace href="/(signed)">
        Tabs
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
