import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import todoReducer, { initialState } from './reducers/todoReducer';

////////////TESTING
const testAction = { type: 'ADD_TASK', payload: { id: 99, title: 'erfgddfsfds', completed: false } };
const testState = todoReducer(initialState, testAction);

////////////TESTING
console.log("TESTING add task: ", testState);
////////////

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="app-container">
        <h1>Todo List</h1>
      </div>

    </>
  )
}

export default App
