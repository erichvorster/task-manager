import * as bootstrap from "bootstrap";

const inputText = document.querySelector(".input-text");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const radioOption = document.querySelectorAll(".form-check-input");
const radioContainer = document.querySelector(".radio-container");
const date = document.querySelector(".date");

function newTodo() {
  todoBtn.addEventListener("click", (e) => {
    e.preventDefault;

    //Creat new todo container
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoList.prepend(todoItem);

    //Add li to tod container
    const todo = document.createElement("li");
    todo.classList.add("todo");

    todo.innerHTML = `<textarea id="text-area">${inputText.value}</textarea>`;

    todoItem.prepend(todo);

    inputText.value = "";

    //Due date
    if (date.value) {
      const dueDate = document.createElement("div");
      dueDate.innerHTML = `Due date: ${date.value}`;
      todoItem.append(dueDate);
    }

    date.value = "";

    //Add edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = `<i class="bi bi-pencil-square"></i>`;
    editButton.classList.add("edit-button");
    todoItem.append(editButton);

    //Add complete button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="bi bi-check-circle"></i>';
    completeButton.classList.add("complete-button");
    todoItem.append(completeButton);

    //Add level of importance

    radioOption.forEach((opt) => {
      if (opt.checked && opt.value === "high") {
        todoList.firstChild.style.borderColor = "red";
      } else if (opt.checked && opt.value === "medium") {
        todoList.firstChild.style.borderColor = "yellow";
      } else if (opt.checked && opt.value === "low") {
        todoList.firstChild.style.borderColor = "green";
      }
    });
  });
}

newTodo();

//Implementing delete and complete buttons

todoList.addEventListener("click", (e) => {
  const selected = e.target;

  if (selected.classList[0] == "complete-button") {
    const todo = selected.parentElement;
    selected.addEventListener("click", () => {
      todo.remove();
    });
  }
});

//Implementing edit

todoList.addEventListener("click", (e) => {
  const selected = e.target;
});
