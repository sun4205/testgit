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