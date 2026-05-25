function calculadora_de_cadenas(cadena, separador) {
    if (cadena === '') {
        return 0;
    }

    const separadores = [',', '-'];

    if (separador) {
        separadores.push(separador);
    }

    const patronSeparadores = new RegExp(separadores.map((valor) => valor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'));
    const numeros = cadena.split(patronSeparadores);
    let resultado = 0;

    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros[i].length; j++) {
            resultado += Number(numeros[i][j]);
        }
    }

    return resultado;
}

export default calculadora_de_cadenas;