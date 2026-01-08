import { Stack, router } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DescriptionScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginBottom: 20,
      }}
    >

      <Stack.Screen options={{ title: 'Descrição do Quiz' }} />

      <Text></Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/src/screens/description")}
      >
        <Text style={styles.buttonText}>BORA LÁ!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '50%',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    top: '85%',
    position: 'fixed'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});