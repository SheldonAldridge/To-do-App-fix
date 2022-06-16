// variables object
const el = {
  form: document.querySelector(".form"),
  input: document.querySelector(".user-input"),
  list: document.querySelector(".list"),
  date: document.querySelector(".date"),
  time: document.querySelector(".time"),
};
//local storage key

const STORAGE_KEY = "tasks-storage-key";

//Create ID

const createId = () =>
  `${Math.floor(Math.random() * 10000)}${new Date().getTime()}`;

//variable of empty array that gets new task
let taskList = [];

//function that creates new tasks with date and time
const creatTask = (task) => {
  
  

  const data = {
   id: createId(),
  taskNew: el.input.value,
  taskDate:el.date.value,
   taskTime: el.time.value,
}

  if (!data.taskNew) {
    alert("Please add a new Task");
  }
  if (!data.taskDate) {
    alert("Please add a new Task with a due date");
  }
  if (!data.taskTime) {
    alert("Please add a new Task with a due time");
  }

  const tasks = document.createElement("div");

  tasks.innerHTML = `
       <div class="task-content">
        <div class="task" data-id="${data.id}">
        <div class="new-task-created">${data.taskNew}</div>
        <label class="due-date">${data.taskDate}</label>
        <label class="due-time">${data.taskTime}</label>
    </div>

    <div class="atcion-buttons">
        <button onclick="editItem()" class="edit" data-id="${data.id}">Edit</button>
        <button onclick="deleteItem()" class="delete" data-id="${data.id}">Delete</button>
        <button onclick="completeItem()" class="complete" data-id="${data.id}">Complete</button>
    </div>
</div>`;

  taskList.push(data);
  el.list.appendChild(tasks);
  storeList();
};



//event listner that listens for add button.
function addTask() {
  creatTask();
}

//function that stores task list.
function storeList() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(taskList));
}

//function that removes task from array with delete button.

//function that removes stored task when deleted.

//event listener that edits tasks with date and time.

//event listener that completes task.
