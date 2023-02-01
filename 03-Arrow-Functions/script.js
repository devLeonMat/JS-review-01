//
// // function expression
// const calcAge2 = function (birthYear) {
//     return 2023- birthYear;
// }
//
// const age2 = calcAge2(1991);
// // console.log(age2)
//
//
// // arrow function
// const calcAge3 = birthYear => 2023-birthYear;
//
// // console.log(calcAge3(1991))
//
// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years` ;
// }
//
// console.log(yearsUntilRetirement(1991, 'pepa'));

let arreglo = ['idSolicitud:1520074417655,idSrvElectrico:5022687,idConfPresVta:5174,estado:Facturado',
    'idSolicitud:1520074417656,idSrvElectrico:5022688,idConfPresVta:5175,estado:Facturado'];

let array2 = [];

arreglo.forEach(value => {
    console.log(value);
    console.log(value.split(','));
    console.log(value.split(',').find(e=>e.includes('idSolicitud')).split(':')[1]);
})


































