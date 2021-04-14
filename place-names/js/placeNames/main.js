// This project is rewritten from C# example code
// Define a array with names in it
const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
"London", "The mall", "Ryman Auditorium", "The Great Wall of China"];

// Print some output to the console
console.log("All Place Names");

// Iterate over each name in the list
for (let name of names) {
  console.log(name);
}

// Add a line break to the console log
console.log("");

// Filter the array to a new array with only places starting with "The"
const theNames = names.filter(name => name.startsWith("The"));

console.log("'The' Place Names");
for (let name of theNames) {
  console.log(name);
}
