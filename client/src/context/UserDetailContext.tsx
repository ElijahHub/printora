import { User, UserDetailContextType } from "@/types";
import { createContext, useContext, useState } from "react";

export const UserDetailContext = createContext<
  UserDetailContextType | undefined
>(undefined);

export function UserDetailProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userDetail, setUserDetail] = useState<User | undefined>(undefined);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export function useUserDetail() {
  const context = useContext(UserDetailContext);
  if (context === undefined) {
    throw new Error("useUserDetail must be used within a UserDetailProvider");
  }
  return context;
}
