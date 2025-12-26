import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabs from "./navigation/BottomTabs";
import { UserLevelProvider } from "./context/UserLevelContext";
import { StatusBar } from 'expo-status-bar';
import "./global.css";

export default function App() {
  return (
    <SafeAreaProvider>
      <UserLevelProvider>
        <NavigationContainer>
          <StatusBar style="light" translucent backgroundColor="transparent" />
          <BottomTabs />
        </NavigationContainer>
      </UserLevelProvider>
    </SafeAreaProvider>
  );
}
