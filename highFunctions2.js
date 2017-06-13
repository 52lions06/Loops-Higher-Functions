// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']

const newArray = [];
// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
	const i = 0
	while (i < arr.length){
		if (arr[i] === true) {
			NewArray.push(arr[i]);
		}
	}
return newArray();
}

filter(myNames, function(name){return name[0] === 'R'}); 

