function menu() {
  let option = prompt("Escolha uma opção: \n 1 - Área do Triângulo \n 2 - Área do Círculo \n 3 - Área do Quadrado \n 4 - Área do Retângulo \n 5 - Sair")

  switch(option) {
    case '1':
      let baseTriangle = parseFloat(prompt("Digite a base do triângulo:"))
      let heightTriangle = parseFloat(prompt("Digite a altura do triângulo:"))
      alert("A área do triângulo é: " + areaTriangle(baseTriangle, heightTriangle))
      break
    case '2':
      let radius = parseFloat(prompt("Digite o raio do círculo:"))
      alert("A área do círculo é: " + areaCircle(radius))
      break
    case '3':
      let sideSquare = parseFloat(prompt("Digite o lado do quadrado:"))
      alert("A área do quadrado é: " + areaSquare(sideSquare))
      break
    case '4':
      let baseRectangle = parseFloat(prompt("Digite a base do retângulo:"))
      let heightRectangle = parseFloat(prompt("Digite a altura do retângulo:"))
      alert("A área do retângulo é: " + areaRectangle(baseRectangle, heightRectangle))
      break
    case '5':
      exit()
      break
    default:
      alert("Opção inválida!")
      break
  }
}

function areaTriangle(base, height) {
  let area = (base * height) / 2
  return area
}

function areaCircle(radius) {
  let area = 3.14 * (radius * radius)
  return area
}

function areaSquare(side) {
  let area = side * side
  return area
}

function areaRectangle(base, height) {
  let area = base * height
  return area
}

function exit() {
  console.log("Saindo...")
  alert("Saindo...")
}

menu()
