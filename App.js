import './App.css';
import React,{useState} from 'react';
import { Button } from '@material-ui/core';
function App() {
  const [todos, settodos] = useState(["finish this tut!!!"]);
  const [input, setInput] = useState("");


  const addTodo = (event) => {
    event.preventDefault();
    settodos([...todos, input]);
    setInput('');
    
  };
  
  return (
    <div className="App">
        <h1>My TODO List</h1>
        <form>
          <input type="text" value={input} placeholder="Stay safe 😷" onChange={e => setInput(e.target.value)}/>
          <Button>afdka</Button>
          <button disabled={!input} type="submit" onClick={addTodo}>Add todo</button>
        </form>
        <ul>
          {todos.map(todo=>(<li>{todo}</li>))}
        </ul>
    </div>
  );
}

export default App;
