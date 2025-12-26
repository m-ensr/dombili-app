import { Timestamp, FieldValue } from "firebase/firestore";

export type Gender = "male" | "female" | "other";

export type UserStats = {
  activeStreak: number;
  longestStreak: number;
};

export type UserPoints = {
  total: number;
  pvp: number;
};

export type UserBody = {
  birthdate?: Timestamp;
  heightCm?: number;
  weightKg?: number;
  gender?: Gender;
};

export type UserNotifications = {
  enabled: boolean;
  fcmToken?: string | null;
};

export type User = {
  username: string;
  displayName?: string | null;
  avatarUrl?: string | null;

  level: number;               // 0 = inactive, 1-5 aktif
  lastWorkoutAt?: Timestamp | null;

  stats: UserStats;
  points: UserPoints;

  body?: UserBody | null;
  notifications: UserNotifications;

  createdAt: Timestamp | FieldValue;
  updatedAt: Timestamp | FieldValue;
};

/**
 * Firestore'a ilk kez yazılacak default user objesi
 */
export function createDefaultUser(data: {
  username: string;
  displayName?: string;
}): User {
  return {
    username: data.username,
    displayName: data.displayName ?? null,
    avatarUrl: null,

    level: 1,
    lastWorkoutAt: null,

    stats: {
      activeStreak: 0,
      longestStreak: 0,
    },

    points: {
      total: 0,
      pvp: 0,
    },

    body: null,

    notifications: {
      enabled: true,
      fcmToken: null,
    },

    createdAt: Timestamp.now(), // serverTimestamp service'te override edilecek
    updatedAt: Timestamp.now(),
  };
}
