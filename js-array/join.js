/// 1
var names = ['Tim', 'Jr.', 'Burton'];

console.log(names.join(' '));

/// 2
var name = 'tim burton';

var upper = name.split(' ') // ['tim', 'burton']
    .map(n => n.charAt(0).toUpperCase() + n.slice(1)) // ['Tim', 'Burton']
    .join(' '); // 'Tim Burton' (string)

console.log(upper);

/// 3
var help = [
    'Usage',
    '   foo-app <input>'
];

// node join.js help
if (process.argv[2] === 'help') {
    console.log(help.join('\n'));
    
}