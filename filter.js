var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

var isCool = function(person) {
	return person.coolnessScore > 20;
// Your code here!
}
var coolness = people.filter(isCool);
// Write code that uses the filter function, and the below isCool function to return a list of people who are cool.
console.log(coolness);
coolness.forEach(function (person) {
	console.log(person["name"],"is cool")
})
// })
// Example results:
//
// Bob is cool
// Isolde is cool
