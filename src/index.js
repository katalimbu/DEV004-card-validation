import validator from './validator.js';


function validate() { 
  const inputValue = document.getElementById("cardnumber").value
          
  if (inputValue === '') {
    alert('campo requerido');
    return;
  } 

  const valid = validator.isValid(inputValue); 
  // valid = true/false
  if(valid === true){
    alert('tarjeta valida')
  } 
  else{
    alert('tarjeta invalida')
  }  
}

const btn = document.querySelector('#validar')

btn.addEventListener('click', () => {
  validate()
})

const cajatexto = document.getElementById('cardnumber');
cajatexto.addEventListener('change', updateValue )

// const maskify = document.getElementById('valores');

// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.srcElement.value;
// }

// const input = document.querySelector('input');
const log = document.getElementById('log');

// input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent =validator.maskify(e.target.value);
}