export interface User {
  email: string;
  name: string;
  picture: string;
}

export interface UserDetailContextType {
  userDetail: User | undefined;
  setUserDetail: React.Dispatch<React.SetStateAction<User | undefined>>;
  loading: boolean;
  setLoading(val: boolean): void;
}

export interface GetUserProfileInfoType {
  access_token: string;
  setUserDetail: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export interface WishListType {
  id: string;
  title: string;
  price: number;
  image: string;
}

export interface CartItemType extends WishListType {
  quantity: number;
}

export interface CartItemProps extends CartItemType {
  href?: string;
  onUpdateQuantity?(id: string, quantity: number): void;
  onRemove?(id: string): void;
}

export interface State {
  cart: CartItemType[];
  wishlist: WishListType[];
}

export interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  href?: string;
}

export type Action =
  | { type: "ADD_TO_CART"; payload: CartItemType }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "UPDATE_CART_QTY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "ADD_TO_WISHLIST"; payload: WishListType }
  | { type: "REMOVE_FROM_WISHLIST"; payload: string }
  | { type: "MOVE_WISHLIST_TO_CART"; payload: string };
