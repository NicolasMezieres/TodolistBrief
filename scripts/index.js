function createTodo() {
  todoItems++;
  let newTodo = new todo(todoItems);
  newTodo.addTodo();
}
class todo {
  constructor(index) {
    this.todoList = document.querySelector("ul");
    this.todoInput = document.querySelector("#searchBar");
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
    input.value = this.todoInput.value ? this.todoInput.value : "nothing";
    input.classList.add(`todoText${this.index}`);
    input.disabled = true;
    li.appendChild(sectionIcon);
    li.appendChild(input);
    let trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-square-xmark");
    trash.id = `delete${this.index}`;
    trash.onclick = this.removeTodo;
    li.appendChild(trash);
    this.todoList.appendChild(li);
    let trait = document.createElement("hr");
    trait.classList.add(`trait${this.index}`);
    this.todoList.appendChild(trait);
  };
  removeTodo = () => {
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
