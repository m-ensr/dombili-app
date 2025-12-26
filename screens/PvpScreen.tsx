import { View, Text } from 'react-native';
import { useUserLevel } from '../context/UserLevelContext';
import { LEVEL_COLORS, COLORS } from '../constants/colors';

export default function PvpScreen() {
  const { userLevel } = useUserLevel();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background.surface,
      }}>
      <Text style={{ color: LEVEL_COLORS[userLevel], fontSize: 28, fontWeight: 'bold' }}>PvP</Text>
    </View>
  );
}
