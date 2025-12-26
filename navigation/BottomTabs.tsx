import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Animated } from "react-native";
import { useRef } from "react";

import HomeScreen from "../screens/HomeScreen";
import LogScreen from "../screens/LogScreen";
import PvpScreen from "../screens/PvpScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { AppIcon } from "../components/icon/AppIcon";
import { LAYOUT, SHADOW } from "../constants/layout";
import { COLORS, LEVEL_COLORS } from "../constants/colors";
import { useUserLevel } from "../context/UserLevelContext";

const Tab = createBottomTabNavigator();
const TAB_ICON_MAP = { Home: "home", Log: "log", PvP: "pvp", Profile: "profile" } as const;
const TAB_KEYS = Object.keys(TAB_ICON_MAP);

export default function BottomTabs() {
  const insets = useSafeAreaInsets();
  const activeIndex = useRef(new Animated.Value(0)).current;

  // user levele göre tab rengi işi: 
  const { userLevel } = useUserLevel();

  return (
    <Tab.Navigator
      screenListeners={{
        state: (e) => {
          const index = e.data.state.index;
          Animated.timing(activeIndex, { toValue: index, duration: 320, useNativeDriver: false }).start();
        },
      }}
      screenOptions={({ route }) => {
        const tabIndex = TAB_KEYS.indexOf(route.name);
        return {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: LAYOUT.bottomNavHeight,
            paddingTop: 8,
            paddingBottom: insets.bottom,
            backgroundColor: COLORS.background.surface,
            borderTopWidth: 1,
            borderTopColor: COLORS.border.divider,
            ...SHADOW,
          },
          tabBarItemStyle: { flex: 1, justifyContent: "center", alignItems: "center" },
          tabBarIcon: ({ focused }) => {
            const iconName = TAB_ICON_MAP[route.name as keyof typeof TAB_ICON_MAP];
            if (!iconName) return null;

            const progress = activeIndex.interpolate({
              inputRange: [tabIndex - 1, tabIndex, tabIndex + 1],
              outputRange: [0, 1, 0],
              extrapolate: "clamp",
            });
            const opacity = progress.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1] });

            return (
              <Animated.View style={{ opacity, alignItems: "center", justifyContent: "center" }}>
                <AppIcon
                  name={iconName}
                  size={focused ? 30 : 28}
                  // renk kısmı:
                  color={focused ? LEVEL_COLORS[userLevel] : COLORS.icon.inactive}
                  style={
                    focused
                      ? { shadowColor: LEVEL_COLORS[userLevel], shadowOpacity: 0.90, shadowRadius: 12, shadowOffset: { width: 0, height: 0 }, elevation: 8 }
                      : undefined
                  }
                />
              </Animated.View>
            );
          },
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Log" component={LogScreen} />
      <Tab.Screen name="PvP" component={PvpScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
