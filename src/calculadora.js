function calculadora_de_cadenas(cadena, separador) {
    let resultado = 0;
    const numeros = cadena.split(separador);

    for (let i = 0; i < numeros.length; i++) {
        resultado += Number(numeros[i]);
    }

    return resultado;
}

export default calculadora_de_cadenas;