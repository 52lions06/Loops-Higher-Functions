// function steps (step) {
// 	return step > 0;  

// }
// const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]].filter(steps);

const turtleSteps3 = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]
const totalSteps3 = turtleSteps2.map(function(a,b){
	return a + b;
});

// turtleSteps.forEach();

// ======================================

// function isBigEnough(value) {
//   return value >= 10;
// }

// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // filtered is [12, 130, 44]


// ======================================

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

//Need to check 