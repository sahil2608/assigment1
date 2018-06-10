// Adding a new value in array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var newfruit = fruits.push("pineapple") // how can we do this without using a varible ?
console.log(fruits)

newfruit = fruits.unshift("nuts")
console.log(fruits)
    // Removing a Element
newfruit = fruits.pop() // from End
console.log(fruits)
newfruit = fruits.shift() // from Starting
console.log(fruits)
var pos = fruits.indexOf('Banana');
newfruit = fruits.splice(pos, 1) // from specfic position
console.log(fruits)

//Check if any given variable is an array or not
if (fruits.isArray) {
    console.log("Fruits is an array")
}
//Change any specific element to another value
fruits[2] = 'Pineapple'
console.log(fruits)

//Add new element to a specific location (not front or last).
fruits.splice(1, 0, 'pear')
console.log(fruits)
    //Convert the given array to a string.
var string = fruits.toLocaleString();
console.log(string)