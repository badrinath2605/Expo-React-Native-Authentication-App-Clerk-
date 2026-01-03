import { ClerkLoaded, ClerkLoading, useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUpScreen() {
  const { signUp, setActive, isLoaded } = useSignUp();
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: email,
        password,
      });

      // For assignments: auto-activate session (email verification OFF)
      await setActive({ session: signUp.createdSessionId });
      router.replace("/");
    } catch (err) {
      console.error("Sign-up error:", err);
    }
  };

  return (
    <>
      <ClerkLoading>
        <ActivityIndicator size="large" />
      </ClerkLoading>

      <ClerkLoaded>
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
          <Text style={{ fontSize: 22, marginBottom: 20 }}>Create Account</Text>

          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={{ borderWidth: 1, padding: 10, marginBottom: 12 }}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
          />

          <TouchableOpacity
            onPress={onSignUpPress}
            style={{ backgroundColor: "#2563eb", padding: 12 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ClerkLoaded>
    </>
  );
}
