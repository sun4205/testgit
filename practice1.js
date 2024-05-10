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