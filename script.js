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
    setZero();
    display.textContent+= 1;
}
function two(){
    setZero();
    display.textContent+= 2;
}
function three(){
    setZero();
    display.textContent+= 3;
}
function four(){
    setZero();
    display.textContent+= 4;
}
function five(){
    setZero();
    display.textContent+= 5;
}
function six(){
    setZero();
    display.textContent+= 6;
}
function seven(){
    setZero();
    display.textContent+= 7;
}
function eight(){
    setZero();
    display.textContent+= 8;
}
function nine(){
    setZero();
    display.textContent+= 9;
}
function zero(){
    setZero();
    display.textContent+= 0;
}
function decimal(){
    if (display.textContent.match(/\./)){
        return;
    } else{
        display.textContent+= ".";
    }
}
function backspace(){
    let arr = display.textContent.split('');
    arr.pop();
    let joined = arr.join('');
    display.textContent = joined;
}
function neg(){
    var negNum = display.textContent * -1;
    display.textContent = negNum;
}
function percent(){
    var per = display.textContent * .01;
    display.textContent = per;
}
function reset(){
    display.textContent = "";
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
    curNum = parseFloat(display.textContent);
}

function setZero(){
    if ((parseFloat(display.textContent) === parseFloat(curNum)) || (parseFloat(display.textContent) === parseFloat(prod))){
        display.textContent = "";
        console.log('banana')
    } else {
        console.log("pass");
    }
}

/* Doing the math */
var prod = "";
function operate(operator, prevNum, curNum){
    if (prevNum != ""){
        if (operator === "+"){
            prod = add(prevNum, curNum);
        } else if (operator === "-"){
            prod = subtract(prevNum, curNum);
        } else if (operator === "*"){
            prod = multiply(prevNum, curNum);
        } else if (operator === "/"){
            if (curNum === 0){
                window.alert('WTF are you thinkning?!');
                reset();
            } else{
                prod = divide(prevNum, curNum);
            }
        }
        display.textContent = prod;
        storeVal();
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
        subtraction();
    } else if (event.key ==="Backspace"){
        backspace();
    } else if (event.key ==="+"){
        addition();
    } else if (event.key ==="*"){
        multiplication();
    } else if (event.key ==="/"){
        division();
    } else if (event.key ==="="){
        equal();
    } else if (event.key ==="Enter"){
        equal();
    } 
})

