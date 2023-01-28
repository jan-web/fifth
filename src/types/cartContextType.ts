export type CartContextType = {
  items: {}[];
  totalAmount: number;
  addItem?: (item: {id: string, name: string, amount: number, price: number}) => void;
  removeItem?: (id: string) => void;
}