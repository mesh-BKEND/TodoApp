import "./styles.css";

const todoForm = document.querySelector("form");
const projectBtn = document.querySelector("#projectBtn");
const STORAGE_KEY = "todoItems";

//check of todoForm exists and then sets it to display = none
if (todoForm) {
  todoForm.style.display = "none";
}

//function to display the form when clicked
function displayForm() {
  if (!todoForm) return;

  todoForm.style.display = todoForm.style.display === "none" ? "block" : "none";
}

//checks for the projectBtn if it does exist
if (projectBtn) {
  projectBtn.addEventListener("click", displayForm);
}

function item(title, description, date, priority) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
}

//convert the string values stored in local storage and convert them into javascript values
const myList = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

//function to save the list items into the local storage
function saveList() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(myList));
}

//function to create a new list item and saving it in the local storage
todoForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const newItem = new item(
    formData.get("title"),
    formData.get("description"),
    formData.get("dueDate"),
    formData.get("priority"),
  );

  myList.push(newItem);
  saveList();

  console.log(myList);

  e.target.reset();
});

const projects = document.querySelector(".projects")
const displayButton = document.querySelector("#displayBtn");
//getting the values and displaying them
function displayItems() {
  myList.forEach((item) => {

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const titleElement = document.createElement("h3");
    titleElement.textContent = `Title: ${item.title}`;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `Descriptions: ${item.description}`;

    const dateElement = document.createElement("p");
    dateElement.textContent = `Due Date: ${item.date}`;

    const priorityElement = document.createElement("p");
    priorityElement.textContent = `Priority: ${item.priority}`;

    const deleteitemButton = document.createElement("button");
    deleteitemButton.textContent = "Delete";

    deleteitemButton.addEventListener("click", () => {
      const index = myList.indexOf(item);

      //condition checking for the deletion

      if (index > -1) {
        myList.splice(index, 1);
        saveList();
        itemContainer.remove();
      }

      
    });
    if (item.priority === "High") {
      priorityElement.style.color = "red";
    } else if (item.priority === "Medium") {
      priorityElement.style.color = "orange";
    } else {
      priorityElement.style.color = "green";
    }

    itemContainer.appendChild(titleElement);
    itemContainer.appendChild(descriptionElement);
    itemContainer.appendChild(dateElement);
    itemContainer.appendChild(priorityElement);
    itemContainer.appendChild(deleteitemButton);

    projects.appendChild(itemContainer);
  });
}

displayButton?.addEventListener("click", displayItems);