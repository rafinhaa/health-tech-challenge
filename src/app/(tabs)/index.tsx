import { StyleSheet, View, Text } from "react-native";
import "@/styles/global.css";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function TabOneScreen() {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <Text>Olá mundo!</Text>
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
