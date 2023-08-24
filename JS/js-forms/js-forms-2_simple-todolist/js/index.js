console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  createListItem(data);
  console.log(data);

  event.target.reset();
  document.getElementById("headline").focus();
});

function createListItem(data) {
  const listItem = document.createElement("li");
  const headlineItem = document.createElement("h2");
  const paragraphItem = document.createElement("p");

  const headline = data.headline;
  const task = data.task;

  headlineItem.textContent = headline;
  paragraphItem.textContent = task;

  listItem.append(headlineItem);
  listItem.append(paragraphItem);
  todoList.append(listItem);
}
