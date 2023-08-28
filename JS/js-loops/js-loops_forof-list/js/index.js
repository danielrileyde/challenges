console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (let language of programmingLanguages) {
  let newLi = document.createElement("li");
  newLi.textContent = language;
  ol.append(newLi);
}
// --^-- write/change code here --^--
