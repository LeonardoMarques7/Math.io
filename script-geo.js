// Função para calcular a área do paralelograma
function calcularParalelograma(base, altura) {
    return base * altura;
}

// Função para calcular a área do retângulo
function calcularRetangulo(base, altura) {
    return base * altura;
}

// Função para calcular a área do trapézio
function calcularTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2;
}

// Função para calcular a área do triângulo
function calcularTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Função para calcular a área do losango
function calcularLosango(diagonalMaior, diagonalMenor) {
    return (diagonalMaior * diagonalMenor) / 2;
}

// Função para calcular a área da coroa circular
function calcularCoroa(raioExterno, raioInterno) {
    return Math.PI * (Math.pow(raioExterno, 2) - Math.pow(raioInterno, 2));
}

// Função principal para calcular a área com base na forma selecionada
// Função principal para calcular a área com base na forma selecionada
function calcularArea() {
    var selectElement = document.getElementById("forma");
    var formaSelecionada = selectElement.value;

    var resultado = "";
    var explicacao = ""; // Variável para armazenar a explicação da conta

    switch (formaSelecionada) {
        case "paralelograma":
            var baseParalelograma = parseFloat(
                document.getElementById("base").value
            );
            var alturaParalelograma = parseFloat(
                document.getElementById("altura").value
            );
            resultado = calcularParalelograma(
                baseParalelograma,
                alturaParalelograma
            );
            explicacao = `Área do Paralelograma = Base x Altura = ${baseParalelograma} x ${alturaParalelograma} = ${resultado}`;
            break;
        case "retangulo":
            var baseRetangulo = parseFloat(
                document.getElementById("base").value
            );
            var alturaRetangulo = parseFloat(
                document.getElementById("altura").value
            );
            resultado = calcularRetangulo(baseRetangulo, alturaRetangulo);
            explicacao = `Área do Retângulo = Base x Altura = ${baseRetangulo} x ${alturaRetangulo} = ${resultado}`;
            break;
        case "trapezio":
            var baseMaiorTrapezio = parseFloat(
                document.getElementById("base").value
            );
            var baseMenorTrapezio = parseFloat(
                document.getElementById("lado1").value
            );
            var alturaTrapezio = parseFloat(
                document.getElementById("lado2").value
            );
            resultado = calcularTrapezio(
                baseMaiorTrapezio,
                baseMenorTrapezio,
                alturaTrapezio
            );
            explicacao = `Área do Trapézio = ((Base Maior + Base Menor) x Altura) / 2 = ((${baseMaiorTrapezio} + ${baseMenorTrapezio}) x ${alturaTrapezio}) / 2 = ${resultado}`;
            break;
        case "triangulo":
            var baseTriangulo = parseFloat(
                document.getElementById("base").value
            );
            var alturaTriangulo = parseFloat(
                document.getElementById("altura").value
            );
            resultado = calcularTriangulo(baseTriangulo, alturaTriangulo);
            explicacao = `Área do Triângulo = (Base x Altura) / 2 = (${baseTriangulo} x ${alturaTriangulo}) / 2 = ${resultado}`;
            break;
        case "losango":
            var diagonalMaiorLosango = parseFloat(
                document.getElementById("base").value
            );
            var diagonalMenorLosango = parseFloat(
                document.getElementById("lado1").value
            );
            resultado = calcularLosango(
                diagonalMaiorLosango,
                diagonalMenorLosango
            );
            explicacao = `Área do Losango = (Diagonal Maior x Diagonal Menor) / 2 = (${diagonalMaiorLosango} x ${diagonalMenorLosango}) / 2 = ${resultado}`;
            break;
        case "coroa":
            var raioExternoCoroa = parseFloat(
                document.getElementById("base").value
            );
            var raioInternoCoroa = parseFloat(
                document.getElementById("lado1").value
            );
            resultado = calcularCoroa(raioExternoCoroa, raioInternoCoroa);
            explicacao = `Área da Coroa Circular = π x (Raio Externo² - Raio Interno²) = π x (${raioExternoCoroa}² - ${raioInternoCoroa}²) = ${resultado}`;
            break;
        default:
            resultado = "Escolha uma forma válida.";
    }

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Área: ${resultado}`;

    var explicacaoElement = document.getElementById("explicacao");
    explicacaoElement.textContent = explicacao; // Exibe a explicação da conta
}
