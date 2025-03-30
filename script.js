function insert(value) {
    var result = document.getElementById('result');
    result.innerHTML += value; // Adiciona o valor ao visor
}

function clean() {
    document.getElementById('result').innerHTML = ''; // Limpa o visor
}

function calcular() {
    var resultado = document.getElementById('result').innerHTML;
    if (resultado) {
        try {
            // Substitui 'x' por '*' para multiplicação
            resultado = resultado.replace('x', '*');
            // Substitui vírgula por ponto
            resultado = resultado.replace(',', '.');
            // Avalia a expressão e mostra o resultado
            document.getElementById('result').innerHTML = eval(resultado);
        } catch (e) {
            // Caso haja erro, exibe "Erro"
            document.getElementById('result').innerHTML = "Erro";
            alert ('Error')
            clean()
        }
    } else {
        // Caso o visor esteja vazio, exibe "NaN"
        document.getElementById('result').innerHTML = "NaN";
    }
}