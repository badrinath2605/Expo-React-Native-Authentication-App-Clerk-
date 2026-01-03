import { ClerkLoaded, ClerkLoading, useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) return;

    try {
      const attempt = await signIn.create({
        identifier: email,
        password,
      });

      if (attempt.status === "complete") {
        await setActive({ session: attempt.createdSessionId });
        router.replace("/");
      } else {
        console.log("Additional steps required:", attempt);
      }
    } catch (err) {
      console.error("Sign-in error:", err);
    }
  };

  return (
    <>
      <ClerkLoading>
        <ActivityIndicator size="large" />
      </ClerkLoading>

      <ClerkLoaded>
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 20 }}>
            Sign In
          </Text>

          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={{
              borderWidth: 1,
              borderRadius: 6,
              padding: 10,
              marginBottom: 12,
            }}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{
              borderWidth: 1,
              borderRadius: 6,
              padding: 10,
              marginBottom: 20,
            }}
          />

          <TouchableOpacity
            onPress={onSignInPress}
            style={{
              backgroundColor: "#2563eb",
              padding: 12,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
              Continue
            </Text>
          </TouchableOpacity>

          {/* Sign-up link */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <Text>Don’t have an account? </Text>
            <Link href="/sign-up">
              <Text style={{ color: "#2563eb", fontWeight: "600" }}>
                Sign up
              </Text>
            </Link>
          </View>
        </View>
      </ClerkLoaded>
    </>
  );
}
