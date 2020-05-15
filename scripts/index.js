document.addEventListener('DOMContentLoaded', function () {
  var output = document.getElementById('result')
  var currentValue = null
  var currentOperation = null

  document.getElementById('zero').addEventListener('click', () => { addNumber('0') })
  document.getElementById('one').addEventListener('click', () => { addNumber('1') })
  document.getElementById('two').addEventListener('click', () => { addNumber('2') })
  document.getElementById('three').addEventListener('click', () => { addNumber('3') })
  document.getElementById('four').addEventListener('click', () => { addNumber('4') })
  document.getElementById('five').addEventListener('click', () => { addNumber('5') })
  document.getElementById('six').addEventListener('click', () => { addNumber('6') })
  document.getElementById('seven').addEventListener('click', () => { addNumber('7') })
  document.getElementById('eight').addEventListener('click', () => { addNumber('8') })
  document.getElementById('nine').addEventListener('click', () => { addNumber('9') })

  document.getElementById('clear').addEventListener('click', () => { clearAll() })
  document.getElementById('porcent').addEventListener('click', () => { generatePorcent() })
  document.getElementById('delete').addEventListener('click', () => { deleteLastNumber() })
  document.getElementById('inverse-sign').addEventListener('click', () => { generateInverseValue() })
  document.getElementById('dot').addEventListener('click', () => { addNumber('.') })

  document.getElementById('division').addEventListener('click', () => { initialOperation('division') })
  document.getElementById('multiplication').addEventListener('click', () => { initialOperation('multiplication') })
  document.getElementById('subtraction').addEventListener('click', () => { initialOperation('subtraction') })
  document.getElementById('sum').addEventListener('click', () => { initialOperation('sum') })
  document.getElementById('equal').addEventListener('click', () => { initialOperation('equal') })

  function addNumber (value) {
    if (value == '.' && output.value.includes('.')) {
      return
    } else {
      output.value += value
    }
  }

  function deleteLastNumber () {
    output.value = output.value.substring(0, (output.value.length - 1))
  }

  function clearAll () {
    output.value = null
    currentValue = null
    currentValue = null
  }

  function generatePorcent () {
    output.value /= 100
  }

  function generateInverseValue () {
    output.value *= -1
  }

  function initialOperation (operation) {
    if (currentOperation == null) {
      currentOperation = operation
      currentValue = output.value
      output.value = null
    } else {
      switch (currentOperation) {
        case 'division':
          applyDivision()
          break
        case 'multiplication':
          // chama a funçao
          break
        case 'subtration':
          //chama a função
          break
        case 'sum':
          //chama a função
          break
        case 'equal':
          //apresenta resultado
          break
        default:
          // Erro
          break 
      }
      currentOperation = operation
    }
  }

  function transformNumber (string) {
    return parseFloat(string)
  }

  function transformString (number) {
    return number.toString()
  }

  function applyDivision () {
    output.value = currentValue/output.value
    // verificar continuação da operação
  }
})