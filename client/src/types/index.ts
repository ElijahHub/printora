export interface User {
  email: string;
  name: string;
  picture: string;
}

export interface UserDetailContextType {
  userDetail: User | undefined;
  setUserDetail: React.Dispatch<React.SetStateAction<User | undefined>>;
}
