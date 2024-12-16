const forname = 'Akhmad'; //string
const age = 25; //number

if (age < 15) {
    console.log('доступ запрещен');
} else {
    console.log(`Привет ${forname}`)
}

function viewMoney() {
    console.log('Вот вам 10$')
}
viewMoney();

function getMoney() {
    return 'Вот вам 10$';
}


const fn = (cash) => {
    return `Вот вам ${cash}$`
}
console.log(fn(399))

function fn(n) {
    console.log(n * n)
}
fn(2);

function biggestNumber(a, b) {
    if (a > b) {
        console.log(a)
    } else if(b > a) {
        console.log(b)
    }
}
biggestNumber(3, 4)

function discr(a, b, c)  {
    console.log(b * b - 4 * a * c)
}

discr(2, 9, 5);

function numbers(a, b) {
    if(a && b % 2 == 0) {
        return a * b
    } else if(a % 2 != 0 && b % 2 != 0) {
        return a + b
    } else {
        return a % 2 != 0 || b % 2 != 0 
    }
}
console.log(numbers(6, 7));