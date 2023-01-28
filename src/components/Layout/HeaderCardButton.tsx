import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CardIcon';
import { CartContextType } from '../../types/cartContextType';

type HeaderCardButtonProps = {
  onClick: () => void;
}

function HeaderCardButton(props: HeaderCardButtonProps): JSX.Element {
  const cartContext: CartContextType = useContext(CartContext);
  console.log('cartContext.items: ', cartContext.items);
  // const cartItemsNumber = cartContext.items.reduce((currentValue: number, item: CartContextType)=> {
  //   return currentValue + item.totalAmount;
  // }, 0);
  const cartItemsNumber = cartContext.items.length > 0 ?
  cartContext.items.reduce((currentValue: number, item: any)=> {
    console.log('item: ', item);
    return currentValue + item.totalAmount;
  }, 0) : 0;


  return <button className={styles.button} onClick={props.onClick}>
    <span className={styles.icon}> <CartIcon /> </span>
    <span>Cart</span>
    <span className={styles.badge}>
      {cartItemsNumber}
    </span>
  </button>;
}

export default HeaderCardButton;