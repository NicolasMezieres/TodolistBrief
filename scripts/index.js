const inputAddTodo = document.querySelector("#searchBar");
const todoList = document.querySelector("ul");
console.log(inputAddTodo);
let todoItems = 0;
function addTodo() {
  const value = inputAddTodo.value;
  todoItems++;
  todoList.innerHTML += `
            <li class="todo${todoItems}">
                <section id="iconContainer">
                    <i class="fa-solid fa-pencil" onclick="changeTodo(${todoItems})"></i>
                    <i class="fa-solid fa-square-check" onclick="checkTodo(${todoItems})"></i>
                </section>
                <input type="text" disabled class="todoText${todoItems}" value="${
    value ? value : "nothing"
  }"/>
                <i class="fa-solid fa-square-xmark" onclick="removeTodo(${todoItems})"></i>
            <li>
             <hr class="hr${todoItems}"/>`;
}

function removeTodo(nbr) {
  document.querySelector(`.todo${nbr}`).remove();
  document.querySelector(`.hr${nbr}`).remove();
}
function checkTodo(nbr) {
  document.querySelector(`.todoText${nbr}`).classList.toggle("check");
}
function changeTodo(nbr) {
  document.querySelector(`.todoText${nbr}`).toggleAttribute("disabled");
}
class todo {
  constructor(text) {
    this.text = text;
  }
}
let newTodo = new todo("je sais pas quoi mettre mais je test");
console.log(newTodo.text);
