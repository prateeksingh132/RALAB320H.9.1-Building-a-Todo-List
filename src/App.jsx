import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import todoReducer, { initialState } from './reducers/todoReducer';
import { useReducer } from 'react';
import TodoItem from './components/TodoItem.jsx';
import TodoForm from './components/TodoForm.jsx';
import axios from 'axios';


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
  const handleFetch = async () => {

    ////////////TESTING
    //console.log("TESTING: fetch button clicked!!!!!!");
    ////////////

    try {
      // fetching api data using axios, i am gonna use the limit = 10 for now, there are 200 api data object
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");

      ////////////TESTING
      //console.log("TESTING api data: ", res.data);
      ////////////

      // dispatching the data to our reducer
      dispatch({ type: 'LOAD_API_DATA', payload: res.data });

    } catch (err) {
      console.error(err.message);
      alert("failed to fetch api data!!!");
    }

  };


  return (
    <div className="app-container">
      <h1>Todo List</h1>

      {/* adding the new component todoform here at the start for adding task functionality  */}
      <TodoForm dispatch={dispatch} />

      {/* i am adding a button below the form which will fetch data from the external api */}
      <button className="fetch-btn"
        onClick={handleFetch}
        // FUTUREWORK: add styling later in the app.css -- DONE
      
      >
        Load API Data
      </button>


      {/* i am gonna add the scrollbar styling for the list here, if the list grows too long, or more initial data are loaded through api */}
      <div style={{ width: '100%', maxHeight: '60vh', overflowY: 'auto', paddingRight: '10px' }}>
        {/* i have created a new todoitems componenet, replacing the divs with my todoitem componenent now */}
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default App
