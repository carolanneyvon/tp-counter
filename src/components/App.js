import './App.css';
import Counter from './Counter';
import { useEffect, useState } from 'react';
import Data from '../services/Data';
import FormAdd from './FormAdd';

function App() {
  // Destructuring pour gérer le state
  const [counters, setCounters] = useState([]);

  // Use Effect avec comme 2eme paramètre [] imite le hook componentDidMount
  useEffect(() => {
    // Imite componentDidMount et ne s'exécute qu'au premier rendu
    console.log(`Dans useEffect`);
    // Appel du service Data
    (async () => {
      setCounters(await Data.loadCounters())
      console.log(`counters : `, counters);
    })();
  }, []);

  // Incrémente uniquement le compteur dont on a l'id
  const increment = (id) => {
    console.log(`Dans increment`);
    setCounters(counters => counters.map((counter) => {
      if (id === counter.id) counter.value++;
      return counter;
    }));
  }
  // Decremente uniquement le compteur dont on a l'id
  const decrement = (id) => {
    console.log(`Dans decrement`);
    setCounters (counters => counters.map((counter) => {
      if (id === counter.id) counter.value --;
      return counter;
    }));
  }

  const incrementAll = () => {
    // Pour agir sur tous les compteurs
    const copy_counters = counters.map(counter => {
      counter.value ++;
      return counter;
    })
    setCounters (counters => copy_counters);
  }
  const decrementAll = () => {
    const copy_counters = counters.map(counter => {
      counter.value --;
      return counter;
    })
    setCounters (counters => copy_counters);
  }

  // Gestion de l'ajout d'un compteur
  const handleSubmitAdd = (event) => {
    event.preventDefault();
    console.log(`Dans handleSubmit`);
    // Ajout d'un compteur en faisant appel à l'api rest
    Data.addCounters();
  }

  return (
    <div className="App container">
      <h1 className='pb-3'>Compteur</h1>
      <h2>Créer un compteur</h2>
      <FormAdd onAdd={(event) => {
        handleSubmitAdd(event);
      }}/>
      <button
        onClick={decrementAll}
        className="btn btn-warning me-3">Decrémenter
      </button>
      <button
        onClick={incrementAll}
        className="btn btn-warning ms-3">Incrémenter
      </button>

      {counters.map(counter => 
        <Counter 
          key={counter.id} 
          counter={counter}
          onIncrement={increment}
          onDecrement={decrement}
        />)}
    </div>
  );
}

export default App;
