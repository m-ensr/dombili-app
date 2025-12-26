import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { User, createDefaultUser } from "./users";

/**
 * Kullanıcı doc'u var mı yok mu bakar,
 * yoksa oluşturur (signup sonrası çağrılır)
 */
export async function ensureUserDocument(
  uid: string,
  data: {
    username: string;
    displayName?: string;
  }
): Promise<void> {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    const user = createDefaultUser(data);

    await setDoc(ref, {
      ...user,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }
}

/**
 * Kullanıcıyı Firestore'dan çeker
 */
export async function getUser(uid: string): Promise<User | null> {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;
  return snap.data() as User;
}

/**
 * Kullanıcı level'ını günceller
 * (örn: inactive -> aktif dönüş)
 */
export async function updateUserLevel(
  uid: string,
  level: number
): Promise<void> {
  const ref = doc(db, "users", uid);

  await updateDoc(ref, {
    level,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Workout sonrası çağrılacak
 * streak + lastWorkout + level logic buraya taşınır
 */
export async function registerWorkout(
  uid: string,
  now: Timestamp
): Promise<void> {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;

  const user = snap.data() as User;

  let activeStreak = user.stats.activeStreak ?? 0;
  let longestStreak = user.stats.longestStreak ?? 0;

  // basit streak örneği (ileride geliştiririz)
  activeStreak += 1;
  longestStreak = Math.max(longestStreak, activeStreak);

  await updateDoc(ref, {
    lastWorkoutAt: now,
    level: user.level === 0 ? 1 : user.level,
    "stats.activeStreak": activeStreak,
    "stats.longestStreak": longestStreak,
    updatedAt: serverTimestamp(),
  });
}
