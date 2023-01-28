import { createContext } from 'react';
import {CartContextType} from '../types/cartContextType';

const CartContext: any = createContext({
  items: [{}],
  totalAmount: 0,
  addItem: (item: {id: string, name: string, amount: number, price: number}) => {},
  removeItem: (id: string) => {}
});

export default CartContext;