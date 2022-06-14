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

taskList.push(tasks);
el.list.appendChild(tasks);


};

//event listner that listens for add button.
function addTask() {
  creatTask();
}

//function that stores task list.

//event listener that removes task from array with delete button.


//function that removes stored task when deleted.

//event listener that edits tasks with date and time.

//event listener that completes task.



