import { Divider, Input } from 'antd';
import { useState } from 'react';


/**
 * @typedef {object} Food
 * @property {string} name
 * @property {number} calories
 * @property {string} image
 * @property {number} servings
 */

/**
 * @callback addFood
 * @param {Food[]} food
 */

/**
 *
 * @param {object} props
 * @param {Food[]} props.foods
 * @param {addFood} props.addFood
 * @returns {JSX.Element}
 * @constructor
 */
const AddFoodForm = (props) => {

  const [form, setForm] = useState({
    name: '',
    calories: '',
    image: '',
    servings: ''
  })


  function handleChange(event) {
    console.log(form)
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addFood(prevList => [...prevList, form])
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input onChange={handleChange} type="text" name="name" />

      <label>Image</label>
      <Input onChange={handleChange}  type="text" name="image" />

      <label>Calories</label>
      <Input onChange={handleChange}  type="text" name="calories" />

      <label>Servings</label>
      <Input onChange={handleChange}  type="text" name="servings" />

      <button type="submit" onClick={handleSubmit}>Create</button>
    </form>
  );
};

export default AddFoodForm;