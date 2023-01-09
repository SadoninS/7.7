//  +	btn_add - Addition	Adds two numbers together.	6 + 9
//  -	btn_sub - Subtraction	Subtracts the right number from the left.	20 - 15
//  *	btn_mul - Multiplication	Multiplies two numbers together.	3 * 7
//  /	btn_div - Division	Divides the left number by the right.	10 / 5

let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
});

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
});

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
});

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
});

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
});

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
});

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
});

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
});

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
});

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
});

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
});

document.getElementById('btn_add').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'add';
    inputWindow.value = '';
});

document.getElementById('btn_sub').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sub';
    inputWindow.value = '';
});

document.getElementById('btn_mul').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mul';
    inputWindow.value = '';
});

document.getElementById('btn_div').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
});

document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'add'){
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;};
    if (operation === 'sub'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;};
    if (operation === 'mul'){
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;};
    if (operation === 'div'){
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;};
});
