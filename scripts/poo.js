const inputAddTodo = document.querySelector("#searchBar");
const todoList = document.querySelector("ul");
let todoItems = 0;
function createTodo() {
  const value = inputAddTodo.value;
  todoItems++;
  let newTodo = new todo(value, todoItems);
  console.log("ici");
  newTodo.addTodo();
}

class todo {
  constructor(text, index) {
    this.text = text;
    this.index = index;
  }
  addTodo = () => {
    let li = document.createElement("li");
    li.classList.add(`todo${this.index}`);
    let sectionIcon = document.createElement("section");
    sectionIcon.classList.add("iconContainer");
    let pencil = document.createElement("i");
    pencil.classList.add("fa-solid", "fa-pencil");
    pencil.onclick = this.changeTodo;
    let check = document.createElement("i");
    check.classList.add("fa-solid", "fa-square-check");
    check.onclick = this.checkTodo;
    sectionIcon.appendChild(pencil);
    sectionIcon.appendChild(check);
    let input = document.createElement("input");
    input.value = this.text ? this.text : "nothing";
    input.classList.add(`todoText${this.index}`);
    input.disabled = true;
    li.appendChild(sectionIcon);
    li.appendChild(input);
    let trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-square-xmark");
    trash.id = `delete${this.index}`;
    trash.onclick = this.removeTodo;
    li.appendChild(trash);
    todoList.appendChild(li);
    let trait = document.createElement("hr");
    trait.classList.add(`trait${this.index}`);
    todoList.appendChild(trait);
  };
  removeTodo = () => {
    console.log("on est dans le remove");
    document.querySelector(`.todo${this.index}`).remove();
    document.querySelector(`.trait${this.index}`).remove();
  };
  checkTodo = () => {
    document.querySelector(`.todoText${this.index}`).classList.toggle("check");
  };
  changeTodo = () => {
    document.querySelector(`.todoText${this.index}`).toggleAttribute("disabled");
  };
}

// todoList.innerHTML += `
// <li class="todo${todoItems}">
//     <section id="iconContainer">
//         <i class="fa-solid fa-pencil" onclick="changeTodo(${todoItems})"></i>
//         <i class="fa-solid fa-square-check" onclick="checkTodo(${todoItems})"></i>
//     </section>
//     <input type="text" disabled class="todoText${todoItems}" value="${
//   this.text ? this.text : "nothing"
// }"/>
//     <i class="fa-solid fa-square-xmark" id="delete${this.index}"></i>
// </li>
//  <hr class="hr${todoItems}"/>`;
// let buttonDelete = document.querySelector(`#delete${this.index}`);
// buttonDelete.setAttribute(onclick, `${this.removeTodo()}`);
