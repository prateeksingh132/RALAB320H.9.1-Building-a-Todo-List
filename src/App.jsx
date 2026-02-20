import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import todoReducer, { initialState } from './reducers/todoReducer';
import { useReducer } from 'react';


function App() {
  //const [count, setCount] = useState(0)


  // ////////////TESTING
  // const testAction = { type: 'EDIT_TASK', payload: { id: 4, newTitle: "EDITEDDDDDD..." } };
  // const testState = todoReducer(initialState, testAction);

  ////////////TESTING
  //console.log("TESTING add task: ", testState);
  ////////////

  const [todos, dispatch] = useReducer(todoReducer, initialState);



  return (
    <div className="app-container">
      <h1>Todo List</h1>

      {/* for the time being, i am gonna use the .map() to loop through my state and put the titles to the screen for now. */}
      <div>
        {todos.map(todo => (
          <div key={todo.id} style={{ border: '1px solid white', background: 'yellow' }}>
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
