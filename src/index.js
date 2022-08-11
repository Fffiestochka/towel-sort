
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length > 0 && matrix.length > 0) {
        return matrix
            .reduce((acc, innerArr, index) => {
                if (index % 2 === 0) {
                    acc.push(innerArr);
                    return acc;
                } else {
                    acc.push(innerArr.reverse());
                    return acc;
                }
            }, [])
            .flat(Infinity);
    } else {
        return [];
    }
}
