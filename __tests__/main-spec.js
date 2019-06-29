const getMultiplyTable = require('../main.js');

it ('should return null when start number bigger than end number', () => {
    expect(getMultiplyTable(4, 3)).toBe(null);
});

it ('should return null when start number and end number not bigger than 0', () => {
    expect(getMultiplyTable(-1, 3)).toBe(null);
});

it ('should return null when start number and end number bigger than 1000', () => {
    expect(getMultiplyTable(1, 1001)).toBe(null);
});

it ('should return one line multiply table when start number and end number equal', () => {
    expect(getMultiplyTable(2, 2)).toBe("2*2=4");
});

it ('should return multi-lines multiply table when start number bigger than end number', () => {
    expect(getMultiplyTable(2, 3)).toBe("2*2=4\n2*3=6 3*3=9");
});