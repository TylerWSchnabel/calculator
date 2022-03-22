function add(a,b){
    return parseFloat(a) + parseFloat(b);
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

var display = document.getElementById("display");

function one(){
    display.value+= 1;
}
function two(){
    display.value+= 2;
}
function three(){
    display.value+= 3;
}
function four(){
    display.value+= 4;
}
function five(){
    display.value+= 5;
}
function six(){
    display.value+= 6;
}
function seven(){
    display.value+= 7;
}
function eight(){
    display.value+= 8;
}
function nine(){
    display.value+= 9;
}
function zero(){
    display.value+= 0;
}
function decimal(){
    if (parseFloat(display.value)%1 === 0){
        display.value+= ".";
    } else{
        return;
    }
}
function neg(){
    var negNum = display.value * -1;
    display.value = negNum;
}
function clear(){
    display.value = 0;
}

function equal(){

}
function percent(){
    var per = display.value * .01;
    display.value = per;
}

display.addEventListener("keydown", function(event){
    if (event.keyCode === "49"){
        one();
    } else if (event.key ===50){
        two();
    }
})

console.log(operate(add,5,6));
console.log(operate(subtract,5,3));
console.log(operate(multiply,6,3));
console.log(operate(divide,4,8));