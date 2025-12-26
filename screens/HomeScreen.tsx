import { View, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, LEVEL_COLORS } from '../constants/colors';
import { useUserLevel } from '../context/UserLevelContext';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { userLevel } = useUserLevel();
  const levelColor = LEVEL_COLORS[userLevel as keyof typeof LEVEL_COLORS];

  return (
    <View
      className="flex-1"
      style={{
        paddingTop: insets.top,
        backgroundColor: COLORS.background.surface,
      }}>
      <ScrollView
        contentContainerStyle={{
          padding: 16,
        }}
        showsVerticalScrollIndicator={false}>
        <Text className="mb-2 text-2xl font-bold" style={{ color: COLORS.text.primary }}>
          slm
        </Text>
        <View
          className="mb-4 rounded-lg p-4"
          style={{ backgroundColor: COLORS.background.surfaceElevated }}>
          <Text className="text-lg font-semibold" style={{ color: levelColor }}>
            Seviye {userLevel}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
