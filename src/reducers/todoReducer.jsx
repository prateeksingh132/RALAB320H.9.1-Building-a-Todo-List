// goal: set up the initial state and the basic skeleton of the reducer function. 
// i am gonna keep the initialState here instead of App.jsx 

export const initialState = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    }
];

export default function todoReducer(state, action) {
    // logic: i am using a switch statement same as we did in the lecture excercise
    switch (action.type) {
        case 'ADD_TASK':
            // goal: add a new task to the top of the list.
            // logic: using the spread operator (...state) to make a new copy of the array so i dont change state directly.
            // checking this sample example on stackoverflow as well as i go with my logic: https://stackoverflow.com/questions/64093871/todo-list-with-usereducer-and-mongodb-error-todo-map-is-not-a-function
            // i put action.payload first so the newest task appears at the top, just like the assignment asked
            return [action.payload, ...state];

        case 'DELETE_TASK':
            // goal: i have to remove a task from the state based on its id.
            // logic: i am gonna use the .filter() method here 
            return state.filter(todo => todo.id !== action.payload);

        case 'TOGGLE_COMPLETE':
            // goal: here, i have to flip the completed boolean for a specific task.
            // logic: i am gonna map through the state array. if the id matches the payload, i will return a new object with the completed status changes. otherwise, just return the regular todo object.
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });


        case 'EDIT_TASK':
            // goal: here i have to update the text of a specific task
            // logic: i am gonna map through the array. if the id matches, return a new object with the updated title.
            // previous bug: i was just returning the whole state without modifying the specific object at first. 
            // REMEMBER: here i have to spread the todo and then overwrite the title
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, title: action.payload.newTitle };
                }
                return todo;
            });

        case 'LOAD_API_DATA':
            // goal: i wanna take the data from the api and put it in our state.
            // logic: i m just replacing the current state entirely with the api data (action.payload).
            // FUTUREWORK: add logic to merge them instead of replacing
            return action.payload;



        default:
            return state;
    }
}