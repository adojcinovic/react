import './App.css';
import { Header } from './header/Header'
// import { Videos } from './videos/Videos'
import React from 'react'
import { useState } from 'react'



function App() {

  const [value, setValue] = useState(0)
  const [nekitext, setInput] = useState('')

  const getInput = () => {
    setInput(nekitext)
    console.log(nekitext);
  }

  const increase = () => {
    setValue(value + 1)
  }

  return (
    <div className="App">
      <Header getText={getInput} input={nekitext} value={value} povecaj={increase} />
    </div>
  );
}

export default App;
