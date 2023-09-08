function tipoDeOperacao() {
    var selectElement = document.getElementById("operacao");
    var operacaoSelecionada = selectElement.value;

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    var resultado = "";
    var resultadoElement = document.getElementById("resultado");

    switch (operacaoSelecionada) {
        case "adicao":
            resultado = num1 + num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            break;
        case "divisao":
            resultado = num1 / num2;
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            break;
        case "potenciacao":
            resultado = Math.pow(num1, num2);
            break;
        case "equacao":
            if (num1 === 0) {
                resultado = "O coeficiente 'a' não pode ser zero.";
            } else {
                resultado = "Solução da equação: x = " + -num2 / num1;
            }
            break;
        case "inequacao":
            if (num1 === 0) {
                resultado = "O coeficiente 'a' não pode ser zero.";
            } else {
                resultado =
                    num1 * (-num2 / num1) < 0
                        ? "A inequação é verdadeira."
                        : "A inequação é falsa.";
            }
            break;
        case "equacao2":
            if (num1 === 0) {
                resultado = "O coeficiente 'a' não pode ser zero.";
            } else {
                var delta = Math.pow(num2, 2) - 4 * num1 * num3;
                if (delta > 0) {
                    var raiz1 = (-num2 + Math.sqrt(delta)) / (2 * num1);
                    var raiz2 = (-num2 - Math.sqrt(delta)) / (2 * num1);
                    resultado =
                        "Raízes reais: x1 = " +
                        raiz1 +
                        ", x2 = " +
                        raiz2 +
                        "Delta (Δ) = " +
                        delta;
                } else if (delta === 0) {
                    var raiz = -num2 / (2 * num1);
                    resultado =
                        "Raiz real única: x = " + raiz + "Delta (Δ) = " + delta;
                } else {
                    resultado = "Sem raízes reais.<br>Delta (Δ) = " + delta;
                }
            }
            break;
        case "inequacao2":
            if (num1 === 0) {
                resultado = "O coeficiente 'a' não pode ser zero.";
            } else {
                var discriminante = num2 * num2 - 4 * num1 * num3;
                if (discriminante > 0) {
                    var raiz1 = (-num2 + Math.sqrt(discriminante)) / (2 * num1);
                    var raiz2 = (-num2 - Math.sqrt(discriminante)) / (2 * num1);
                    resultado =
                        "Raízes reais: x1 = " + raiz1 + ", x2 = " + raiz2;
                    resultado +=
                        num1 > 0
                            ? " (inequação satisfeita quando x está entre as raízes)"
                            : " (inequação satisfeita quando x está fora das raízes)";
                } else if (discriminante === 0) {
                    var raiz = -num2 / (2 * num1);
                    resultado = "Raiz real única: x = " + raiz;
                    resultado +=
                        num1 > 0
                            ? " (inequação satisfeita quando x é igual à raiz)"
                            : " (inequação não satisfeita para nenhum valor real de x)";
                } else {
                    resultado = "Sem raízes reais.";
                    resultado +=
                        num1 > 0
                            ? " (inequação não satisfeita para nenhum valor real de x)"
                            : " (inequação satisfeita para todos os valores reais de x)";
                }
            }
            break;
        default:
            resultado = "Escolha uma operação válida.";
    }
    resultadoElement.textContent = "Resultado da operação: " + resultado;
}

function mostrarTerceiroValor() {
    var selectElement = document.getElementById("operacao");
    var terceiroValorLabel = document.getElementById("terceiroValorLabel");
    var num3Input = document.getElementById("num3");

    if (
        selectElement.value === "equacao2" ||
        selectElement.value === "inequacao2"
    ) {
        terceiroValorLabel.style.display = "inline"; // Mostra a label
        num3Input.style.display = "inline"; // Mostra o input
        num3Input.disabled = false; // Habilita o input
    } else {
        terceiroValorLabel.style.display = "none"; // Oculta a label
        num3Input.style.display = "none"; // Oculta o input
        num3Input.disabled = true; // Desabilita o input
    }
}

// Chame a função mostrarTerceiroValor() para configurar o estado inicial
mostrarTerceiroValor();
