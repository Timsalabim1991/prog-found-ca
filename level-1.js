// question 1
var pet = "dog";

// question 2
var person = {
    name: "Tim",
    age: "29",
};

// question 3
var outOfStock  = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// question 4
var colours = ["red", "pink", "yellow", "black", "blue"];

for (var i = 0; i < colours.length; i++) {
	var col = colours[i];
	console.log(col);
}

// question 5
for (var i = 15; i <= 25; i++) {
	console.log(i);
}

// question 6
for (var i = 15; i < 20; i++) {
	console.log(i);
}

// question 7
var product1 = {
	id: 11,
	name: "TV",
	stock: true,
};

var product2 = {
	id: 12,
	name: "PC",
	stock: true,
};

var products = [product1, product2];

for (var i = 0; i < products.length; i++) {
	var productID = products[i].id;
    console.log(productID);
    
    var productStock = products[i].stock;
	console.log(productStock);
}

// question 8
function whatIDontLike(number1, number2) {
	var sum = number1 + number2;
	console.log(sum);
}

whatIDontLike("I don't like", " fish");

// question 9
function numbers(number1, number2) {
	var sum = number1 - number2;
	console.log(sum);
}

numbers(20, 4);

// question 10
var emptyArray = [];
