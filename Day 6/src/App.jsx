import { useState } from 'react';
import { CounterContext } from './context/CounterContext';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <CounterContext.Provider value={{ count, setCount }}>
        <Header />
        <Body />
        <Footer />
      </CounterContext.Provider>
    </>
  )

}

export default App;
