//local storage key
const STORAGE_KEY = "tasks-storage-key";

// variables object
const el = {
  form: document.querySelector(".form"),
  input: document.querySelector(".user-input"),
  list: document.querySelector(".list"),
  date: document.querySelector(".date"),
  time: document.querySelector(".time"),
};

//Create ID

const createId = () =>
  `${Math.floor(Math.random() * 10000)}${new Date().getTime()}`;

//variable of empty array that gets new task
let taskList = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");

renderList();

function makeNewTask() {
  const data = {
    id: createId(),
    taskNew: el.input.value,
    taskDate: el.date.value,
    taskTime: el.time.value,
  };

  return data;
}

function renderList() {
  // actually reset the list innerHTML to the new list (in order to facilitate removing / adding -- not very efficient)
  el.list.innerHTML = taskList.map(function (data) {
    return `<div class="task">
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
        
  });

  
}

//event listner that listens for add button.
function addTask() {
  taskList.push(makeNewTask());
  // store the list on localstorage because data changed
  storeList();
  // render list again because you've added a new entry
  renderList();
  
}

//function that removes task from array with delete button.
function deleteItem(event) {
  taskList.splice(taskList.indexOf(event.target.dataset.id), 1);
  // store the list on localstorage because data changed
  storeList();
  // render list again because entry was removed
  renderList();
}

//function that stores task list.
function storeList() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(taskList));
}

//function that that edits tasks with date and time.
function editItem() {
  
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
