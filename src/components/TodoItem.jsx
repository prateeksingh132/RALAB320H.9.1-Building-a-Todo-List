import { useState } from 'react';


// goal: so i wanna create a reusable component for individual todo items
export default function TodoItem({ todo, dispatch }) {

    // goal: i am adding local state to handle swapping between read only mode and edit mode.

    /////logic for edit functionality
    // i need a way to change the text into an editable input box. in superhero exercise we did in class (charcard.jsx), we did something similar, 
    // that the easiest way to swap a display for an edit form is just using a local boolean toggle with usestate. 
    // the idea is that this edit mode doesnt need to be in the global reducer because its just a temporary ui state for this specific component. 
    // so i added isEditing to track true/false and editTitle to track what i actually type into the box. 
    // then i just wrap the inside of my div in a big ternary operator: if isEditing is true render the input box. if false render what we already have

    // using local state just for the ui toggle, exactly like the superhero excercise
    const [isEditing, setIsEditing] = useState(false);

    // keeping track of what the user is typing in the edit box. it will default to the current title.
    const [editTitle, setEditTitle] = useState(todo.title);


    /////// logic for save functionality
    //// similar to superhero excercise
    // goal: i wanna handle the save button click to update the state and close the edit box
    const handleSave = () => {
        // logic: dispatch the edit_task action. 
        // IMPORTANT: in the reducer payload needs to have both the id and the title
        dispatch({
            type: 'EDIT_TASK',
            payload: { id: todo.id, newTitle: editTitle }
        });

        // after sending the update to the global state, changing the local state back to false to hide the input box
        setIsEditing(false);
    };


    return (
        // logic: i m just gonna build a basic ui right now with basic styling, just to get a visual layout. i will wire up the dispatch actions in the next steps.
        <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px', background: '#fff' }}>

            {isEditing ? (
                // logic: if isEditing is true, show the input field and save/cancel buttons
                <>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        style={{ flexGrow: 1, padding: '5px' }}
                    />
                    {/* save button just console logs for right now, will add logic later */}
                    {/* FUTUREWORK: */}
                    <button onClick={handleSave}>Save</button>

                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                // logic: if isEditing is false, show the normal read only ui we built earlier
                <>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id })}
                    />

                    {/* logic: if the task is completed, put a strike-through line on the text. flexgrow pushes the buttons to the right. */}
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1 }}>
                        {todo.title}
                    </span>

                    {/* idea is that clicking this should flip the boolean to true, which will trigger the ternary operator to swap the ui */}
                    <button onClick={() => setIsEditing(true)}>Edit</button>

                    {/* also, i have to the disable the delete button if the task is not completed */}
                    {/* i have added an onclick event here which dispatches the delete_task action with the specific todo.id as the payload... */}
                    <button
                        disabled={!todo.completed}
                        onClick={() => dispatch({ type: 'DELETE_TASK', payload: todo.id })}
                    >
                        Delete
                    </button>
                </>
            )}

        </div>
    );
}