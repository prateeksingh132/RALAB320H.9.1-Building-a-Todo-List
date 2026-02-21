# RALAB 320H.9.1 - Building a Todo List

## Technology Used

* **React** 
* **JavaScript** 
* **useReducer and useState** 
* **Axios**
* **CSS:** i kept the same dark blue and orange theme from my previous gadgetshack sba projects.

## Features and Requirement List

I checked the requirement list one by one and implemented them in my code:

* **State:** used `useReducer` in app.jsx to hold the main todo list and handle all the add, edit delete actions from one place. i also used local `useState` inside the components for simple ui changes like toggling the edit box or tracking what i type in the form etc...
* **Add Task:** user can add a new task, and it automatically goes to the top of the list.
* **Edit Task:** clicking edit replaces the todo text into an input box, then the user can edit the todo.
* **Delete:** the delete button is totally disabled until the user checks the "completed" checkbox.
* **API Fetch:** i added a button that pulls data (limit 10, can be changed in the api url) from the jsonplaceholder api and replaces the current state.


## Testing

I have created (and used during code creation) test points (log statement) at multiple places in the code, I have not removed them. They are commented at the time of submission and can be uncommented for future debugging and code check. These code checks looks something like:


////////////TESTING

//console.log('TESTING: assignment: ', assignment);

////////////


# References

https://stackoverflow.com/questions/64093871/todo-list-with-usereducer-and-mongodb-error-todo-map-is-not-a-function
