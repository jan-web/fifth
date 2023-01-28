import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

type ModalProps = {
  onHideCard: () => void;
  children:  React.ReactNode;
}
type BackdropProps = {
  onHideCard: () => void;
}
type ModalWindowProps = {
  children:  React.ReactNode;
}
const Backdrop = (props: BackdropProps) => {
  return <div className={styles.backdrop} onClick={props.onHideCard}></div>
}
const ModalWindow = (props: ModalWindowProps) => {
  return <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div>
}

function Modal(props: ModalProps) {
  const portalElement = document.getElementById('overlays') as HTMLElement;

  return <>
    {ReactDOM.createPortal(<Backdrop onHideCard={props.onHideCard}/>, portalElement)}
    {ReactDOM.createPortal(
      <ModalWindow>{props.children}</ModalWindow>,
      portalElement
    )}
  </>;
}

export default Modal;