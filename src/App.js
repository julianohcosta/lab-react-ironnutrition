import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import { Button, Divider, Result, Row } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {

  const [allFoods, setAllFoods] = useState(foods);
  const [showForm, setShowForm] = useState(true)
  const [search, setSearch] = useState('');

  function deleteFood(name) {
    setAllFoods(prevFood => prevFood.filter(food => food.name !== name));
  }

  return (
    <div className='App'>

      {showForm && <AddFoodForm allFoods={allFoods} addFood={setAllFoods} />}
      <Button onClick={() => { setShowForm(!showForm) }}> Hide Form / Add New Food </Button>

      <SearchBar search={search} setSearch={setSearch}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFoods
          .filter((food) => (food.name).toLowerCase().includes(search.toLowerCase()))
          .map((food) => {
            return (
              <div key={food.name}>
                <FoodBox food={food} deleteFood={deleteFood} />
              </div>
            );
          }).reverse()}

        {allFoods.length === 0 && <Result title="Ops. There's no more content to show!" />}

      </Row>
    </div>
  );
}

export default App;
