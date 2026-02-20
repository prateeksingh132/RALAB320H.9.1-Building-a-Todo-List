import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import todoReducer, { initialState } from './reducers/todoReducer';
import { useReducer } from 'react';
import TodoItem from './components/TodoItem.jsx';


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

      <div>
        {/* i have created a new todoitems componenet, replacing the divs with my todoitem componenent now */}
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App
