import { useState } from 'react';

// goal: i am gonna create a form to add new tasks
export default function TodoForm({ dispatch }) {
    // logic: i will use the local state to track what the user is typing in the box. 
    // this doesnt need to be in the global reducer yet, only when we actually submit it
    const [title, setTitle] = useState('');


    const handleSubmit = (e) => {
        // stops the browser from doing a full page reload
        e.preventDefault();


        // ////////////TESTING
        // // i just wanna make sure the local state is working before i wire it up to dispatch, so far this function just prevents the default page reload and logs the typed text to the console 
        // console.log("TESTING form submission:", title);
        // ////////////


        // error handling: i have to do a simple check to stop empty inputs from being added.
        // the idea is to stop the function here itself if nothing is typed, if it passes this test, then i am gonna move to build the new task object
        if (title.trim() === '') {
            alert("task cannot be empty!!!!");
            return; 
        }

        // logic: i m gonna create the new task object now that matches the structure of our initial state.
        // problem is how do i design the logic for new task object userid which should be unique bcuz key prop needs that else it will throw warning. 
        // previous bug: if i dont make it unique, it will still runs though and i can see the new task but i dont see the new task object i added in edit mode, it shows the previous object with same id  
        // some examples on stackoverflow used date.now() to tackle unique id issue. the idea is to generate random ids so the application doesnt throw bugs and complain about duplicate keys
        const newTask = {
            userId: 1,
            id: Date.now(),
            title: title,
            completed: false
        };

        // logic: now i m gonna dispatch the add task action to the reducer, sending our new task object as the payload
        dispatch({ type: 'ADD_TASK', payload: newTask });

        // clearing the input box so that we can type another one immediately
        setTitle('');

    };

    return (
        //  adding basic styling here
        // FUTUREWORK: maybe add the full styling in app.css later if i have more time
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
            <input
                type="text"
                placeholder="add a new task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ flexGrow: 1, padding: '8px' }}
            />
            <button type="submit" style={{ padding: '8px 16px' }}>Add Task</button>
        </form>
    );
}