var data = [1, 2, 3];
var doubled = data.reduce(function(acc, value) {
    acc.push(value * 2);

    return acc;
}, []);

var doubleMapped = data.map(item => {
    return item * 2;
})

console.log('My doubled data:', doubled);
console.log('My doubleMapped data:', doubleMapped);

//////////
var data2 = [11,12,13,14,15,16];
var evens = data2.reduce(function(acc, value) {
    if (value % 2 === 0) {
        acc.push(value);
    }

    return acc;
}, []);

var eventFiltered = data2.filter(item => {
    return item % 2 === 0;
})

console.log('Evens:', evens);
console.log('Filtered:', eventFiltered);

var filteredMap = data2.filter(item => {
    return item % 2 === 0;
}).map(item => {
    return item * 2;
})

console.log(filteredMap);

/////////
var bigData = [];
for (var i = 0; i < 1000000; i++) {
    bigData[i] = i;
}

console.time('bigData');
var filterMappedBigData = bigData.filter(value => {
    return value % 2 === 0;
}).map(value => {
    return value * 2;
})
console.timeEnd('bigData');

console.time('bigDataReduce');
var reduceBigData = bigData.reduce((acc, value) => {
    if (value % 2 === 0) {
        acc.push(value * 2);
    }

    return acc;
}, []);

console.timeEnd('bigDataReduce');