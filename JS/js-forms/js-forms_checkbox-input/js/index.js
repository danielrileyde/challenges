console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

hideTosError();
hideSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const tos = event.target.elements.tos.checked;
  if (tos) {
    alert("Form submitted", showSuccess());
    return;
  }
  showTosError();

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
