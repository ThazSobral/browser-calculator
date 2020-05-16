document.addEventListener('DOMContentLoaded', function () {

  var elementOutput = document.getElementById('result')
  elementOutput.value = 0
  var currentOperation = ''
  var currentValue = '0'
  var accumulatedValue = 0
  var operationWasPerformed = false
  var nextOperation = ''
  var testMode = false
  var varTest = ''

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

  document.getElementById('clear').addEventListener('click', () => { clearAll() })
  document.getElementById('porcent').addEventListener('click', () => { operation('%') })
  document.getElementById('delete').addEventListener('click', () => { deleteLastNumber() })
  document.getElementById('inverse-sign').addEventListener('click', () => { generateInverseValue() })
  document.getElementById('dot').addEventListener('click', () => { addValue('.') })

  document.getElementById('division').addEventListener('click', () => { operation('/') })
  document.getElementById('multiplication').addEventListener('click', () => { operation('*') })
  document.getElementById('subtraction').addEventListener('click', () => { operation('-') })
  document.getElementById('sum').addEventListener('click', () => { operation('+') })
  document.getElementById('equal').addEventListener('click', () => { operation('=') })
  
  document.addEventListener('keypress', (event) => {
    if (parseFloat(event.key) >= 0 && parseFloat(event.key) <= 9 || event.key == '.') {
      addValue(event.key)
    }
    if (event.key == '/' || event.key == '*' || event.key == '-' || event.key == '+' || event.key == '%') {
      operation(event.key)
    }
    if (event.key == 'Enter' || event.key == '=') {
      operation('=')
    }
    if (event.key == 'Delete') {
      deleteLastNumber()
    }

    showTest()
  })

  function deleteLastNumber () {
    if (currentValue.length == 0 || currentValue == '0') {
      currentValue = '0'
    } else {
      currentValue = currentValue.substring(0,(currentValue.length - 1 ))
    }
    elementOutput.value = currentValue

    showTest()
  }

  function clearAll () {
    elementOutput = document.getElementById('result')
    elementOutput.value = 0     
    currentOperation = ''
    currentValue = '0'
    accumulatedValue = 0
    operationWasPerformed = false
    nextOperation = ''

    showTest()
  }

  function generateInverseValue () {
    elementOutput.value *= -1
    currentValue = elementOutput.value

    showTest()
  }

  function addValue (value) {
    if (value == '.') {
      if (currentValue.includes('.')){
        return
      } else if(currentValue == '0') {
        varTest = 'ok'
        addValue('0.')
        return
      }
    }

    if (operationWasPerformed || currentValue == '0') {
      operationWasPerformed = false
      currentValue = ''
    }
    currentValue += value.toString()
    elementOutput.value = currentValue
    
    showTest()
  }

  function operation (operator) {
    if (currentOperation) {
      if (operator == '%') {
        operation(currentOperation)
        currentValue = '0'
        applyOperation(operator)
      }else if (operator == '=') {
        applyOperation(currentOperation)
      } else {
        applyOperation(currentOperation)
        currentOperation = operator
      }
    } else {
      if (operator == '%') {
        applyOperation(operator)
      }
      currentOperation = operator
    }
    operationWasPerformed = true
    accumulatedValue = parseFloat(elementOutput.value)

    showTest()
  }

  function applyOperation (operator) {
    switch(operator) {
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
      case ('%'):
        elementOutput.value = ((parseFloat(currentValue) + parseFloat(accumulatedValue))/100).toString()
        break
      default:
        elementOutput.value = 'Error'
      break
    }
    showTest()
  }
  
  function test () {
    const arrayIds = [
      'element-output',
      'current-operation',
      'current-value',
      'accumulated-value',
      'operation-was-performed',
      'next-operation',
      'var-test'
    ]
    const body = document.body
    var divMaster = document.createElement('div')
    divMaster.setAttribute('height', '300px')

    body.appendChild(divMaster)
    arrayIds.forEach(id => {
      var div = document.createElement('div')
      var b = document.createElement('b')
      var text = document.createTextNode(`${id}: `)
      var p = document.createElement('p')
      
      p.setAttribute('id', id)
      b.append(text)
      div.appendChild(b)
      div.appendChild(p)

      divMaster.appendChild(div)
    })

    testMode = true
  }

  function showTest () {
    if (testMode == true) {
      document.getElementById('element-output').innerText = elementOutput.value
      document.getElementById('current-operation').innerText = currentOperation
      document.getElementById('current-value').innerText = currentValue
      document.getElementById('accumulated-value').innerText = accumulatedValue
      document.getElementById('operation-was-performed').innerText = operationWasPerformed
      document.getElementById('next-operation').innerText = nextOperation
      document.getElementById('var-test').innerText = varTest
    }
  }
  test()

})