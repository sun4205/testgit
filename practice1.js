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