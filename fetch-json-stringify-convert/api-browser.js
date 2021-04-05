// / :30_5-5:Fetch JSON Local storage object keys and values...

// api:api is very important:eita poropori object na ..
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));

//JSON::How to convert json object ::
const products = 
    {id: 1, name:'laptop', price:5000};
    // {id: 2, name:'phone', price:4000};
    // {id: 3, name:'watch', price:2000};
    // {id: 4, name:'mac book', price:6000};
  
// //JSON convert back and forth...
const data = JSON.stringify(products);   // object ke json a stringify kore convert korte hobe .. 
// console.log(data)
const dataProducts = JSON.parse(data);   // json stringify a convert kore tarpor json parse a convert kore oi object er vetor theke element k call kore pawa jabe other ways hobena.
// console.log(dataProducts);
// console.log(dataProducts.name);


// use localStorage and setStorage ::
// const userId = localStorage.setItem('userId', 1234);  // application localStorage a set korar system. console browser otp: show korbe.
// console.log(userId);
const userId = localStorage.getItem('userId');
// console.log(userId);    /// browser er console show korbe opt: 3437734573475734573745734753456345634573


localStorage.setItem('products', JSON.stringify(products));  // browser er local storage dekhte parbow: console:::{"id":1,"name":"laptop","price":5000}
const storedProducts = localStorage.getItem('products'); 
const parsedProducts = JSON.parse(storedProducts);   // parse korar por console show korbe // console:: {id: 1, name: "laptop", price: 5000}
// console.log(parsedProducts);    // output: {id: 1, name: "laptop", price: 5000}

console.log(parsedProducts.price);    // ekhon object er price  peye jabo::// cosole::  50000


const keys = Object.keys(parsedProducts);   // object a koita key ase ta show korar jonno...
console.log(keys);    // key golow peye jabo // cosole :: ["id", "name", "price"]

const values = Object.values(parsedProducts);
console.log(values);  /// value dekahar jonno .. console ::  [1, "laptop", 5000]
