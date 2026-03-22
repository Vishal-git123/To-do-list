const inputbox = document.getElementById("taskInput");
const addbtn = document.getElementById("addBtn");
const tasklist = document.getElementById("taskList");


function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push(li.firstChild.textContent); 
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      li.remove();
      saveTasks();
    });

    li.appendChild(removeBtn);
    tasklist.appendChild(li);
  });
}


addbtn.addEventListener("click", () => {
  if (inputbox.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = inputbox.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(removeBtn);
  tasklist.appendChild(li);

  inputbox.value = "";
  saveTasks();
});

loadTasks();
