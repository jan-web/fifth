// import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import bestThaiFood from '../../assets/best-thai-food.jpg';
import HeaderCardButton from './HeaderCardButton';

type HeaderProps = {
  onShowCart: () => void;
}

function Header (props: HeaderProps): JSX.Element {
  return <>
  <header className={styles.header}>
    <h1>Bangkok Thai cuisine</h1>
    <HeaderCardButton onClick={props.onShowCart} />
  </header>
  <div className={styles['main-image']}>
    <img src={bestThaiFood} alt="Thai cuisine" />
  </div>

  </>;
}

export default Header ;