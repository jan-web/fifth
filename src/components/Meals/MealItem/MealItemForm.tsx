import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

type MealItemFormProps = {
  id: string;
  onAddToCart: (amount: any) => void;
}

function MealItemForm({ id, onAddToCart }: MealItemFormProps) {
  const [isAmountValid, setIsAmountValid] = useState<boolean>(true);
  const amountInputRef = useRef<null | any>(null);

  const inputAmount = !amountInputRef.current.value ? amountInputRef.current.value : 0;

  if(inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
    setIsAmountValid(false);
    return <></>
  }
  onAddToCart(+inputAmount);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return <form className={styles.form} onSubmit={submitHandler}>
    <Input
      ref={amountInputRef}
      label='quantity'
      input={{
        id: id,
        type: 'number',
        min: '1',
        defaultValue: '1'
      }}
    />
    <button>Add</button>
    {!isAmountValid && <p>Please ente amount entre 1 to 10</p>}
  </form>;
}

export default MealItemForm;