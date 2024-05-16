function sum(a,b){
    let total = 0;
    for(let value of arguments){
        total += value;
       
    } 
    return total;
}

/*function sum(...arg){
return arg.reduce((a,b)=>a+b);
}*/
console.log(sum(1,2,3,4,5,10));

function anoSum(discount,...prices){
    const total = prices.reduce((a,b)=>a+b);
    return total * (1-discount);
}

console.log(sum(0.1,20,30,1));

function interest(principle, rate=3.5, years){
    return principle * rate/100*years;
}
console.log(interest(10000, undefined,5));

const person = {
    firstName:'Mosh',
    lastName:'Hamedani',
    set fullName(value){
        if(typeof value !== 'string')
        throw new Error('value is not a string');

        const parts = value.split('');
        if(parts.length !==2)
        throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
    
    };


    try{
        person.fullName = '';
    }
    catch (e){
        alert(e);
    }
    console.log(person)

    const color = 'red';

    function start(){
        const message = 'hi';
        console.log(color);
    }

    function stop(){
        const message = 'bye';
    }

    start();

    let person1 = {
        name : 'Mosh',
        age : 30
    };

    person1.name = 'John';

    person['name'] = 'Mary';

    console.log(person.name);

    let selectedColors = ['red','blue'];
    selectedColors[2] = 'green';

    console.log(selectedColors.length);

    function greet(name){
        console.log('Hello' + name);
    }

    greet('John');

    function square(number){
        return number * number;
    }

    
    console.log(square(2));

    let a = 'red';
    let b = 'blue';

    let c=a;
    a = b;
    b=c;

    console.log(a);
    console.log(b);

    let hour = 10;

    if(hour >=  6 && hour <12){
        console.log('Good Morniing')
    }
    else if (hour >=12 && hour <18){
        console.log('Good Afternoon');
    }
    else {
        console.log('Good night');
    }

    for(let i=0; i<5; i++){
        console.log('hello world');
    }

    for(let i =0; i<=5; i++){
        if(i%2 !==0) console.log(i);
    }

    let number = max(3,5);

    function max(num1,num2){
        return (num1>num2) ? num1 : num2;
    }

    console.log(isLandescape(300,400));
    function isLandescape(width, heigh){
        return(width>heigh);
    }

    const output = fizzBuzz(15);
    console.log(output);

    function fizzBuzz(input){
         if((input % 3 ===0) && (input % 5 ===0))
        return fizzBuzz;
    
        if(input !== 'number')
        return 'Nan';

        if(input % 3 ===0 )
        return fizz;

        if(input % 5 ===0 )
        return Buzz;      

        
        return input;
    }

    checkSpeed(180)

    function checkSpeed(speed){
        const speedLimit = 70;
        const kmPerPoint = 5;

        if(speed<=speedLimit)
        console.log('ok');
        else {
           let points = Math.floor((speed - speedLimit) / kmPerPoint);
           if(points >=12)
                console.log('License suspended');
            else
            console.log('points', points);
        }
        


    }