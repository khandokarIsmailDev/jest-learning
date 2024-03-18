const {add} = require('./add')

const myFunction = (a, b) => {
    const sum = add(a, b);
    return sum >= 10 ? 'big' : 'small';
};

module.exports = {
    myFunction
};
