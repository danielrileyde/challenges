console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (e) => {
  // Exercise: Append a new entry to the toast messages container
  e.preventDefault();
  const newEntry = document.createElement("li");
  newEntry.classList.add("toast-container__message");
  newEntry.textContent = "I'm Buttered!";

  toastContainer.append(newEntry);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  // const toastContainer = document.querySelector('[data-js="toast-container"]');
  toastContainer.innerHTML = "";
});
