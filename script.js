
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');
let nextValue = false
let operatorValue = ''
let firstValue = 0



inputBtns.forEach(function(inputBtn){

if(inputBtn.classList.length === 0){
  inputBtn.addEventListener('click', ()=>  sendValues(inputBtn.value))  
}

else if(inputBtn.classList.contains('operator')){
inputBtn.addEventListener('click', ()=> useOperator(inputBtn.value))

}

else if(inputBtn.classList.contains('decimal')){
  
  inputBtn.addEventListener('click', useDecimal)

}


})


function sendValues(number){

if(nextValue) {

  calculatorDisplay.textContent = number
  nextValue = false

} 
else{
  let displayValue = calculatorDisplay.textContent
  calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number

  }

}

function useOperator(operator){
  
  let currentValue = Number(calculatorDisplay.textContent)

if(nextValue && operatorValue){
  operatorValue = operator
return 

}

  if(!firstValue){
    firstValue = currentValue
  }
   else{
  let calculation = calculate[operatorValue](firstValue,currentValue)
  calculatorDisplay.textContent = calculation
  firstValue = calculation
   
}
nextValue = true
operatorValue = operator

}
let calculate = {
'/' : (firstValue,currentValue) => firstValue/currentValue,
'*' : (firstValue,currentValue) => firstValue*currentValue,
'-' : (firstValue,currentValue) => firstValue-currentValue,
'+' : (firstValue,currentValue) => firstValue+currentValue,
'=' : (firstValue,currentValue) => firstValue=currentValue,

}


function useDecimal(){
  
  if(nextValue) return;

  else if(!calculatorDisplay.textContent.includes('.')){
   calculatorDisplay.textContent = `${calculatorDisplay.textContent}.` 
  }

}



clearBtn.addEventListener('click', clearAll)


function clearAll(){
operatorValue = ''
nextValue = false
firstValue = 0
calculatorDisplay.textContent = '0' 


}


// const calculatorDisplay = document.querySelector('h1');
// const inputBtns = document.querySelectorAll('button');
// const clearBtn = document.getElementById('clear-btn');

// let firstValue = 0;
// let operatorValue = '';
// let awaitingNextValue = false;



// // Add Event Listeners for numbers, operators, decimal
// inputBtns.forEach((inputBtn) => {
//   if (inputBtn.classList.length === 0) {
//     inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
//   } else if (inputBtn.classList.contains('operator')) {
//     inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
//   } else if (inputBtn.classList.contains('decimal')) {
//     inputBtn.addEventListener('click', () => addDecimal());
//   }
// });



// function sendNumberValue(number) {
//   // Replace current display value if first value is entered
//   if (awaitingNextValue) {
//     calculatorDisplay.textContent = number;
//     awaitingNextValue = false;
//   } else {
//     // If current display value is 0, replace it, if not add number to display value
//     const displayValue = calculatorDisplay.textContent;
//     calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
//   }
// }

// function addDecimal() {
//   // If operator pressed, don't add decimal
//   if (awaitingNextValue) return;
//   // If no decimal, add one
//   if (!calculatorDisplay.textContent.includes('.')) {
//     calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
//   }
// }

// // Calculate first and second values depending on operator
// const calculate = {
//   '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

//   '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

//   '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

//   '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

//   '=': (firstNumber, secondNumber) => secondNumber,
// };

// function useOperator(operator) {
//   const currentValue = Number(calculatorDisplay.textContent);
//   // Prevent multiple operators
//   if (operatorValue && awaitingNextValue) {
//     operatorValue = operator;
//     return;
//   }
//   // Assign firstValue if no value
//   if (!firstValue) {
//     firstValue = currentValue;
//   } else {
//     const calculation = calculate[operatorValue](firstValue, currentValue);
//     calculatorDisplay.textContent = calculation;
//     firstValue = calculation;
//   }
//   // Ready for next value, store operator
//   awaitingNextValue = true;
//   operatorValue = operator;
// }


// // Event Listener
// clearBtn.addEventListener('click', resetAll);

// // Reset all values, display
// function resetAll() {
//   firstValue = 0;
//   operatorValue = '';
//   awaitingNextValue = false;
//   calculatorDisplay.textContent = '0';

// }
