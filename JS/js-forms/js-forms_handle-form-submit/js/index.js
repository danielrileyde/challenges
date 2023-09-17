console.clear();

const form = document.querySelector('[data-js="form"]');
const badSum = document.querySelector('[id="badness"]');
const ageSum = document.querySelector('[id="age"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   const formElements = event.target.elements;

  //   console.log(formElements.firstName);
  //   console.log(formElements.firstName.value);

  const badnessCalculation = Number(badSum.value) + Number(ageSum.value);

  console.log("Badness Score " + badnessCalculation);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
});
