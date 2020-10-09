const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

const toDosArray = [];

function paintTodo(text) {
  const toDoLi = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.value = "X";
  const span = document.createElement("span");
  const newId = toDosArray.length + 1;

  span.innerText = text;
  toDoLi.appendChild(span);
  toDoLi.appendChild(delBtn);
  toDoLi.id = newId;
  toDoList.appendChild(toDoLi);
  const toDosObj = {
    text: text,
    id: newId,
  };
  toDosArray.push(toDosObj);
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDosArray));
}

function handleSubmitToDo(event) {
  event.preventDefault();
  event.stopPropagation();
  currentValue = toDoInput.value;
  paintTodo(currentValue);
  toDoInput.value = "";
}

function loadToDo() {
  const loadedToDos = localStorage.getItem(TODO_LS);
  if (loadedToDos !== null) {
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmitToDo);
}

init();
