import {useState, useEffect, useRef}  from 'react'
import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  const inputRef = useRef()

  const handleToDo = () => {
    const text = inputRef.current.value
    const newItem = { completed: false, text };
    setTodos([...todos, newItem])
    inputRef.current.value = "";
  }
  
  const handleDeleteItem = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos);
     }
  const handleItemDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos)

  }
  
 
  return (
    <div className="App">
     <h2>To Do List</h2>
     <div className='to-do-container'>
     <ul>
     {todos.map(({text, completed}, index) => {
      return <div className='item'>
         <li className={completed ? "done" : ""} key={index} onClick={() => handleItemDone(index)}>{text}</li>
        <span  className="delete" onClick={() => handleDeleteItem(index)}>❌</span>       
     </div>
     })}
     </ul>
    <input ref={inputRef}/>
    <button onClick={handleToDo}>Add</button>
     </div>
        </div>
    
  );
}

export default App;
