import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.contenitore}>
      <Text style={styles.titolo}>Index</Text>
      <Pressable style={styles.btn} onPress={() => router.push("/profilo")}>
        <Text style={styles.btnTesto}>Torna indietro</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: { flex: 1, justifyContent: "center", alignItems: "center" },
  titolo: { fontSize: 32, marginBottom: 24 },
  btn: { backgroundColor: "#4f46e5", padding: 16, borderRadius: 8 },
  btnTesto: { color: "white", fontSize: 16 },
});
