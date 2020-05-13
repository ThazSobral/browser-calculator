document.addEventListener('DOMContentLoaded', function () {
  var result = []

  document.getElementById('zero').addEventListener('click', () => { addNumber(0)})
  document.getElementById('one').addEventListener('click', () => { addNumber(1)})
  document.getElementById('two').addEventListener('click', () => { addNumber(2)})
  document.getElementById('three').addEventListener('click', () => { addNumber(3)})
  document.getElementById('four').addEventListener('click', () => { addNumber(4)})
  document.getElementById('five').addEventListener('click', () => { addNumber(5)})
  document.getElementById('six').addEventListener('click', () => { addNumber(6)})
  document.getElementById('seven').addEventListener('click', () => { addNumber(7)})
  document.getElementById('eight').addEventListener('click', () => { addNumber(8)})
  document.getElementById('nine').addEventListener('click', () => { addNumber(9)})
  document.getElementById('clear').addEventListener('click', () => { clearNumer()})
  document.getElementById('delete').addEventListener('click', () => { deleteNumber()})

  // terminar os botões
  //refatorar

  function addNumber (number) {
    result.push(number)
    showNumber(result)
  }

  function clearNumer () {
    result = []
    showNumber(result)
  }

  function deleteNumber () {
    result.pop()
    showNumber(result)
  }

  function showNumber (newNumber) {
    document.getElementById('result').value = result.join('')
  }
})