// Array to hold tasks temporarily (for demo purposes)
let tasks = [];

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("taskName").value;
  const desc = document.getElementById("taskDesc").value;

  const task = {
    id: Date.now(),
    name: name,
    description: desc,
    status: "Pending"
  };

  tasks.push(task);
  displayTasks();
  taskForm.reset();
});

function displayTasks(){
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${task.name}</strong> - ${task.description}
      <button onclick="toggleStatus(${task.id})">${task.status}</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    if(task.status === "Done") li.classList.add("done");
    taskList.appendChild(li);
  });
}

function toggleStatus(id){
  const task = tasks.find(t => t.id === id);
  task.status = task.status === "Pending" ? "Done" : "Pending";
  displayTasks();
}

function deleteTask(id){
  tasks = tasks.filter(t => t.id !== id);
  displayTasks();
}