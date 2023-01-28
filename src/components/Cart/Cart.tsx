import Modal from '../UI/Modal';
import styles from './Cart.module.css';

type CardProps = {
  onHideCard: () => void;
}

function Cart(props: CardProps) {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[
        {id: 'm1', name: 'Sushi', amount: 2, price: 10.99}
      ].map(item => (
        <li>{item.name}</li>
      ))
      }
    </ul>
  )

  return <Modal onHideCard={props.onHideCard}>
    {cartItems}
    <div className={styles.total}>
      <span>Итого</span>
      <span>49.99</span>
    </div>
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={props.onHideCard}>Close</button>
      <button className={styles.button}>Order</button>
    </div>
  </Modal>
}

export default Cart;