var votes = [
    "angular",
    "angular",
    "angular",
    "react",
    "react",
    "ember",
    "angular",
    "react",
    "react",
    "vanilla",
];

var initialValue = {};

var reducer = function(tally, vote) {
    if (!tally[vote]) {
        tally[vote] = 1;
    } else {
        tally[vote] += 1;
    }

    return tally;
};

var total = votes.reduce(reducer, initialValue);

console.log(total);
