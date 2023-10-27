import './App.css'
import {useState} from "react";
import Buttons from "./components/Buttons.tsx";
import TextStuff from "./components/TextStuff.tsx";
import DisplayComponent from "./components/DisplayComponent.tsx";

function App() {

  const [count, setCount] = useState<number>(5);
  const [input, setInput] = useState<string>("")

  function add() {
    setCount(count +1)
  }
  function sub() {
    setCount(count -1)
  }

  function handleUpdate(newValue:string) {
    setInput(newValue)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <Buttons add={add} sub={sub} />
      <p>The count is {count % 2 === 0 ? "even" : "odd"}</p>


      <TextStuff onHandleUpdate={handleUpdate} input={input}/>
      <DisplayComponent value={input}/>
    </>
  )
}

export default App
