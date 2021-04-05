// :30_5-3:Array and object destructuring and three dots...

// Array destructuring >> normal way::
const numbers = [50, 40 , 50, 30];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);   // opt:50 40

//shortcut way::
const [x, y, z] = numbers;
// console.log(x, y, z);


//function array destructuring:
function boxIfy(num1) {
    return [num1, num1 * 5];
}
const boxed = boxIfy(8);
//console.log(boxed);  ///opt:: [ 8, 40 ]
const [box1, box2] = boxIfy(8);                    // shortcut way..
// console.log(box1, box2);  ///opt::  8, 40 


/// object destructuring::
const person = {id: 1, name: 'kudus', money:200, age:25};
const{id, money} =  person // right side er array te jei element thakbe left side a ta dite hoe.. 
console.log('id',id,'money', money); //otp::  id 1 money 200

 // / create object shortcut::
const one = 25;
const two = 25;
const obj = {one, two};
console.log(obj);  // opt:: { one: 25, two: 25 }



// three dots/... eita array er vetorer kaz kore and new array + kore and new array create kore.
const result = [50, 40 , 50, 30];
const newNumbers = [...result, 99, 100];
console.log(newNumbers);   // otp:: [ 50, 40, 50, 30, 99, 100 ]

//  console.log(result.push(3344, 22,444,55,6)); // new value add same array length count 1,2,3..