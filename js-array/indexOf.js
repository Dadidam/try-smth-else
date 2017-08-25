var family = ['Sofia', 'Olga', 'Ilia'];
var philippExists = family.indexOf('Philipp') > -1;

if (!philippExists) {
    family.push('Philipp');
}

console.log(family);
console.log(family.indexOf('Olga', 1));
console.log(family.indexOf('Olga', 2));

////////////
var sofia = {
    name: "Sofia"
};

var olga = {
    name: "Olga"
};

var ilia = {
    name: "Ilia"
};

var objFamily = [sofia, olga];

console.log(objFamily.indexOf(ilia));

////////////
var whiteList = ['.css', '.js'];

var events = [
    {
        file: 'css/core.css'
    },
    {
        file: 'js/app.js'
    },
    {
        file: 'index.html'
    }
];

var filtered = events.filter(event => {
    var ext = require('path').extname(event.file);
    return whiteList.indexOf(ext) > -1;
})

console.log(filtered);
