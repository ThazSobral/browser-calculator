document.addEventListener('DOMContentLoaded', function () {
  var output = document.getElementById('result')
  var currentValue = null

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
  document.getElementById('porcent').addEventListener('click', () => { /*função de transformar o valor em porcentagem*/ })
  document.getElementById('delete').addEventListener('click', () => { deleteLastNumber() })
  document.getElementById('inverse-sign').addEventListener('click', () => { /*função de inverter o sinal*/ })
  document.getElementById('dot').addEventListener('click', () => { addNumber('.') })

  document.getElementById('division').addEventListener('click', () => { /*função de divisão*/ })
  document.getElementById('multiplication').addEventListener('click', () => { /*função de multiplicação*/ })
  document.getElementById('subtraction').addEventListener('click', () => { /*função de subtração*/ })
  document.getElementById('sum').addEventListener('click', () => { /*função de soma*/ })
  document.getElementById('equal').addEventListener('click', () => { /*função de apresentar valor final*/ })

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
  }

  function transformNumber (string) {
    return parseFloat(string)
  }

  function transformString (number) {
    return number.toString()
  }
  
})