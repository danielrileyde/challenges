console.clear();

logSeparator("Exercise " + 1 + ":");

logText();
function logText() {
  console.log("This text does not appear. Why?");
}

logSeparator("Exercise " + 2 + ":");

function greet(name) {
  console.log("Welcome " + name + " good to see you again!");
}
greet("Bob");
greet("Alice");
greet("Mary");

logSeparator("Exercise " + 3 + ":");

function logSeparator(exerciseNum) {
  console.log("-------------");
  console.log(exerciseNum);
}
logSeparator("Exercise " + 4 + ":");
