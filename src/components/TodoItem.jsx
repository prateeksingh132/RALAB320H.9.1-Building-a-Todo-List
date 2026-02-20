// goal: so i wanna create a reusable component for individual todo items
export default function TodoItem({ todo, dispatch }) {

    // logic: i m just gonna build a basic ui right now with basic styling, just to get a visual layout. i will wire up the dispatch actions in the next steps.

    return (
        <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px', background: '#fff' }}>

            <input
                type="checkbox"
                checked={todo.completed}
            />

            {/* logic: if the task is completed, put a strike-through line on the text. flexgrow pushes the buttons to the right. */}
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1 }}>
                {todo.title}
            </span>

            <button>Edit</button>

            {/* also, i have to the disable the delete button if the task is not completed */}
            {/* i have added an onclick event here which dispatches the delete_task action with the specific todo.id as the payload... */}
            <button
                disabled={!todo.completed}
                onClick={() => dispatch({ type: 'DELETE_TASK', payload: todo.id })}
            >
                Delete
            </button>

        </div>
    );
}