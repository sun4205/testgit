// let hour = 20;

// if(hour >=6 && hour <12){
//   console.log("Good Morning!")
//  } else if( hour =>12 && hour <=18){
//   console.log("Good Afternoon!")
//  } else{
//   console.log("Good evening")
//  }

//  let role = 'guest';

//  switch (role){
//   case 'guest':
//     console.log('Guest User');
//     break;

//   case 'moderator':
//     console.log('Moderator User');
//     break;

//   default :
//     console.log('Unknown User');
//  }


//  for(let i=0; i<5; i++){
//   console.log("Hello");
//  }

//  for(let i =5; i>=1; i--){
//   if(i % 2 !==0){
//     console.log(i);
//   }
//  }
// console.log('--------------')
//  let i = 0;
//  while (i <= 10){
//   if(i % 2 ===0){
//     i++;
//     continue;
//   }
//    console.log(i)
//    i++;
//  }

//  let number = max(3,2);
//  console.log(number);

//  function max(a, b) {
//   return (a > b) ? a : b;
//  }

//  function isLandscape(width, height){
// return(width>height);
 
//  }

//  console.log(isLandscape(300,600));

//  function fizzBuzz(input){
  
//   if((input % 3===0 )&& (input % 5 ===0)){
//     return 'Fizz'
//   }else if (input % 5 ===0){
//     return'Buzz'
//   }else if (input % 3 ===0 ){
//     return 'fizzBuzz'
//   }else if(typeof input !== 'number'){
//     return'Not a number';
//   }
//   return input;
//  }

//  let output = fizzBuzz(false);
//  console.log(output);

//  function checkSpeed(speed){
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if(speed< speedLimit + kmPerPoint){
//     console.log('ok');
//   } else {
//     const point = Math.floor((speed-speedLimit)/kmPerPoint);
//     if(point >=12)
//     console.log('Liscense suspended');
//   else
//     console.log('point', point);
//   }
//  }

//  checkSpeed(75);

//  function showNumbers(limit){
//   for(let i =0;  i<=limit; i++){
//     if(i % 2 === 0 ){
//       console.log(i,'EVEN');
//     } else{
//       console.log(i,'ODD');
//     }
//   }
//  }

//  console.log(showNumbers(10));

//  const array = [0,null,undefined,'',2,3]

//  function countTruthy(array){
//   let count=0;
//   for(let value of array){
//     if(value){
//       count++;
//     }

//       }
//       return count;
//  }

//  console.log(countTruthy(array));

//  const movie = {
//   title : 'a',
//   releaseYear : 2018,
//   rating: 4.5,
//   director: 'b'


//  };

//  function showProperties(obj){
//   for(let key in obj){
//     console.log(key)
//   }
//  }

//  showProperties(movie);

//  function sum(limit){

//  }

//  console.log(sum(10));

//  function sum(limit){
//   let sum=0;

//   for(let i =0; i<=limit; i++){
//     if(i % 3 ===0 ||i % 5 ===0){
//       sum += i;
//     }    
//   }
//   return sum;
//  }

//  console.log(sum(10));

 const marks = [80, 80, 50];
 
 function calculateAvarage(array){
  let sum = 0;
  for(let value of array)
    sum += value;
  return sum/ array.length
 }

 function calculateGrade(marks){
  const averagy = calculateAvarage(marks) //70

  if(averagy<60) return 'F';
  if(averagy<70) return 'D';
  if(averagy<80) return 'C';
  if(averagy<90) return 'B';
  return 'A'
 }

 const grade = calculateGrade(marks);
 console.log(grade);



 function addTwo(num1, num2) {
  const summ = num1 + num2
  return summ
 }

 const result = addTwo(10, 20);
 console.log(result)

// // ///////////////////////////
 function showStars(rows){
  for(let row=1; row<=rows; row++){
    let pattern = '';
    for(let i=0; i<row; i++) {
      pattern += '*';
    }

    console.log(pattern)
  }

 }

 showStars(5);

 function showPrimes(limit){
  for(let number=2; number <= limit; number++){
    if(isPrime(number)) console.log(number);
  }
 }

 function isPrime(number){
  for(let factor =2; factor<number; factor++){
    if(number % factor ===0){
      return false
    }
  }
  return true;
 }

 showPrimes(20);

 const circle = {
  radius : 1,
  draw(){
    console.log('draw');
  }
 };

 for(let key in circle)
 console.log(key, circle[key]);

 for(let key of Object.keys(circle))
 console.log(key);

 for(let entry of Object.entries(circle))
 console.log(entry);

 if('color' in circle) console.log('yes');

 let address = {
  street : 'a',
  zipcode : 'b',
  city : 'c'
 };

 function showAddress(address){
  for(let key in address){
    console.log(key, address[key])
  }
 }

 showAddress(address);

 //factory function

 function createAddress(street, city, zipcode){
  return {
    street,
    city,
    zipcode
  };
 }

 //contructor function

 function Address(street, city, zipcode){
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
 }

 let makeAddress = new Address('a','b','c');

 const numbers = [1,2,3,1,4];

 console.log(numbers.indexOf('a'));
 console.log(numbers.indexOf(1));
 console.log(numbers.lastIndexOf(1));
 console.log(numbers.indexOf(1,2));

 const courses = [
  {id:1, name:'a'},
  {id:2, name:'b'}
 ];

 const course = courses.find(function(course){
  return course.name === 'a';
 });

 console.log(course);

 const examNum = [1, 2, 3, 4];

 const last = examNum.pop();
 console.log(examNum);
 console.log(last);
 const first = examNum.shift()
 console.log(first);

 examNum.splice(2,1);
 console.log(examNum)

 const first1 = [1,2,3];
 const second = [4,5,6];

 const combined = first1.concat(second);
 console.log(combined)

 for(let exam of examNum)
 console.log(exam);

 examNum.forEach(exam => console.log(exam));

 const filtered = numbers.filter(n => n>=0);

 const items = filtered.map(n=>{
  return {value:n};
 });

 console.log(items);

 const result1 = numbers.reduce((accumulator,currentVaule)=>{
  return accumulator + currentVaule;
 },0)

 console.log(result1);

 function sum(...items){
  if(items.length===1 && Array.isArray(items[0]))
  items = [...items[0]];

  return items.reduce((a,b) => a + b);
 }

 console.log(sum([1,2,3,4]));

 const circle1 = {
  radius : 1,
  get area(){
    return Math.PI * this.radius * this.radius;
  }
 };

 console.log(circle1.area);

 

 try{
  const numb = [1,2,3,4];

 const count = countOccurrences(true,1);
 console.log(count);
 }

 catch (e){
  console.log(e.message);
 }

 function countOccurrences(array, searchElement){
  if(!Array.isArray(array))
  throw new Error('Invalid array');

  return array.reduce((accumulator,current)=>{
    const occurence = (current === searchElement) ? 1: 0;
    return accumulator + occurence;
  }, 0);
 }




