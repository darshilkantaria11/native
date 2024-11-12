// /app/layout.js
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#3B1E54' },
        headerTintColor: '#EEEEEE',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About Us" }} />
      <Stack.Screen name="todo" options={{ title: "Todo App" }} />
    </Stack>
  );
}
