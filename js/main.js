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
let taskList = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");

function makeNewTask() {
  const data = {
    id: createId(),
    taskNew: el.input.value,
    taskDate: el.date.value,
    taskTime: el.time.value,
  };

  return data;
}

//function that creates new tasks with date and time
function display() {
  const tasks = document.createElement("div");

  data = makeNewTask();

  tasks.innerHTML = `
         <div class="task-content">
          <div class="task" data-id="${data.id}">
          <div class="new-task-created">${data.taskNew}</div>
          <label class="due-date">${data.taskDate}</label>
          <label class="due-time">${data.taskTime}</label>
      </div>
  
      <div class="action-buttons">
          <button onclick="editItem(event)" class="edit" data-id="${data.id}">Edit</button>
          <button onclick="deleteItem(event)" class="delete" data-id="${data.id}">Delete</button>
          <button onclick="completeItem(event)" class="complete" data-id="${data.id}">Complete</button>
      </div>
  </div>`;

  taskList.push(tasks);
  el.list.appendChild(tasks);
}

//event listner that listens for add button.
function addTask() {
  display();
}

//function that stores task list.
function storeList() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(taskList));
}

//function that removes task from array with delete button.

function deleteItem(event) {
  let removeitem = event.target.closest(".task-content");
  removeitem.parentNode.removeChild(removeitem);
  localStorage.removeItem(STORAGE_KEY);
}

//function that removes stored task when deleted.

//function that that edits tasks with date and time.
function editItem() {
  let edit = document.querySelector(".modal");
  edit.style.display ="block";
}

//Function replace updated item
function updateTask(event){

let close = document.querySelector(".close");
console.log(close);
let edit = document.querySelector(".modal");

if(close){
   edit.style.display = "none";
}


}

//function that that completes task.
function completeItem(event) {
  const element = event.target.closest(".task-content");
  let taskItem = element.querySelector(".new-task-created");
  let dateItem = element.querySelector(".due-date");
  let timeItem = element.querySelector(".due-time");
  // style..
  taskItem.style.textDecoration = "line-through";
  dateItem.style.textDecoration = "line-through";
  timeItem.style.textDecoration = "line-through";
}
