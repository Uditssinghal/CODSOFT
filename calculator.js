let boxes = document.querySelectorAll(".numbers .box");
let op = document.querySelectorAll(".operators .box");
let input = document.querySelector("input");
let equal = document.getElementById('equal');
let clearText = document.querySelector(".clear button");
let previousInput='';
let currentInput = '';
let operator = '';
let result = '';

    function clear(){     // to clear text function
       currentInput ='';
       previousInput ='';
       operator = '';
       input.value = '0';
    }
              
      // function to append number on click

    function appendNumber(number){
        
        currentInput += number;
        input.value = input.value + currentInput;
    }

    // fucntion to select operator : 
    
        function selectOperator(selectedOperator){
            input.value = input.value + selectedOperator;
               if(currentInput === '') return;
               if(previousInput !== '')
               {
                  calculate();
               }
            operator = selectedOperator;
            previousInput = currentInput;
            currentInput = '';
        }

function calculate(){     // to calculate the inputs
    let res;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if(isNaN(prev) || isNaN(curr))
    return;
switch(operator) {
        case '+':
             res = curr + prev;
             break;
        case '-':
            res = prev - curr;
            break;
        case 'x': 
            res = prev * curr;
            break;
        case '/':
            res = prev / curr;
            break;
        default:
            return;
}

currentInput = res.toString();
result = res.toString();
previousInput = '';
operator = '';
updateDisplay();
}

         //  output of calculation

 function updateDisplay(){   
    input.value = result; 
 }
   
      // events : 

clearText.addEventListener("click",clear);  // clear text

boxes.forEach(box => {
    box.addEventListener("click", () => {
        appendNumber(box.innerText);
    });
});
 op.forEach(opr => {
    opr.addEventListener("click", ()=>{
        selectOperator(opr.innerText);
    });
 });

 equal.addEventListener("click",calculate);

