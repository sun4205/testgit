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