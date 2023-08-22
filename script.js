// getElementById returns an Element object representing the element whose id property matches the specified string

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingTasksList = document.getElementById("pendingTasks");
const completedTasksList = document.getElementById("completedTasks");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <input type="checkbox">
    <span class="delete-btn">Delete</span>
  `;
 // querySelector method returns the first element that matches a CSS selector

  const checkbox = li.querySelector("input[type='checkbox']");
  const deleteBtn = li.querySelector(".delete-btn");

  checkbox.addEventListener("change", toggleTask);
  deleteBtn.addEventListener("click", deleteTask);

  pendingTasksList.appendChild(li);
  taskInput.value = "";
}

function toggleTask(event) {
  const taskItem = event.target.parentNode;
  if (event.target.checked) {
    taskItem.classList.add("completed");
    completedTasksList.appendChild(taskItem);
  } else {
    taskItem.classList.remove("completed");
    pendingTasksList.appendChild(taskItem);
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentNode;
  taskItem.remove();
}

// Pre-uploaded tasks

const preUploadedTasks = ["Study Time", "Complete project", "Eating"];

preUploadedTasks.forEach(task => {
  taskInput.value = task;
  addTask();
});


