import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bem-vindo à Tela Inicial!</Text>
      <Button
        title="Ir para a Tela 2"
        onPress={() => router.push("/src/screens/description")}
      />
    </View>
  );
}
