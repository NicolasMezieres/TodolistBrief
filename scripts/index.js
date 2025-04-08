const inputAddTodo = document.querySelector("");
const btnAddTodo = document.querySelector("");

const todoList = document.querySelector("ul");
let todoItems = 0;
function addTodo() {
  // const value = inputAddTodo.value;
  // ${value ? value : "nothing"};
  todoItems++;
  todoList.innerHTML += `
            <li class="todo${todoItems}">
                <i class="fa-solid fa-pencil changeTodo${todoItems}"></i>
                <i class="fa-solid fa-square-check checkTodo${todoItems}"></i>
                <p>Bidule</p>
                <i class="fa-solid fa-square-xmark removeTodo${todoItems}"></i>
            <li>`;
}

class todo {
  constructor(text) {
    this.text = text;
  }
}
let newTodo = new todo("je sais pas quoi mettre mais je test");
console.log(newTodo.text);
