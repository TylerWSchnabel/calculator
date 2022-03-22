function add(a,b){
    return parseFloat(a)+parseFloat(b);
}

function subtract(a,b){
    return parseFloat(a) - parseFloat(b);
}

function multiply(a,b){
    return parseFloat(a) * parseFloat(b);
}

function divide(a,b){
    return parseFloat(a) / parseFloat(b);
}

function operate(operator,num1,num2){
    return operator(num1,num2);
}
console.log(operate(add,5,6));
console.log(operate(subtract,5,3));
console.log(operate(multiply,6,3));
console.log(operate(divide,4,8));