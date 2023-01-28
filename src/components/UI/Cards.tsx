import styles from './Card.module.css';

type CardProps = {
  children:  React.ReactNode;
}

function Card(props: CardProps): JSX.Element {
  return (
    <div className={styles.card}>
      {props.children}
    </div>
   );
}

export default Card;