import './App.css';
import axios from 'axios'
import { Home } from './components/Page/Home';
import pizzas from './store/pizzas'; 
import React, {useEffect} from 'react'
function App() {
  React.useEffect(()=>{
    axios.get('http://localhost:3001/pizzas').then(resp=> pizzas.setPizzas(resp.data));
  },[])
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
