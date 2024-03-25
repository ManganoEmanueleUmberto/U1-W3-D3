const input = document.getElementById("addTaskBtn");
input.onclick = (event) => {
  const taskToAdd = document.getElementById("newTask");
  console.dir(taskToAdd);
  const p = document.createElement("p");
  p.innerText = taskToAdd.value;
  const main = document.getElementById("conteiner");
  main.appendChild(p);
};

const input2 = document.getElementById("removeTaskBtn");
input2.onclick = (event) => {
  const toRemove = document.querySelector("p");
  toRemove.remove();
};
//ciao