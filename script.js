var display = document.getElementById("display");
let prevNum = '';
let curNum = "";
let operator = "";


/* Equation functions  */
function add(a,b){
    return a+b;
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


/* Button Functions */
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
    if (display.value.match(/\./)){
        return;
    } else{
        display.value+= ".";
    }
}
function backspace(){
    let arr = display.value.split('');
    arr.pop();
    let joined = arr.join('');
    display.value = joined;
}
function neg(){
    var negNum = display.value * -1;
    display.value = negNum;
}
function percent(){
    var per = display.value * .01;
    display.value = per;
}
function reset(){
    display.value = "";
    prevNum = '';
    curNum = '';
    operator = '';
}

function equal(){
    storeVal();
    operate(operator, prevNum, curNum);
    operator = "";
}

function addition(){
    storeVal();
    operate(operator, prevNum, curNum);
    operator = "+";
}
function subtraction(){
    storeVal();
    operate(operator, prevNum, curNum);
    operator = "-";
    
}
function multiplication(){
    storeVal();
    operate(operator, prevNum, curNum);
    operator = "*";
}
function division(){
    storeVal();
    operate(operator, prevNum, curNum);
    operator = "/";
}

function storeVal(){
    prevNum = curNum;
    curNum = parseFloat(display.value);
    display.value="";
}

/* Doing the math */
var prod = "";
function operate(operator, prevNum, curNum){
    if (prevNum != 0){
        if (operator === "+"){
            prod = add(prevNum, curNum);
        } else if (operator === "-"){
            prod = subtract(prevNum, curNum);
        } else if (operator === "*"){
            prod = multiply(prevNum, curNum);
        } else if (operator === "/"){
            prod = divide(prevNum, curNum);
        }
        display.value = prod;
    } else {
        return;
    }
}

/* Keyboard buttons */
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
    } else if (event.key ==="Backspace"){
        backspace();
    }
})

