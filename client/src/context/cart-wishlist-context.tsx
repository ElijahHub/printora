"use client";

import { Action, State } from "@/types";
import { Dispatch, createContext, useReducer, ReactNode , useContext} from "react";

const initialState: State = {
  cart: [],
  wishlist: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist)
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === exist.id
              ? {
                  ...item,
                  quantity: item.quantity + action.payload.quantity,
                }
              : item
          ),
        };
      return { ...state, cart: [...state.cart, action.payload] };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_CART_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "ADD_TO_WISHLIST": {
      const exists = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (exists) return state;
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };

    case "MOVE_WISHLIST_TO_CART": {
      const item = state.wishlist.find((i) => i.id === action.payload);
      if (!item) return state;
      return {
        ...state,
        wishlist: state.wishlist.filter((i) => i.id !== action.payload),
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }

    default:
      return state;
  }
}

const CartWishlistContext = createContext<{
  state:State;
  dispatch: Dispatch<Action>
}>({state : initialState, dispatch: () => undefined})

export function CartWishListProvider({children}: {children: ReactNode}){
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartWishlistContext.Provider value={{state, dispatch}} >
      {children}
    </CartWishlistContext.Provider>
  )
}

export function useCartWishlist() {
  return useContext(CartWishlistContext)
}