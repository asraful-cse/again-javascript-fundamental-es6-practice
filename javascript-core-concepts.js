// 30_5-1:: Five javaScript Fundamentals that you now .. five fundamental step of javascript .. and es6.
// /:30_5-2: Array methods map , filter , find , forEach , push , pop main part of array ES6..

// how to Decleare veriable :there are three part of variable :: 1,number , 2, string , 3, boolean:
// step one variable part:::

let money = 50;  // number type variable// poribortonshil value bcz  let use 
const fatherName = 'kudus'    // eita change kora jabe na bcz const use 
const isConfident = false;   // eita boolean type of variable 
// how to object use :
const person = {
    name : 'kudus', 
    age : 59,
    city: 'dhaka'
}


// how to template use this object and variable:
const statement = `This person ${person.name} with age ${person.age}`



// /step two condition  .. how to use conditions ::
// if (money > 20 && age >= 45 ) {
    
// }
// else{

// }


// step three array :: how to use array...variable a ekta variable niye kaz kore r array onek gola variable niye kaz kore.

const numbers = [1, 2, 3, 4, 5]; // number array 
const respected = ['Rafiq', 'Barkat', 'Zabbar', 'Matiur'];// string array
// how to use object variable array::
 const productsIteams = [{name: 'laptop', price:4000}, {name:'mobile' , price: 13000}, {name :'watch' , price: 300}];
// /:30_5-2: Array methods map , filter , find , forEach , push , pop main part of array ES6..

const products =[
    {id:1, name:'laptop', price:500},
    {id:2, name:'mobile', price:400},
    {id:3, name:'watch', price:300},
    {id:4, name:'table', price:200}

]

//map:::array object er vetor theke just ekta property anar jonno map use korte hoi forloop er moto:
 const names = products.map(product => product.name);  //single perameter er khetre.. 
// console.log(names);      // otp:: [ 'laptop', 'mobile', 'watch', 'table' ]
 const names2 = products.map(product => {  // multiline perameter er khetre return korte hobe noile dekhabena. 
    //do some work....
    return product.name;
});
// console.log(names2);     // opt:: [ 'laptop', 'mobile', 'watch', 'table' ]

//forEach:: array er object er vetorer property ke ekta ekta kore dore anbe but array hoye asbena and return korbena.
// products.forEach(product => console.log(product.name)); //otp:$ node javascript-core-concepts.js
                                                        // laptop
                                                        // mobile
                                                        // watch
                                                        // table

// filter::array object er vetor theke kico jinish nebo r kico jinis nebona ...
const cheaper = products.filter(product => product.price < 500); // filter condition diye kaz kore .
 //console.log(cheaper);
//  $ node javascript-core-concepts.js
//  [
//    { id: 2, name: 'mobile', price: 400 },
//    { id: 3, name: 'watch', price: 300 },
//    { id: 4, name: 'table', price: 200 }
//  ]

// remove an item using filter::
const remaining = products.filter(product => product.id != 3);  // != is not = 3..
//console.log(remaining);   //   otp::  3 number id bad jabe..
                                // [
                                // { id: 1, name: 'laptop', price: 500 },
                                // { id: 2, name: 'mobile', price: 400 },
                                // { id: 4, name: 'table', price: 200 }
                                // ]


// find:: array object er vetor theke ekta element khoje ber korar jonno find use kora hoi...
const hasWatch = products.find(product => product.name === 'watch');
//console.log(hasWatch);  // otp::
                            // $ node javascript-core-concepts.js
                            // { id: 3, name: 'watch', price: 300 }

// array nicher golo valo vabe jante hobe...
//reduce..........
//include.......
//push.........
//pop........
//length...
// indexOf..

// step four :: for loop using ::

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    
}




//step five:: function: normal function and arrow function::

function add(num1, num2) {
    return num1 + num2;
    
}
const result = add(1, 1);          // function ke call kora holow..
// console.log(result);

// arrow functions '''
const fiveTimes = num => num * 5;   // single arrow function er khetre..
const add2 = (num1, num2) => num1 + num2; // single arrow function er khetre ...
const doMath = (x , y) => {              // multiple arrow function er khetre..
    const sum = x + y;
    return sum * 2
}

