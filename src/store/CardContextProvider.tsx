import { useReducer } from "react";
import CartContext from "./cart-context";
import {CartContextType} from '../types/cartContextType';

type CartStateType = {
  items: {}[],
  totalAmount: number
}

const defaultCartState = {
  items: [],
  totalAmount: 0
}

type itemType = {id: string, name: string, amount: number, price: number}

type ActionType = {
  type: 'ADD_ITEM',
  item: itemType
} | {
  type: 'REMOVE_ITEM',
  id: string
}
const cartReducer = (prevState: CartContextType, action: ActionType): CartContextType => {
  if(action.type === 'ADD_ITEM') {
    const updatedItems = prevState.items.concat(action.item);
    const updatedTotalAmount = prevState.totalAmount + action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
}

type CardContextProviderProps = {
  children: React.ReactNode;
}
function CardContextProvider(props: CardContextProviderProps): JSX.Element {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemHandler = (item: itemType) => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      item: item
    });
  };

  const removeItemHandler = (id: string) => {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id: id
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount ,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }
  return <CartContext.Provider value={cartContext}>
            {props.children}
         </CartContext.Provider>
}

export default CardContextProvider;