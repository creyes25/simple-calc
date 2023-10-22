const input1 = document.querySelector('#num-1')
const input2 = document.querySelector('#num-2')
const invalid = document.querySelector('.invalid')
const addition = document.querySelector('.add')
const minus = document.querySelector('.minus')
const division = document.querySelector('.divide')
const multiply = document.querySelector('.multiply')
const results = document.querySelector('.results-display')



function validation () {
  let notNum1 = isNaN(input1.value)
  let notNum2 = isNaN(input2.value)

  if (notNum1 || notNum2) {
    invalid.style.display = 'block'
  } else {
    invalid.style.display = 'none'
  }
}


function equation(type) {
  if (invalid.getAttribute('style') === 'display: block;') {
    results.innerHTML = 0
    return
  }

  const num1 = parseInt(input1.value)
  const num2 = parseInt(input2.value)

  if (type === 'add') {
    results.innerHTML = num1 + num2
  } 

  if (type === 'minus') {
    results.innerHTML = num1 - num2
  } 

  if (type === 'divide') {
    results.innerHTML = num1 / num2
  } 
  if (type === 'multiply') {
    results.innerHTML = num1 * num2
  } 

}

addition.addEventListener('click', () => {
  validation()
  equation('add')
})

minus.addEventListener('click', () => {
  validation()
  equation('minus')
})

division.addEventListener('click', () => {
  validation()
  equation('divide')
})

multiply.addEventListener('click', () => {
  validation()
  equation('multiply')
})

