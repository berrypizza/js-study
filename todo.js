const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

function paintTodo(text) {
  const toDoLi = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.value = "X";
  const span = document.createElement("span");
  span.innerText = text;
  toDoLi.appendChild(span);
  toDoLi.appendChild(delBtn);
  toDoList.appendChild(toDoLi);
}

function handleSubmitToDo(event) {
  event.preventDefault();
  event.stopPropagation();
  currentValue = toDoInput.value;
  paintTodo(currentValue);
  toDoInput.value = "";
}

function loadToDo() {
  const toDos = localStorage.getItem(TODO_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmitToDo);
}

init();
