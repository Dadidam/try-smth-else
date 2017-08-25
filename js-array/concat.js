var items = [1, 2];

var newItems = items.concat([3, 4], [5, 6], 7);

console.log(newItems);

var people = [
    {
        name: "Shepard"
    },
    {
        name: "Rafshan"
    }
];

var people2 = [
    {
        name: "Katie"
    },
    {
        name: "Russel"
    }
];

people
    .concat(people2).
    forEach(function(person) {
        console.log(person.name);
});