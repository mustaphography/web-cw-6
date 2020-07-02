function logger() {
  let logger = ["engineer", "doctor", "teacher", "CEO"];
  logger.forEach(function (element) {
    console.log(element);
  });
}
let temperature = [20, 28, 15, 5, 55, 16, 2, 7, 40, 50, 38, 25, 42, 31];

function hotdays() {
  let hottestDays = [];
  for (temp of temperature) {
    if (temp > 18) {
      hottestDays.push(temp);
    }
  }
  console.log(hottestDays);
}
hotdays(temperature);
function bookId() {
  let holder = false;
  let books = [
    { name: "sherlock", id: "12" },
    { name: "The Da Vinci code", id: "13" },
    { name: "The lost symbol", id: "14" },
    { name: "the power of positive thinking", id: "15" },
  ];

  let user = prompt("enter book name or ID number");

  for (let i = 0; i < books.length; i++) {
    if (user == books[i].name && holder == false) {
      alert("we have this book!");
      holder = true;
    }
  }
  if (holder == false) {
    alert("Error: unidentified");
  }
}
// let product = prompt("enter product (write 'done' when you're done)");

// let price = prompt("enter price");

// let quantity = prompt("enter quantity");

// let products = [];

// let prices = [];

// let quantities = [];

// while (product != "done") {
//   products.push(product);
//   prices.push(price);
//   quantities.push(quantity);

//   product = prompt("enter product (write 'done' when you're done)");
//   if (product != "done") {
//     price = prompt("enter price");

//     quantity = prompt("enter quantity");
//   }
// }

// let result = 0;

// for (let i = 0; i < prices.length; i++) {
//   result = result + parseFloat(prices[i]) * quantities[i];
// }

// console.log("--------------");

// console.log("reciept");

// console.log("--------------");
// for (let i = 0; i < prices.length; i++) {
//   console.log(quantities[i] + " " + products[i] + " " + prices[i] + " KD");
// }
// console.log("--------------");
// console.log("sum: " + result + " KD");
