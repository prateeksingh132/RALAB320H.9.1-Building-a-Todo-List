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

        default:
            return state;
    }
}