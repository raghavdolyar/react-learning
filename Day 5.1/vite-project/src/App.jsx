import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Sum from './components/Sum';

export default function App() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // function countPrimes() {

  //   let total = 0;

  //   if (number > 1) {
  //     total++;
  //   }

  //   for (let i = 3; i <= number; i++) {
  //     total++;
  //     for (let j = 2; j < i; j++) {
  //       if (i % j == 0) {
  //         total--;
  //         break
  //       }
  //     }
  //   }

  //   return total;

  // }

  const primes = useMemo(() => {

    if (number <= 1) {
      return 0;
    }

    let total = number - 1;

    let isPrime = new Array(number + 1).fill(true);

    for (let i = 2; i <= number; i++) {
      if (isPrime[i]) {
        for (let j = 2 * i; j <= number; j += i) {
          if (isPrime[j]) {
            isPrime[j] = false;
            total--;
          }
        }
      }
    }

    return total;

  }, [number]);

  const clickHandler = useCallback(() => {
    console.log(`Hello World ${count} times`);
  }, [count]);

  console.log("app rendered");

  return (
    <>

      <h2>Counter : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Number : {number}</h2>
      <button onClick={() => setNumber(number * 2)}>Double</button>

      <h2>Total Primes : {primes}</h2>

      <button onClick={clickHandler}>Greetings</button>

      {/* <Sum number={100}></Sum> */}
      <Sum number={count}></Sum>

    </>
  );
}
