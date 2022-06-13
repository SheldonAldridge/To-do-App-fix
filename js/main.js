// variables object

const el = {
  form: document.querySelector(".form"),
  input: document.querySelector(".user-input"),
  date: document.querySelector(".date"),
  time: document.querySelector(".time"),
  
};
//local storage key

const storage_key = "tasks-storage-key";

//Create ID

const createID = () => `${Math.floor(Math.random() * 10000)}-${new Date().getTime()}`

//variable of empty array that gets new task
let taskList =[];

// function that renders task list

//function that creates new tasks with date and time
function addTask() {

  const id = createID();
  const taskNew = el.input.value;
  const taskDate = el.date.value;
  const taskTime = el.time.value;

  if (taskNew != null) {

    const tasks = document.createElement("div");
    tasks.innerHTML = `
        <div class="task-content">
        <div class="list-of-task">
        <div class="id">${id}</div>
        <input type="checkbox" class="tick">
        <div class="new-task-created">${taskNew}</div>
        <label class="due-date">${taskDate}</label>
        <label class="due-time">${taskTime}</label>
    </div>

    <div class="atcion-buttons">
        <button class="edit" data-id="">Edit</button>
        <button class="delete" data-id="">Delete</button>
    </div>
</div>`

  };
  return taskNew
};
//event listner that listens for add button.

//function that stores task list.

//event listener that removes task from array.
//function that removes stored task when deleted.

//event listener that edits tasks with date.

//event listener that completes task.



