import "./styles.css";

const projectBtn = document.querySelector("#projectBtn");
const projectsBody = document.querySelector(".projects");
const projects = [];
let projectNumber = 0;

//button to create a project
projectBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const projectDiv = projectBody();
  // const todoList = projectDiv.children[1];
});

//function for creating a project body
function projectBody() {
  const project = document.createElement("div");
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = `project ${projectNumber++}`;
  const projectList = document.createElement("ul");
  let listed = [];
  projects.push(listed);
  const todoBtn = createButtons();
  project.append(projectTitle, projectList, todoBtn);
  projectsBody.append(project);
  console.log(projects);
  return projectList;
}

//function to create buttons for the project
function createButtons() {
  const todoBtns = document.createElement("div");
  const todoBtn = document.createElement("button");
  todoBtn.className = "add-todo";
  const deleteTodo = document.createElement("button");
  todoBtn.className = "delete-todo";

  todoBtn.textContent = "Add a todo";
  deleteTodo.textContent = "Delete todo";

  todoBtns.append(todoBtn, deleteTodo);

  //buttons functionality
  todoBtn.addEventListener("click", () => {
    const todoItem = createTodoItem();
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

let body = projectBody();
//function to create a todoItem
function createTodoItem(body) {
  const title = window.prompt("Enter your todo Title");
  const description = window.prompt("Describe your todo");
  const dueDate = window.prompt("What is the Due Date");
  const priority = window.prompt("what is your todo priority");

  const item = new todoItem(title, description, dueDate, priority);

  const todo_list = document.createElement("li");
  todo_list.textContent = `${title}, ${description}, ${dueDate}, ${priority}`;
  todos.push(item);
  console.log(todos);
  return todo_list;
}

console.log(body);
