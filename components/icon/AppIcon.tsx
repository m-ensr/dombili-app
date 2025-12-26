import {
  Home,
  BookOpen,
  Swords,
  Trophy,
  User,
  Plus,
  Flame,
  Lock,
  Check,
  AlertTriangle,
} from "lucide-react-native";

import { AppIconName } from "./icon.types";

const ICONS: Record<AppIconName, any> = {
  home: Home,
  log: BookOpen,
  pvp: Swords,
  profile: User,
  plus: Plus,
  fire: Flame,
  trophy: Trophy,
  lock: Lock,
  check: Check,
  alert: AlertTriangle,
};

import { StyleProp, ViewStyle } from "react-native";

type Props = {
  name: AppIconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: StyleProp<ViewStyle>;
};

export function AppIcon({
  name,
  size = 24,
  color = "#111",
  strokeWidth = 1.75,
  style,
}: Props) {
  const Icon = ICONS[name];
  return <Icon size={size} color={color} strokeWidth={strokeWidth} style={style} />;
}
