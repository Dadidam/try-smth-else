var items = [1, 2, 3, 4, 5];
var copy = items.slice();

copy.push(6);

console.log(items);
console.log(copy);

////
var person = { name: 'John' };
var personItems = [1, person];
var personCopy = personItems.slice();

personCopy[1].name = 'Richard';

console.log(personItems);
console.log(personCopy);

///
var numbers = [1,2,3,4,5];
var numCopy = numbers.slice(0, 2);

console.log(numCopy);

////////////
var hero = { name: 'vadim-galygin' };
var filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
};

var input = 'name | deslugify | uppercase';
var sections = input.split('|').map(x => x.trim());
var ref = hero[sections[0]];

var output = sections
    .slice(1)
    .reduce((prev, next) => {    
        if (filters[next]) {
            return filters[next].call(null, prev);
        }

        return prev;
    }, ref);

console.log(output);
