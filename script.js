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
    /*if (parseFloat(display.value)%1 === 0){
        display.value+= ".";
    } else{
        return;
    }*/
    for (let i=0; i<display.value.length; i++){
        if (display.value[i] === "."){
            return
        } else {
            display.value +=".";
        }
    }
}
function neg(){
    var negNum = display.value * -1;
    display.value = negNum;
}
function reset(){
    display.value = "";
    console.log("happy");
}

function equal(){
    display.value = "";
}
function percent(){
    var per = display.value * .01;
    display.value = per;
}

document.addEventListener("keydown", function(event){
    if (event.key === "1"){
        one();
    } else if (event.key ==="2"){
        two();
    } else if (event.key ==="3"){
        three();
    } else if (event.key ==="4"){
        four();
    } else if (event.key ==="5"){
        five();
    } else if (event.key ==="6"){
        six();
    } else if (event.key ==="7"){
        seven();
    } else if (event.key ==="8"){
        eight();
    } else if (event.key ==="9"){
        nine();
    } else if (event.key ==="0"){
        zero();
    } else if (event.key ==="."){
        decimal();
    } else if (event.key ==="%"){
        percent();
    } else if (event.key ==="-"){
        neg();
    }
})

console.log(operate(add,5,6));
console.log(operate(subtract,5,3));
console.log(operate(multiply,6,3));
console.log(operate(divide,4,8));