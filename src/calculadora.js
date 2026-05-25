function calculadora_de_cadenas(cadena) {
    let resultado = 0;

    for (let indice = 0; indice < cadena.length ; indice += 1) {
        resultado += Number(cadena[indice]);
    }

    return resultado;
}

export default calculadora_de_cadenas;