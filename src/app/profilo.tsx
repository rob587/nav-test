import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Profilo() {
  return (
    <View style={styles.contenitore}>
      <Text style={styles.titolo}>Profilo</Text>
      <Pressable style={styles.btn} onPress={() => router.back()}>
        <Text style={styles.btnTesto}>Torna indietro</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: { flex: 1, justifyContent: "center", alignItems: "center" },
  titolo: { fontSize: 32, marginBottom: 24 },
  btn: { backgroundColor: "#e53e3e", padding: 16, borderRadius: 8 },
  btnTesto: { color: "white", fontSize: 16 },
});
