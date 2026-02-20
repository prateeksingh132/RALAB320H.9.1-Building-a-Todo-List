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

        default:
            return state;
    }
}