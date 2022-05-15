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
    todo.innerHTML = `<textarea disabled class="text-area todo-text-area py-4" >${inputText.value}</textarea>`;

    todoItem.prepend(todo);

    inputText.value = "";

    //Due date
    if (date.value) {
      const dueDate = document.createElement("div");
      dueDate.innerHTML = `<i class="bi bi-calendar-week-fill icon-calender"></i>`;
      dueDate.classList.add("due-date-container");
      dueDate.innerHTML = `<textArea disabled type="number" class="text-area due-date-text-area">  ${date.value} </textArea>`;
      todoItem.append(dueDate);
    }

    //Add edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = `<i class="bi bi-pencil-square"></i>`;
    editButton.classList.add("edit-button");
    todoItem.append(editButton);
    //Clear date selector after todo submittion
    date.value = "";

    //Implementing edit for the edit button
    const dueDateTextArea = document.querySelector(".due-date-text-area");

    editButton.addEventListener("click", () => {
      dueDateTextArea.toggleAttribute("disabled");
    });

    const todoTextArea = document.querySelector(".todo-text-area");

    editButton.addEventListener("click", () => {
      todoTextArea.toggleAttribute("disabled");
    });

    //Add complete button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="bi bi-check-circle"></i>';
    completeButton.classList.add("complete-button");
    todoItem.append(completeButton);

    //Add level of importance

    radioOption.forEach((opt) => {
      if (opt.checked && opt.value === "high") {
        todoList.firstChild.style.backgroundColor = "#f53240";
      } else if (opt.checked && opt.value === "medium") {
        todoList.firstChild.style.backgroundColor = "#F9BE02";
      } else if (opt.checked && opt.value === "low") {
        todoList.firstChild.style.backgroundColor = "#02C8A7";
      }
    });

    //Implementing task counter
    const taskCounter = document.querySelector(".task-counter");
    const tasks = document.querySelectorAll(".todo-item");

    const totalTasks = [];
    function totalTasks1() {
      for (let i = 0; i <= tasks.length - 1; i++) {
        totalTasks.push(tasks[i]);
      }
    }
    totalTasks1();

    taskCounter.innerText = `${totalTasks.length}`;

    //Implementing task counter color changes

    if (totalTasks.length <= 5) {
      taskCounter.style.color = "green";
    } else if (totalTasks.length <= 10) {
      taskCounter.style.color = "orange";
    } else {
      taskCounter.style.color = "red";
    }
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
