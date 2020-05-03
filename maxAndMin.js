function min(array) {
    let currentMin = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < currentMin) {
            currentMin = array[i]
        }
    }
    return currentMin
}


function max(array) {
    let currentMax = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > currentMax) {
            currentMax = array[i]
        }
    }
    return currentMax
}

let testArray = [1, 2, -2, 0, 10, 1000, 13, 5];
console.log(min(testArray)); // -2
console.log(max(testArray)); // 1000