
//  var fruitname="watermelon"
//  let count=2
//  var price=150
//  let total=count-price
//  console.log(total)
 
//  console.log(fruitname)
// console.log(count*price)





// function favourite()  //function create pandrom
// {                     //function set or curly bracket open pandrom kandippa open pannanum
// var favactor="surya"    //variable name function ulla um type pannalam 
// var favplayer="ronaldo"  //
// var favmovie="mounampesiyathae"

//  console.log("fav actor:"+favactor)
//     console.log("fav player:"+favplayer);
//     console.log("fav movie:"+favmovie);
// }//favourite() 

                                       
// const favfood="biriyani+parotta" //
// console.log(favfood)


//ASSIGNMENT OPERATORS practice


// let a = 15;
// let b = 15;
// let c = 40;
//  console.log( "add:",a+=c);
//  console.log( "multiple:",a*=b);
//  console.log("subtrac:",a-=c);
// console.log("division:",b/=c);

// COMPARISION OPERATORS  


//  let a = 15;
// let b = 15;
// let c = 40;

// console.log(a==b);
// console.log(a===b);
// console.log(a>=c);
// console.log(a<=c); 


//LOGICAL OPERATORS 


let a = 15;
let b = 25;
let c = 40;

console.log((a<c)&&(c>b));
console.log((a>=b)||(c<=a)); 
console.log(!(c<=a));        



// function student(name,age){
// this.name = name;
// this.age = age;
// };
// let s1 = new student ("vj", 20)
 
// console.log(s1.age);      // intha mathiri print statement la  dot vachu kudutha  kuduthatha muttum seprate ah output kattum 

//  function person(name,age){
//     this.name= name;
//     this.age= age;
//     this.greet= function(){
// console.log("hello,my name is", this.name, "and i am", this.age, "years old")
//     }
//  }

// let person1= new person ("riyaz",23);
// let person2= new person ("vj",24)
// let person3=new person("surya",23)
// person1. greet();
// person2.greet();
// person3.greet();


// let a = 15;
// if (a<10)
// {
//     console.log("its a big");
// }
    
// else  {
//      console.log("its not big");
     
// }; 

// function pname(name,age){ //let actor ='vj' 

//     console.log("hello", name,"i am",age,"years old");

// } 
//   pname("vj",24);  


// let i=0
// if  (i >= 3) 

// console.log("true")

// else
// console.log("false");

// let num=9
// if (num%2==0){
//     console.log("true")
// }
//   else {
//     console.log("false")
//   }


// let a= 90

// if(a>=80) {
//     console.log('a grade');
// }  else if(a>=60)  {
//     console.log('b grade');
//     }else if (a>=40){
//         console.log('c grade');

//     }
// else {
//     console.log('just pass');
// }


// let a=90;
// let b=50;
// let c=30;
// if(a>b && a>c){
//     console.log("a is greater");
    
// }else if(b>a && b>c){
//     console.log("b is greater");
    
// }else {
//     console.log("c is greater");
    
// }



// for(let a=1;a<=10;a++){
// console.log("number",a);
// } 



// function names(a, b) {
//   let c = a + b;
//   return c;
// }

// console.log(names(10, 5));  //console ku ulla function ah call pannanum

// for(let i=1;i<=10;i++){
//     console.log(i);
// }


// let colors=["red","green","blue"]
// colors.forEach(function(color,index) {
// console.log("colors at index:",index,"is",color);

// });

// let fruits=["aple","orange","mango","banana"]
// for(const abc of fruits){
//     console.log("taste of fruits",abc);
    
// }

// 13/11/25

// let names=["vj","ajith","hari"]
// for (let index in names){
//     console.log("index:",index,"names:",names[index]); //[index] kudukurathunala thn seprate run aguthu
    
// }

//filter excreise::
// let ages=[20,22,33,44,55,66,77]
// let vote=ages.filter(function(age){
//     return age>=18
// })
//     console.log(vote);




    // function profile(name,age,degree,exp,){
    //     this.name=name,
    //     this.age=age,
    //     this.degree=degree,
    //     this.exp=exp
    
    // this.greet=function(){
    //     console.log("name:",this.name,"\n","age:",this.age,"\n","degree:",this.degree,"\n","exp:",this.exp);
    // };  
    // };
    // let name= new profile("vj",24,"Bsc(cs)","3,yrs")
    // let name2=new profile("hari",26,"BA","5,yrs")
    // name.greet();
    // name2.greet();