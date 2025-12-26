import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Gelecekte Firebase'den userLevel çekmek için örnek fonksiyon
// async function fetchUserLevelFromFirebase(userId: string): Promise<number> {
//   // Firebase'den userLevel'i çek
//   return 1;
// }

type UserLevelContextType = {
  userLevel: number;
  setUserLevel: (level: number) => void;
};

const UserLevelContext = createContext<UserLevelContextType>({
  userLevel: 1,
  setUserLevel: () => {},
});

export const UserLevelProvider = ({ children }: { children: ReactNode }) => {
  const [userLevel, setUserLevel] = useState(1); // default level

  // useEffect(() => {
  //   const userId = "firebaseUserId";
  //   fetchUserLevelFromFirebase(userId).then(level => setUserLevel(level));
  // }, []);

  return (
    <UserLevelContext.Provider value={{ userLevel, setUserLevel }}>
      {children}
    </UserLevelContext.Provider>
  );
};

export const useUserLevel = () => useContext(UserLevelContext);
