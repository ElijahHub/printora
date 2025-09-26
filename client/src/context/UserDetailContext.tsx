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
  const [loading, setLoading] = useState(false);

  return (
    <UserDetailContext.Provider
      value={{ userDetail, setUserDetail, loading, setLoading }}
    >
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
