// write javascript here...
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskText = todoInput.value.trim();

  if (taskText !== " ") {
    addTodoItem(taskText, false);
    todoInput.value = "";
  }
});
function addTodoItem(taskText, isCompleted) {
  const listItem = document.createElement("li");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = isCompleted;

  checkBox.addEventListener("change", () => {
    listItem.classList.toggle("completed", checkBox.checked);
  });

  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  listItem.appendChild(checkBox);
  listItem.appendChild(taskLabel);
}