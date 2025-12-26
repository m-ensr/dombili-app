import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import Constants from "expo-constants";

const firebaseConfig = Constants.expoConfig?.extra?.firebase;

if (!firebaseConfig) {
  throw new Error("Firebase config not found in Expo extra");
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
