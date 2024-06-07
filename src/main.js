import "../style.css";

const todos = [
    {
        id: 1,
        text: "Buy milk",
        completed: false
    },
    {
        id: 2,
        text: "Buy bread",
        completed: false
    },
];

let nextTodoId = 3;

let filter = "all"; // or "active" or "completed"

function renderToDos() {

}

//renderToDos(); rather than just running the function when script is called, 
//this event triggers once all html elements are loaded and calls the function
document.addEventListener("DOMContentLoaded", renderTodos) 