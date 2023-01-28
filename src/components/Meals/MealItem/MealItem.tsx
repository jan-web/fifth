import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import { CartContextType } from '../../../types/cartContextType';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

type MealItemProps = {
  id: string;
  name: string;
  description: string;
  price: number;
}

function MealItem(props: MealItemProps): JSX.Element {
  const cartContext: CartContextType = useContext(CartContext);
  const formattedPrice = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount: any) => {
    if(cartContext.addItem) {
        cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price

    })
    }

  }

  return <li className={styles.meal}>
    <div>
      <h3>{props.name}</h3>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>{formattedPrice}</div>
    </div>
    <div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    </div>
  </li>;
}

export default MealItem;