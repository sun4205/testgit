let hour = 20;

if(hour >=6 && hour <12){
  console.log("Good Morning!")
 } else if( hour =>12 && hour <=18){
  console.log("Good Afternoon!")
 } else{
  console.log("Good evening")
 }

 let role = 'guest';

 switch (role){
  case 'guest':
    console.log('Guest User');
    break;

  case 'moderator':
    console.log('Moderator User');
    break;

  default :
    console.log('Unknown User');
 }


 for(let i=0; i<5; i++){
  console.log("Hello");
 }

 for(let i =5; i>=1; i--){
  if(i % 2 !==0){
    console.log(i);
  }
 }
console.log('--------------')
 let i = 0;
 while (i <= 10){
  if(i % 2 ===0){
    i++;
    continue;
  }
   console.log(i)
   i++;
 }

 let number = max(3,2);
 console.log(number);

 function max(a, b) {
  return (a > b) ? a : b;
 }

 function isLandscape(width, height){
return(width>height);
 
 }

 console.log(isLandscape(300,600));

 function fizzBuzz(input){
  
  if((input % 3===0 )&& (input % 5 ===0)){
    return 'Fizz'
  }else if (input % 5 ===0){
    return'Buzz'
  }else if (input % 3 ===0 ){
    return 'fizzBuzz'
  }else if(typeof input !== 'number'){
    return'Not a number';
  }
  return input;
 }

 let output = fizzBuzz(false);
 console.log(output);

 function checkSpeed(speed){
  const speedLimit = 70;
  const kmPerPoint = 5;

  if(speed< speedLimit + kmPerPoint){
    console.log('ok');
  } else {
    const point = Math.floor((speed-speedLimit)/kmPerPoint);
    if(point >=12)
    console.log('Liscense suspended');
  else
    console.log('point', point);
  }
 }

 checkSpeed(75);

 function showNumbers(limit){
  for(let i =0;  i<=limit; i++){
    if(i % 2 === 0 ){
      console.log(i,'EVEN');
    } else{
      console.log(i,'ODD');
    }
  }
 }

 console.log(showNumbers(10));

 const array = [0,null,undefined,'',2,3]

 function countTruthy(array){
  let count=0;
  for(let value of array){
    if(value){
      count++;
    }

      }
      return count;
 }

 console.log(countTruthy(array));