"use client";

import { ChangeEvent, useState } from 'react';
import Button from '../components/Button';

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  // setInterval(() => {
  //   setCount((prevState) => prevState + 1);
  // }, 100);

  const handleIncrease = () => {
    console.log('Incrementar')
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const handleDecrease = () => {
    console.log('Decrementar')
    setCount((prevState) => prevState - 1);
  }

  const handleReset = () => {
    console.log('Reiniciar')
    setCount(0);
  }

  const handleChance = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <main className="flex flex-col items-start gap-4">
      <h1 className="text-5xl">Event Handlers</h1>
      <p>{count}</p>
      <div className="flex gap-4">
        <Button onClick={handleIncrease}>Incrementar</Button>
        <Button onClick={handleDecrease}>Incrementar</Button>
        <Button onClick={handleReset}>Reiniciar</Button>
      </div>
      <input className='text-black' onChange={handleChance} type="text"/>
    </main>
  )
}