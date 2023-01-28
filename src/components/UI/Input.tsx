import styles from './Input.module.css';
import { forwardRef } from 'react';

type InputProps = {
  label: string;
  input: {
    id: string;
    type: string;
    min: string;
    defaultValue: string;
  }
}

const Input = forwardRef((props: InputProps, ref: any): JSX.Element => {
  console.log('props: ', props);
  return <div className={styles.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input  ref={ref} {...props.input} />;
  </div>

});

export default Input;