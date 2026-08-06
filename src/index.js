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

  const todoBtn = createButtons(projectList);
  project.append(projectTitle, projectList, todoBtn);
  projectsBody.append(project);

  listed.push(projectList);
  projects.push(listed);

  console.log(listed);
  console.log(projects);

  // getValues(listed);
  // console.log(storeInLocalStorage(listed));
  return projectList;
}

//function to get the values of the listed
// function getValues(listed) {
//   let List = document.querySelector("li");

//   let myList = Array.from(List).map((list) => list.textContent);
//   console.log(myList);
//   listed.forEach((list) => {
//     const items = list.children;
//     for (let i = 0; i < items.length; i++) {
//       console.log(items[i].textContent);
//     }
//   });
// }
//function tot store the projects in local storage
// function storeInLocalStorage(projects) {
//   return projects;
// }
//function to create buttons for the project
function createButtons(taskList) {
  const todoBtns = document.createElement("div");
  const todoBtn = document.createElement("button");
  todoBtn.className = "add-todo";
  const deleteTodo = document.createElement("button");
  todoBtn.className = "delete-todo";

  todoBtn.textContent = "Add a todo";
  deleteTodo.textContent = "Delete todo";

  todoBtns.append(todoBtn, deleteTodo);

  //buttons functionality  console.log(todos);
  todoBtn.addEventListener("click", () => {
    const todoItem = createTodoItem(taskList);
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

//function to create a todoItem
function createTodoItem(bodyList) {
  const title = window.prompt("Enter your todo Title");
  const description = window.prompt("Describe your todo");
  const dueDate = window.prompt("What is the Due Date");
  const priority = window.prompt("what is your todo priority");

  const item = new todoItem(title, description, dueDate, priority);

  const todo_list = document.createElement("li");
  todo_list.textContent = `${title}, ${description}, ${dueDate}, ${priority}`;
  bodyList.append(todo_list);
  console.log(bodyList);
  return item;
}
