import { View, Text, TouchableOpacity } from "react-native";
import { useUserLevel } from "../context/UserLevelContext";
import { LEVEL_COLORS, COLORS } from "../constants/colors";

export default function ProfileScreen() {
  const { userLevel, setUserLevel } = useUserLevel();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.background.surface }}>
      <Text style={{ color: LEVEL_COLORS[userLevel], fontSize: 28, fontWeight: "bold", marginBottom: 24 }}>Profile</Text>
      {[0,1,2,3,4,5].map(level => (
        <TouchableOpacity
          key={level}
          style={{ marginVertical: 4, padding: 10, backgroundColor: LEVEL_COLORS[level], borderRadius: 8 }}
          onPress={() => setUserLevel(level)}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>level {level}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
