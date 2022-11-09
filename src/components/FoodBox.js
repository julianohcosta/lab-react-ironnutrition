import { Button, Card, Col } from 'antd';

/**
 * @typedef {object} Food
 * @property {string} name
 * @property {number} calories
 * @property {string} image
 * @property {number} servings
 */

/**
 * @callback deleteFood
 * @param {string} name
 */

/**
 * @param {object}props
 * @param {Food} props.food
 * @param {deleteFood } props.deleteFood
 * @returns {JSX.Element}
 * @constructor
 */
const FoodBox = (props) => {
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt='food' />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
        </p>
        <Button type='primary' onClick={() => props.deleteFood(props.food.name)}> Delete </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;