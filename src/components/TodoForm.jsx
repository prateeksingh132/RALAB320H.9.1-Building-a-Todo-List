import { useState } from 'react';

// goal: i am gonna create a form to add new tasks
export default function TodoForm() {
    // logic: i will use the local state to track what the user is typing in the box. 
    // this doesnt need to be in the global reducer yet, only when we actually submit it
    const [title, setTitle] = useState('');

     
    const handleSubmit = (e) => {
        // stops the browser from doing a full page reload
        e.preventDefault(); 

        
        ////////////TESTING
        // i just wanna make sure the local state is working before i wire it up to dispatch, so far this function just prevents the default page reload and logs the typed text to the console 
        console.log("TESTING form submission:", title);
        ////////////
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