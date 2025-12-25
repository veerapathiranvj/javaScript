// if-else


// let a= 10;
// let b= -5;

// if (b>0){
//     console.log('positive');
// }else {
//     console.log('negavite');
    
// } 

// let age=23;
// if (age>=18){
//     console.log('you are eligible to vote');
    
// }else {
//     console.log('you are not eligible to vote');
    
// }

//objects

// let car={
//     name:"honda",
//     model:"civic",
//     color:"black",
//     type:"sedan"
// }
// console.log(car);
// console.log(car.type);

//array methods adding & removing methods...

// let cars=["honda","audi","mercedes benz","renault","nissan","toyota","skoda"];
// cars.pop()
// cars.push("volkswagen");
// console.log(cars);

// //slice and splice....
// let numbers=[51,61,73,84,88,90,93,95,98,99];
// let select= numbers.slice(0,3)
// console.log(select);    // namakku ethu thevayoo atha muttum eduthukalam athukku thn slice method;
// numbers.splice(1,2)
// console.log(numbers);

// let cloths=["allensoly","otto","peter england","louis philippe","van heusen","adidas","indian terrain"];
// console.log(cloths.includes("adidas"));
// console.log(cloths.indexOf("louis philippe"));


// join reverse


// let words= ["A","B","c"]
//  let w2=words.join("-");
//  words.reverse();
//  console.log(words);
//  console.log(w2);
 

//13/11/25*
// let numbers=[1,2,3,4,5]
// numbers.forEach(function(a){
//     console.log(a*2,);
    
// });

 
// let fruits=["apple","orange","mango","kiwi","grape","cherry"]
// fruits.forEach(function(a,b){                                    // b is index value, "a" is array value 
// console.log("s.no",b, a,"is tasteful");

// }); 


// let car=
//    ["city","civic","amaze","accord","mobileo"] 

//  for(let value in car ){        //intha value vanthu index value ah mention pannum
//     console.log(value,"names",car[value]);
    
// }  


// let numbers =[10,20,15,23,35]
// for(let a of numbers){     // intha a vanthu oru variable 
//     console.log(a);
    
// }

//map concept//

// let prime=[2,3,5,7,11]
// let doubled=prime.map(function(a){
//     return a*2;
// });
// console.log(doubled);

//map concept////
// let words=["veerapathiran"];
// let capital=words.map(function(a) {
// return a.toUpperCase() 
// });
// console.log(capital);


//filter concept
// let even=[12,23,31,32,6,20,80,24];

// let numbers=even.filter(function(a){   
//      return a%2===0;
//  });
// console.log(numbers);

//filter 2 concept
// let names=["hi","vj","hari","sabari","vel"]
// let character=names.filter(function(a){
//     return a.length>=4         
// });
// console.log(character);

//reduce filter 
// let a=[2,5,6,8,45,25]
// let total=a.reduce(function(b,c){
//    return b+c
// });
// console.log(total);

// let a=[1,2,3,4,5,6,88,7,8,9]
// let maximum=a.reduce(function(v,s){
// return s>v? s:v;    //chtgpt paathu thn  pannom condition cant understand
// },a[0])
// console.log(maximum);

