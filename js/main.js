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

const updateEl = {
  formUpdate: document.querySelector(".form-update"),
  inputUpdate: document.querySelector(".user-input"),
  modal: document.querySelector(".modal"),
  dateUpdate: document.querySelector(".date-update"),
  timeUpdate: document.querySelector(".time-update"),
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

function updateTask() {
  const dataUpdate = {
    id: createId(),
    inputUpdate: updateEl.inputUpdate.value,
    dateUpdate: updateEl.dateUpdate.value,
    timeUpdate: updateEl.timeUpdate.value,
  };

  return dataUpdate;
}

function renderList() {
  // This resets the list innerHTML to the new list
  el.list.innerHTML = taskList.map(function (data, i) {
    return `<div class="task">
            <div class="task-content">
                <div class="task" data-id="${data.id}">
                <input class="new-task-created" value="${
                  data.taskNew
                }" readonly style="${data.textDecoration ? "text-decoration: line-through" : ""}"></input>
                <input class="due-date" type="date" value="${
                  data.taskDate
                }" readonly></input>
                <input class="due-time" type="time" value="${
                  data.taskTime
                }" readonly></input>
            </div>
    
            <div class="action-buttons">
                <button onclick="editItem(event, ${i})" class="edit" data-id="${data.id}">Edit</button>
                <button onclick="deleteItem(event, ${i})" class="delete" data-id="${data.id}">Delete</button>
                <button onclick="completeItem(event, ${i})" class="complete" data-id="${data.id}">Complete</button>
        </div>`;
  });

  el.input.value = "";
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
function deleteItem(event, i) {
  taskList.splice(i, 1);

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
function editItem(event, i) {
  const editEl = event.target.closest(".task");
  let taskUpdate = editEl.querySelector(".new-task-created");
  let dateUpdate = editEl.querySelector(".due-date");
  let timeUpdate = editEl.querySelector(".due-time");
  let editbtn = editEl.querySelector(".edit");

  if (editbtn.innerHTML.toLowerCase() == "edit") {
    taskUpdate.removeAttribute("readonly");
    dateUpdate.removeAttribute("readonly");
    timeUpdate.removeAttribute("readonly");
    taskUpdate.focus();

    editbtn.innerHTML = "Save";
  } else {
    taskUpdate.setAttribute("readonly", "readonly");
    dateUpdate.setAttribute("readonly", "readonly");
    timeUpdate.setAttribute("readonly", "readonly");
    editbtn.innerHTML = "Edit";
    taskList[i] = {
      id: taskList[i].id,
      taskNew: taskUpdate.value,
      taskDate: dateUpdate.value,
      taskTime: timeUpdate.value,
    };
    // store the list on localstorage because data changed
    storeList();
    // render list again because you've added a new entry
    renderList();
  }
}

//function that that completes task.
function completeItem(event, i) {
  const element = event.target.closest(".task-content");
  let taskItem = element.querySelector(".new-task-created");
  let dateItem = element.querySelector(".due-date");
  let timeItem = element.querySelector(".due-time");
  // style..
  taskItem.style.textDecoration = "line-through";
  dateItem.style.textDecoration = "line-through";
  timeItem.style.textDecoration = "line-through";

  taskList[i] = {
    ...taskList[i],
    textDecoration: true,
  };
  console.log("taskList", taskList);
  // store the list on localstorage because data changed
  storeList();
  // render list again because you've added a new entry
  renderList();
}
