function calcularMedia() {
  var soma = 0;
  for (var i = 1; i <= 5; i++) {
    var input = document.getElementById("calc" + i).value;
    soma += parseFloat(input);
  }

  var media = soma / 5;

  var resultado = "A sua média do ENEM é: " + media;
  document.getElementById("resultado").textContent = resultado;
}
