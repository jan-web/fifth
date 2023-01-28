import styles from './MealList.module.css';
import Card from '../UI/Cards';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Spring Rolls 4 pcs"',
    description:
      "Minced pork, garlic, carrots, cabbage and grass noodles wrapped in thin pastry. Served with sweet and sour sauce.",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Kai Satay Chicken 4 pcs",
    description: "Chicken skewers marinated in fennel grains, curcuma and curry.",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Tod Mun kai 4 pcs",
    description: "Minced chicken, long beans, lime leaves blended with red curry paste, eggs. Served with sweet and sour sauce.",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Tom Yum Kung Prawns"',
    description:
      "Spicy soup with coconut milk, chili paste, lemon grass, onions, galangal, tomato, mushrooms, lemon leaves, tamarind sauce and celery.",
    price: 7.99,
  },
];

function MealList() {
  const mealList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)

  return (
    <section className={styles.meals}>
      <Card><ul>{mealList}</ul></Card>
    </section>

  );
}

export default MealList;