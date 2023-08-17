import './App.css';
import Counter from './Counter';
import { useEffect, useState } from 'react';
import Data from '../services/Data';

function App() {
  // Destructuring pour gérer le state
  //const [counter, setCounter] = useState(0); // 0 est la valeur par défaut
  //const maVariable = useState(0)[0];
  //const setMaVariable = useState(0)[1];
  const [counters, setCounters] = useState([]);

  // Use Effect avec comme 2eme paramètre [] imite le hook componentDidMount
  useEffect(() => {
    // Imite componentDidMount et ne s'exécute qu'au premier rendu
    console.log(`Dans useEffect`);
    // Appel du service Data
    (async () => {
      // const counters = await Data.loadCounters();
      setCounters(await Data.loadCounters())
      console.log(`counters : `, counters);
    })();
  }, []);

  const increment = () => {
    //setCounters(counters + 1)
    // Pour agir sur tous les compteurs
    const copy_counters = counters.map(counter => {
      counter.value ++;
      return counter;
    })
    // autre solution avec le spread operator [...xxx]
    // const copy_counters2 = [...counters];
    // copy_counters2.forEach(counter => {
    //   counter.value ++;
    // })
    setCounters (counters => copy_counters);
  }
  const decrement = () => {
    //setCounters(counters - 1)
    // Pour agir sur tous les compteurs
    const copy_counters = counters.map(counter => {
      counter.value --;
      return counter;
    })
    setCounters (counters => copy_counters);
  }

  return (
    <div className="App container">
      <h1 className='pb-3'>Compteur</h1>
      <button
        onClick={decrement}
        className="btn btn-warning me-3">Decrémenter</button>
      {/* <Counter counter={counter} /> */}
      <button
        onClick={increment}
        className="btn btn-warning ms-3">Incrémenter</button>
      {counters.map(counter => <Counter key={counter.id} counter={counter}/>)}
    </div>
  );
}

export default App;
