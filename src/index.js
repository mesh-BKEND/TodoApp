import "./styles.css";

const projectBtn = document.querySelector("#projectBtn");
const projectsBody = document.querySelector(".projects");
let projectNumber = 0;

projectBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const projectDiv = projectBody();
  const todoList = projectDiv.children[1];
  df;
});

//function for creating a project body
function projectBody() {
  const project = document.createElement("div");
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = `project ${projectNumber++}`;
  const projectList = document.createElement("ul");

  const todoBtn = createButtons();
  project.append(projectTitle, projectList, todoBtn);
  projectsBody.append(project);

  return project;
}
//function to create buttons for the porject
function createButtons() {
  const todoBtns = document.createElement("div");
  const todoBtn = document.createElement("button");
  todoBtn.className = "add-todo";
  const deleteTodo = document.createElement("button");
  todoBtn.className = "delete-todo";

  todoBtn.textContent = "Add a todo";
  deleteTodo.textContent = "Delete todo";

  todoBtns.append(todoBtn, deleteTodo);

  //buttos functionality
  todoBtn.addEventListener("click", () => {
    createTodoItem();
  });

  deleteTodo.addEventListener("click", () => {
    console.log("Deleting a todo .....");
  });
  return todoBtns;
}

//todo object
class todoItem {
  constructor(title, description, dueDate, priority) {
    ((this.title = title), (this.description = description));
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const todos = [];

//function to create a todoItem
function createTodoItem(list) {
  const title = window.prompt("Enter your project Title");
  const description = window.prompt("Describe your project");
  const dueDate = window.prompt("What is the Due Date");
  const priority = window.prompt("what is your todo priority");

  const item = new todoItem(title, description, dueDate, priority);
  todos.push(item);
  console.log(todos);
  return `<li> ${title}, ${description}, ${dueDate}, ${priority} </li>`;
}
