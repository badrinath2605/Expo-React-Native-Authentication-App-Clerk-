import { useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f9fafb",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 10 }}>
          Welcome 👋
        </Text>

        <Text style={{ fontSize: 16, color: "#4b5563", marginBottom: 20 }}>
          You are logged in as{" "}
          <Text style={{ fontWeight: "600" }}>
            {user?.emailAddresses?.[0]?.emailAddress}
          </Text>
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/profile")}
          style={{
            backgroundColor: "#2563eb",
            padding: 14,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Go to Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}












// // app/(tabs)/home.tsx
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to the Home screen!</Text>
//       <Text>Only signed-in users can see this.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
// });
