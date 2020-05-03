function getCount(str) {
    let vowelsCount = 0,
        vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelsCount += 1;
        }
    }
    return vowelsCount
}

function getCount2(str) {
    return str.match(/[aeiou]/g).length
}


let test = getCount('aqewwerofu');
let test2 = getCount2('aqewwerofu')
console.log(test === test2);