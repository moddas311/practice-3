// Problem: 2
const mark = 77;
if (mark >= 80) {
    console.log("A+");
}
else if (mark >= 70 && mark < 80) {
    console.log("A");
}
else if (mark >= 60 && mark < 70) {
    console.log("A-");
}
else if (mark >= 50 && mark < 60) {
    console.log("B");
}
else if (mark >= 40 && mark < 50) {
    console.log("C");
}
else if (mark >= 33 && mark < 40) {
    console.log("D");
}
else {
    console.log("F+");
}

// Problem: 2
const number = 98;
if (number % 2 == 0) {
    console.log("Even Number.");
}
else {
    console.log("Odd Number");
}


// Problem: 3
const numbers = [8, 1, 15, 9, 7, 2, 3, 6, 19, 20, 17, 13, 5, 10, 16, 4, 12, 11, 18, 14]
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);



// Problem: 4
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    else {
        return false;
    }
}

let year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

// Problem: 5
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}


// Problem: 6
const findName = (nameAry) => {
    let biggestName = nameAry[0];
    for (let i = 0; i < nameAry.length; i++) {
        let element = nameAry[i];
        if (element.length > biggestName.length) {
            biggestName = element;
        }
    }
    return biggestName;
}

const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const result = findName(friends);
console.log(result);


// Problem 7: 
const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let uniqueNum = [...new Set(numbers)];
console.log(uniqueNum);


const findMax = (number) => {
    let maxNum = 0;
    for (num of number) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}
let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const maxNum = findMax(numbers);
console.log(maxNum);

// problem 8:
const moneySavings = (arr, livingCost) => {
    if (Array.isArray(arr) == false || isNaN(livingCost)) {
        console.log("Invalid input");
    }
    else {
        let totalIncome = 0;
        for (const element of arr) {
            if (!isNaN(element)) {
                if (element >= 3000) {
                    let tax = element * 0.20;
                    totalIncome += element - tax;
                }
                else {
                    totalIncome += element;
                }
            }
        }

        let totalSavings = totalIncome - livingCost;
        if (totalSavings >= 0) {
            return totalSavings;
        }
        else {
            return "Earn more!";
        }

    }

}
const result = moneySavings(100, [10000]);
console.log(result);