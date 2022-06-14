// variables object

const el = {
  form: document.querySelector(".form"),
  input: document.querySelector(".user-input"),
  list: document.querySelector(".list"),
  date: document.querySelector(".date"),
  time: document.querySelector(".time")
};
//local storage key

const storage_key = "tasks-storage-key";

//Create ID

const createId = () =>`${Math.floor(Math.random() * 10000)}${new Date().getTime()}`;
  
//variable of empty array that gets new task
 let taskList = [];
 
//function that creates new tasks with date and time
const creatTask = (task) => {
  const id = createId();
  const taskNew = el.input.value;
  const taskDate = el.date.value;
  const taskTime = el.time.value;

  if (!taskNew) {
    alert("Please add a new Task");
  }
  if (!taskDate) {
    alert("Please add a new Task with a due date");
  }
  if (!taskTime) {
    alert("Please add a new Task with a due time");
  }

      const tasks = document.createElement("div");

      tasks.innerHTML = `
      
      <div class="task-content">
        <div class="list-of-task">
        <div class="task" data-id="${id}">
        <div class="new-task-created">${taskNew}</div>
        <label class="due-date">${taskDate}</label>
        <label class="due-time">${taskTime}</label>
    </div>
    <div class="atcion-buttons">
        <button onclick="editItem()" class="edit" data-id="${id}">Edit</button>
        <button onclick="deleteItem()" class="delete" data-id="${id}">Delete</button>
        <button onclick="completeItem()" class="complete" data-id="${id}">Complete</button>
    </div>
</div>`;


taskList.push(tasks);
el.list.appendChild(tasks);
completeItem();
};

//event listner that listens for add button.
function addTask() {
  
  creatTask();
}

//function that stores task list.
function storeList() {
  listData = JSON.stringify(taskList);
  console.log(listData);
  localStorage.setItem("storage_key", taskList);

  let list = localStorage.getItem("storage_key");
  let myJSON = JSON.parse(list);
}

//function that removes task from array with delete button.
function deleteItem(){
  taskList.forEach((tasks) => {
    
  });
}

//function that removes stored task when deleted.

//event listener that edits tasks with date and time.

//event listener that completes task.
function completeItem(){

  let taskIdex = document.querySelector(".new-task-created");

  taskList.forEach((item) => {
    if (taskIdex) {
      item.style.textDecoration = "line-through";
    } else {
      item.style.textDecoration = "none";
    }
  });
}


