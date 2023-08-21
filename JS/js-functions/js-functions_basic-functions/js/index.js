console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
let book_title = "The Piano Teacher";
let author = "Elfriede Jelinek";
let rating = 5;
let numOfSales = 10000;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--console.log(book_title, author, rating, numOfSales);
console.log(book_title);
console.log(author);
console.log(rating);
console.log(numOfSales);

// rating = 4.1;
// numOfSales = 20000;
// console.log(book_title);
// console.log(author);
// console.log(rating);
// console.log(numOfSales);
// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData(book_title, author, rating, numOfSales) {
  console.log(book_title);
  console.log(author);
  console.log(rating);
  console.log(numOfSales);
}
logBookData(book_title, author, 3, 50000);
logBookData(book_title, author, 4.9, 60000);
logBookData(book_title, author, 4.5, 70000);
// --^-- write your code here --^--
