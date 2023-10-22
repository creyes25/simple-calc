const input1 = document.querySelector('#num-1')
const input2 = document.querySelector('#num-2')
const invalid = document.querySelector('.invalid')
const addition = document.querySelector('.add')
const minus = document.querySelector('.minus')
const division = document.querySelector('.divide')
const multiply = document.querySelector('.multiply')
const results = document.querySelector('.results-display')


// checks if input is not a number
function validation () {
  let notNum1 = isNaN(input1.value)
  let notNum2 = isNaN(input2.value)

  let removeStyle1 = input1.style.border = 'none'
  let removeStyle2 = input2.style.border = 'none'

  if (notNum1 || notNum2) {
    invalid.style.display = 'block'
    if (notNum1) {
      input1.style.border = '1px solid red'
    }else {
      removeStyle1
    }
    if (notNum2) {
      input2.style.border = '1px solid red'
    }else {
      removeStyle2
    }
  } else {
    invalid.style.display = 'none'
    removeStyle1
    removeStyle2
  }
}


function equation(type) {
  // checks to see if invalid input is showing
  if (invalid.getAttribute('style') === 'display: block;') {
    results.innerHTML = 0
    return
  }

  // makes string into num
  const num1 = parseInt(input1.value)
  const num2 = parseInt(input2.value)

  if (type === 'add') {
    results.innerHTML = num1 + num2
  } 

  if (type === 'minus') {
    results.innerHTML = num1 - num2
  } 

  if (type === 'divide') {
    results.innerHTML = (num1 / num2).toFixed(2)
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

