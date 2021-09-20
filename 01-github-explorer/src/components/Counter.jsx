import { useState } from 'react';

//Imutabilidade:
// usuarios = ['diego3g', 'dieegosf', 'danileao']
// usuarios.push('rafacamarda')


//Aplicando a imutabilidade
// novoUsuarios = [... usuarios, 'rafacamarda']

export function Counter(){

  const [counter, setCounter] = useState(0); //retorna um array a função useState

  function increment(){
    setCounter(counter +1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}> 
        Increment
      </button>
    </div>
  )



}