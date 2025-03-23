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
