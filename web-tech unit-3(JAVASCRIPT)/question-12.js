// Write JavaScript to demonstrate conditional statements and looping (for, while, do-while).

// ===== Conditional Statements =====

// if-else
var num = 10;

if (num > 0) {
    console.log("Number is Positive");
} else if (num < 0) {
    console.log("Number is Negative");
} else {
    console.log("Number is Zero");
}

// switch case
var day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}


// ===== Looping Statements =====

// for loop
console.log("For Loop:");
for (var i = 1; i <= 5; i++) {
    console.log(i);
}

// while loop
console.log("While Loop:");
var j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// do-while loop
console.log("Do-While Loop:");
var k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
