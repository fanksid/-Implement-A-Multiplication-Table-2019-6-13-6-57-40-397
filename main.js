function getMultiplyTable(left, right) {
    if (isNumberInvalid(left, right)) {
        return null;
    }
    if (left == right) {
        return getMultiplyFormula(left, right);
    }

    return getMultiLinesMultiplyTable(left, right);
}

function getMultiLinesMultiplyTable(left, right) {
    var table = "";
    for (let index = left; index <= right; index++) {
        table = table + getMultiplyLine(left, index);
    }
    return table.slice(0, -1);
}

function getMultiplyLine(start, end) {
    var line = "";
    for (let index = start; index <= end; index++) {
        line = line + getMultiplyFormula(index, end) + " ";
    }

    return line.slice(0, -1) + "\n";
}

function isNumberInvalid(left, right) {
    return left > right || isNumberBeyondLimit(left) || isNumberBeyondLimit(right);
}

function isNumberBeyondLimit(left) {
    return left < 0 || left > 1000;
}

function getMultiplyFormula(left, right) {
    return left + "*" + right + "=" + left * right;
}

module.exports = getMultiplyTable;