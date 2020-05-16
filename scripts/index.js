document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('zero').addEventListener('click', () => { addValue('0') })
  document.getElementById('one').addEventListener('click', () => { addValue('1') })
  document.getElementById('two').addEventListener('click', () => { addValue('2') })
  document.getElementById('three').addEventListener('click', () => { addValue('3') })
  document.getElementById('four').addEventListener('click', () => { addValue('4') })
  document.getElementById('five').addEventListener('click', () => { addValue('5') })
  document.getElementById('six').addEventListener('click', () => { addValue('6') })
  document.getElementById('seven').addEventListener('click', () => { addValue('7') })
  document.getElementById('eight').addEventListener('click', () => { addValue('8') })
  document.getElementById('nine').addEventListener('click', () => { addValue('9') })

  // document.getElementById('clear').addEventListener('click', () => { clearAll() })
  // document.getElementById('porcent').addEventListener('click', () => { generatePorcent() })
  // document.getElementById('delete').addEventListener('click', () => { deleteLastNumber() })
  // document.getElementById('inverse-sign').addEventListener('click', () => { generateInverseValue() })
  // document.getElementById('dot').addEventListener('click', () => { addValue('.') })

  document.getElementById('division').addEventListener('click', () => { operation('/') })
  document.getElementById('multiplication').addEventListener('click', () => { operation('*') })
  document.getElementById('subtraction').addEventListener('click', () => { operation('-') })
  document.getElementById('sum').addEventListener('click', () => { operation('+') })
  document.getElementById('equal').addEventListener('click', () => { operation('=') })

  var elementOutput = document.getElementById('result')
  var currentOperation = ''
  var currentValue = ''
  var accumulatedValue = 0
  var showAccumulatedValue = false

  function addValue (value) {
    if (showAccumulatedValue) {
      showAccumulatedValue = false
      currentValue = ''
      elementOutput.value = ''
    } else {
      // currentValue += value.toString()
    }
    currentValue += value.toString()
    elementOutput.value = currentValue
    
    showTest()
  }

  function operation (operator) {
    if (currentOperation) {
      applyOperation(operator)
      accumulatedValue = elementOutput.value
    } else {
      showAccumulatedValue = true
      currentOperation = operator
      accumulatedValue = parseFloat(currentValue)
    }
    showTest()
  }

  function applyOperation (nextOperation) {
    switch(currentOperation) {
      case ('/'):
        elementOutput.value = (parseFloat(accumulatedValue) / parseFloat(currentValue)).toString()
        break
      case ('*'):
        elementOutput.value = (parseFloat(accumulatedValue) * parseFloat(currentValue)).toString()
        break
      case ('-'):
        elementOutput.value = (parseFloat(accumulatedValue) - parseFloat(currentValue)).toString()
        break
      case ('+'):
        elementOutput.value = (parseFloat(accumulatedValue) + parseFloat(currentValue)).toString()
      break
      default:
        elementOutput.value = 'Error'
      break
    }
    if (nextOperation != '=') currentOperation = nextOperation
  }
  
  function showTest () {
    document.getElementById('element-output').innerText = elementOutput.value
    document.getElementById('current-operation').innerText = currentOperation
    document.getElementById('current-value').innerText = currentValue
    document.getElementById('accumulated-value').innerText = accumulatedValue
    document.getElementById('show-accumulated-value').innerText = showAccumulatedValue
  }

})