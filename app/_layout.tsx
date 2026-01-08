import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Stack />

      <View style={styles.footer}>
        <Text style={styles.footerText}>version 1.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e7e7e7',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
});