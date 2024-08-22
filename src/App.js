import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodItem from './components/FoodItem';
import ErrorMsg from './components/ErrorMsg';
import Container from './components/Container';
import AddItemInput from './components/AddItemInput';
import { useState } from 'react';

function App() {



  const [fooditems, setFoodItems] = useState([])

  const onkeydown = (e) => {
    if (e.key === 'Enter') {
      const newFoodItem = e.target.value;
      e.target.value = "";
      const newItem = [...fooditems, newFoodItem];
      setFoodItems(newItem);

    }
  }


  //Handle the input by using onChange handler
  // const[textToShow, setTextToShow]=useState("Item enterd By User")
  // const handlonChange = (e) =>{
  //   setTextToShow(e.target.value)
  // }


  return (
    <center className='container'>
      <Container>
        <h1 className='food-heading'>Healthy Foods</h1>
        <AddItemInput handlonKeyDown={onkeydown} />
        <ErrorMsg fooditems={fooditems} />
        {/* <p>{textToShow}</p> */}
        <FoodItem fooditems={fooditems} />
      </Container>

      <Container >

        <p >Easily extend form controls by adding text, buttons,
          or button groups on either side of textual inputs, custom selects,
          and custom file inputs.</p>

      </Container>
    </center>
  );
}

export default App;
