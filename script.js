function menu() {
  let opcao = prompt("Escolha uma opção: \n 1 - Área do Triângulo \n 2 - Área do Círculo \n 3 - Área do Quadrado \n 4 - Área do Retângulo \n 5 - Sair");

  switch(opcao) {
    case '1':
      let baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"));
      let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"));
      alert("A área do triângulo é: " + areaTriangulo(baseTriangulo, alturaTriangulo));
      break;
    case '2':
      let raio = parseFloat(prompt("Digite o raio do círculo:"));
      alert("A área do círculo é: " + areaCirculo(raio));
      break;
    case '3':
      let ladoQuadrado = parseFloat(prompt("Digite o lado do quadrado:"));
      alert("A área do quadrado é: " + areaQuadrado(ladoQuadrado));
      break;
    case '4':
      let baseRetangulo = parseFloat(prompt("Digite a base do retângulo:"));
      let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo:"));
      alert("A área do retângulo é: " + areaRetangulo(baseRetangulo, alturaRetangulo));
      break;
    case '5':
      sair();
      break;
    default:
      alert("Opção inválida!");
      break;
  }
}

function areaTriangulo(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

function areaCirculo(raio) {
  let area = 3.14 * (raio * raio);
  return area;
}

function areaQuadrado(lado) {
  let area = lado * lado;
  return area;
}

function areaRetangulo(base, altura) {
  let area = base * altura;
  return area;
}

function sair() {
  console.log("Saindo...");
  alert("Saindo...");
}


menu();
