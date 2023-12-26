document.addEventListener("DOMContentLoaded", function () {
  displayTasks();
});

function addTask() {
  let taskInput = document.getElementById("task");
  let task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  let tasks = getTasksFromLocalStorage();

  tasks.push({ text: task, completed: false });

  saveTasksToLocalStorage(tasks);

  taskInput.value = "";

  displayTasks();
}

function editTask(index) {
  let tasks = getTasksFromLocalStorage();
  let updatedTask = prompt("Edit task:", tasks[index].text);

  if (updatedTask !== null) {
    tasks[index].text = updatedTask;

    saveTasksToLocalStorage(tasks);

    displayTasks();
  }
}

function deleteTask(index) {
  let tasks = getTasksFromLocalStorage();
  let confirmDelete = confirm("Are you sure you want to delete this task?");

  if (confirmDelete) {
    tasks.splice(index, 1);

    saveTasksToLocalStorage(tasks);

    displayTasks();
  }
}

function toggleTask(index) {
  let tasks = getTasksFromLocalStorage();

  tasks[index].completed = !tasks[index].completed;

  saveTasksToLocalStorage(tasks);

  displayTasks();
}

function getTasksFromLocalStorage() {
  let tasksJson = localStorage.getItem("tasks");
  return tasksJson ? JSON.parse(tasksJson) : [];
}

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  let tasks = getTasksFromLocalStorage();
  let tasksList = document.getElementById("tasks");

  tasksList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tasks[i].completed;
    checkbox.addEventListener(
      "change",
      (function (index) {
        return function () {
          toggleTask(index);
        };
      })(i)
    );

    let taskText = document.createElement("span");
    taskText.textContent = tasks[i].text;
    taskText.style.textDecoration = tasks[i].completed
      ? "line-through"
      : "none";

    let editButton = document.createElement("button");
    editButton.className = "btn btn-warning btn-sm";
    editButton.textContent = "Edit";
    editButton.onclick = (function (index) {
      return function () {
        editTask(index);
      };
    })(i);

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = (function (index) {
      return function () {
        deleteTask(index);
      };
    })(i);

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    tasksList.appendChild(li);
  }
}

function loadTasks() {
  displayTasks();
}
