import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import todoReducer, { initialState } from './reducers/todoReducer';
import { useReducer } from 'react';
import TodoItem from './components/TodoItem.jsx';
import TodoForm from './components/TodoForm.jsx';


function App() {
  //const [count, setCount] = useState(0)


  // ////////////TESTING
  // const testAction = { type: 'EDIT_TASK', payload: { id: 4, newTitle: "EDITEDDDDDD..." } };
  // const testState = todoReducer(initialState, testAction);

  ////////////TESTING
  //console.log("TESTING add task: ", testState);
  ////////////

  const [todos, dispatch] = useReducer(todoReducer, initialState);


  // handler function where i wil put all my logic for fetching the api data
  const handleFetch = () => {


    ////////////TESTING
    console.log("TESTING: fetch button clicked!!!!!!");
    ////////////

  };


  return (
    <div className="app-container">
      <h1>Todo List</h1>

      {/* adding the new component todoform here at the start for adding task functionality  */}
      <TodoForm dispatch={dispatch} />

      {/* i am adding a button below the form which will fetch data from the external api */}
      <button
        onClick={handleFetch}
        // FUTUREWORK: add it later in the app.css
        style={{ marginBottom: '20px', padding: '10px 15px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Load API Data
      </button>


      <div>
        {/* i have created a new todoitems componenet, replacing the divs with my todoitem componenent now */}
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default App
