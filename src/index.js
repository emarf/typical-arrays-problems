
exports.min = function min(array) {
    return (Array.isArray(array) && array.length > 1) ? Math.min(...array) : 0;
}

exports.max = function max(array) {
    return (Array.isArray(array) && array.length > 1) ? Math.max(...array) : 0;
}

exports.avg = function avg(array) {
    return (Array.isArray(array) && array.length > 1) ? array.reduce((sum, current) => sum + current, 0) / array.length : 0;
}
