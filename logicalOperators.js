// Exercise:
// Write the getName  function
// getName('Adam'); // 'Adam'
// getName(); // 'Jan Kowalski;

function getName(name = "Jan Kowalski") {
    return name; 
}

console.log(getName("Adam"));
console.log(getName());

// Exercise:
// Write the isTeenageAge function.

// isTeenageAge(10); // false
// isTeenageAge(15); // true
// isTeenageAge(20); // false

function isTeenageAge(age) {
    return (age >=11 && age <= 18);
}

console.log(isTeenageAge(10));

// Exercise:
// Write the isNotNull function

// isNotNull(null); // false
// isNotNull(true); // true

function isNotNull(value) {
    return value !== null;
}

console.log(isNotNull(null)); // false

// Exercise:
// Use the round brackets () to change the 
// true || false && false statement to return false.
console.log((true || false) && false); //false

// Exercise: write the canCarGoRight function. 

// const isMainLightGreen = false;
// const isTheConditionalRightTurnLightOn = true;
// const didTheCarStop = true;

// canCarGoRight(
//   isMainLightGreen,
//   isTheConditionalRightTurnLightOn,
//   didTheCarStop
// )

function canCarGoRight(isMainLightGreen, isTheConditionalRightTurnLightOn, didTheCarStop) {
    return isMainLightGreen || (isTheConditionalRightTurnLightOn && didTheCarStop)
}

//HomeWork

// 1. https://www.codewars.com/kata/568dcc3c7f12767a62000038
// Description:
// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation) {
    return employed && !vacation;
}

console.log(setAlarm(true, true)); //false

// a. the better name is setAlarm 
// and arguments could be isEmployed onVacation
// but employed and vacation is intuitive too

// 2. Description:

// https://www.codewars.com/kata/56453a12fcee9a6c4700009c

// Create a function close_compare that accepts 
// 3 parameters: a, b, and an optional margin. 
// The function should return whether a is lower than, 
// close to, or higher than b.
// Please note the following:
// When a is close to b, return 0.
// For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
// Otherwise...
// When a is less than b, return -1.
// When a is greater than b, return 1.
// If margin is not given, treat it as if it were zero.
// Assume: margin >= 0

function close_compare(a, b, margin = 0) {
    if (Math.abs(a-b) <= margin) {
        return 0;
    }
    return a < b ? -1 : 1;
}

console.log(close_compare(3, 5, 2)); // 0

// 3. https://www.codewars.com/kata/584d2c19766c2b2f6a00004f
// You need to implement two functions, xor and or, that replicate the behaviour of their respective operators:

// xor = Takes 2 values and returns true if, and only if, one of them is truthy.
// or = Takes 2 values and returns true if either one of them is truthy.
// When doing so, you cannot use the or operator: ||.

// Input
// Not all input will be booleans - there will be truthy and falsey values [the latter including also empty strings and empty arrays]
// There will always be 2 values provided
// Examples
// xor(true, true) should return false
// xor(false, true) should return true
// or(true, false) should return true
// or(false, false) should return false

function xor(a, b) {
    return (a && !b) + (!a && b) > 0;
}

function or(a, b) {
    return !!(a + b);
}

console.log(xor(true, false));
console.log(or(true, false));

// 4. https://www.codewars.com/kata/54147087d5c2ebe4f1000805

// Create a function called _if which takes 3 arguments: a value bool and 2 functions 
// (which do not take any parameters): func1 and func2
// When bool is truthy, func1 should be called, otherwise call the func2.
// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.

function _if(bool, func1, func2) {
    return bool ? func1() : func2();
}

_if(true, 
    function() { console.log("True"); }, 
    function() { console.log("False"); }
 ); // "True"

// 5. https://www.codewars.com/kata/568d0dd208ee69389d000016
// After a hard quarter in the office you decide to get some rest 
// on a vacation. So you will book a flight for you and your girlfriend 
// and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in 
// your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or 
// more days, you get $50 off your total. Alternatively, if you rent 
// the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    let costPerDay = 40;
    let totalCost = d * costPerDay;

    if (d >= 7) {
        totalCost -= 50;
    } else if (d >= 3) {
        totalCost -= 20;
    }
    return totalCost;
}

console.log(rentalCarCost(1));  // 40

// 6. https://www.codewars.com/kata/574b3b1599d8f897470018f6

// Americans are odd people: in their buildings, the first floor 
// is actually the ground floor and there is no 13th floor 
// (due to superstition).
// Write a function that given a floor in the american system returns 
// the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 
// 13th floor being removed, the numbers move down to take their place.
// In case of above 13, they move down by two because there are two omitted 
// numbers below them.
// Basements (negatives) stay the same as the universal level.

function getRealFloor(n) {
    if (n <= 0) return n;
    if (n <= 12) return n - 1;
    return n - 2;
}

console.log(getRealFloor(1));  // 0

// 7. https://www.codewars.com/kata/57d29ccda56edb4187000052
// In this kata, your task is to implement an extended
// version of the famous rock-paper-scissors game. 
// The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
// Given two values from the above game, return
// the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".
// Input
// Values will be given as one of "rock", "paper", "scissors", 
// "lizard", "spock".

function rockPapSciLizSpock(player1, player2) {
    const rules ={
        "scissors" : ["paper" , "lizard"],
        "paper" : ["rock" , "spock"],
        "rock" : ["lizard" , "scissors"],
        "lizard" : ["paper" , "spock"],
        "spock" : ["scissors" , "rock"]
    };

    if (player1 === player2) {
        return "Draw!";
    }

    if (rules[player1].includes(player2)) {
        return "Player 1 Won!";
    } else {
        return "Player 2 Won!";
    }
}

console.log(rockPapSciLizSpock("rock", "scissors")); // Player 1 Won!

// 8. Write the isValidPassword function. Make sure that the
// password is at least 8 characters long and contains at least
// one number and one uppercase letter

function isValidPassword(password) {
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);

    return hasMinLength && hasNumber && hasUpperCase;
}

isValidPassword('test1'); // false
isValidPassword('Test123'); // false
isValidPassword('StrongPassword123'); // true
isValidPassword('AnotherStrongPassword456'); // true

// 9. Create the getPasswordStrength function that returns a
//  strength rating from 1 (weakest) to 5 (strongest).
//  Meeting each one of the requirements causes the password 
// to gain one point

// - at least 8 characters
// - at least one uppercase character
// - at least one lowercase character
// - at least one special character
// - at least one number

function getPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;

    return strength;
}

console.log(getPasswordStrength("Abc12345")); //4

// 10. Create the getTotalOrderCost function that returns 
// the total cost of the order and accepts the following arguments:

// - the base cost of the items
// - whether or not the customer is a VIP member - they get 
// a 5% discount
// - how many loyalty points the customer wants to use - each one 
// of them reduces the cost by a cent (the final cost should not be
//      lower than $0)
// - is the package going to be shipped internationally - shipping 
// internationally costs $10 (otherwise, it costs $5)

// Make sure to apply the VIP discount before the loyalty points. 
// The VIP discount does not apply to shipping

function getTotalOrderCost(baseCost, isVIP, loyaltyPoints, isInternational) {
    if (isVIP) {
        baseCost *= 0.95;
    }

    let discountedCost = baseCost - (loyaltyPoints * 0.01);

    if (discountedCost < 0) {
        discountedCost = 0;
    }

    const shippingCost = isInternational ? 10 : 5;

    return discountedCost + shippingCost;
}

console.log(getTotalOrderCost(100, true, 200, false)); // 98 (95 - 2 + 5)

// 11. Create the getTicketPrice function that returns the ticket price and accepts the following arguments:

// - the base price of the ticket
// - how many days are there until the show - buying tickets more 
// than a month in advance provides a 10% discount
// - is the show on the weekend - weekend shows are $15 more expensive

// The discount applied if the tickets are bought a month in advance 
// should decrease the $15 charged if the show plays on the weekend.

function getTicketPrice(basePrice, daysUntilShow, isWeekend) {
    if (daysUntilShow > 30) {
        basePrice *= 0.9;
    }

    if (isWeekend) {
        basePrice += 15;
    }

    return basePrice;
}

console.log(getTicketPrice(100, 40, true));  // 105  (100 * 0.9 = 90, 90 + 15 = 105)
