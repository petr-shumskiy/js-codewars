function accums(str) {
    function f(acc, current, index) {
        let cur = current.toUpperCase();
        console.log(current, cur);
        let resultString = current.toUpperCase();
        // for (let i = 0; i < index; i++) {
        //     resultString += current
        // }
    return current
    }

    let lst = str.toLowerCase().split('');
    return lst.reduce(f, '', ind)
}


let test  = accums('abc');
console.log(test);
