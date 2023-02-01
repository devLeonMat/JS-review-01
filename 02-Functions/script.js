/*   functions     */
function logger() {
    console.log('My name is Lion');
}

//calling / running / invoking function
// logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    return `Juice with ${apples} apples and ${oranges} oranges.`;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/*    Function declaration vs expressions    */
function calAge1(birthYear) {
    const age = 2023 - birthYear;
    return age;
}

const age = calAge1(1991);
console.log(age);

const calcAge2 = function (birthYear) {
    return 2023- birthYear;
}

const age2 = calcAge2(1991);
console.log(age, age2)










































