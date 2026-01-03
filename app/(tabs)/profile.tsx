import { useAuth, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();          // 1️⃣ End Clerk session
    router.replace("/");     // 2️⃣ Go to auth gate (index.tsx)
  };

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
        <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 20 }}>
          Profile
        </Text>

        <Text style={{ fontSize: 14, color: "#6b7280" }}>User ID</Text>
        <Text style={{ fontSize: 16, marginBottom: 16 }}>
          {user?.id}
        </Text>

        <Text style={{ fontSize: 14, color: "#6b7280" }}>Email</Text>
        <Text style={{ fontSize: 16, marginBottom: 30 }}>
          {user?.emailAddresses?.[0]?.emailAddress}
        </Text>

        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: "#dc2626",
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
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
