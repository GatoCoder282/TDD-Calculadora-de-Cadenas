function calculadora_de_cadenas(cadena) {
    if (cadena === '') {
        return 0;
    }

    const escapeRegExp = (valor) => valor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const separadores = [',', '-'];
    let contenido = cadena;

    const encabezado = cadena.match(/^\/\/((?:\[[^\]]+\])+)[ ]*(.*)$/);

    if (encabezado) {
        const delimitadoresPersonalizados = [...encabezado[1].matchAll(/\[([^\]]+)\]/g)].map((coincidencia) => coincidencia[1]);
        separadores.push(...delimitadoresPersonalizados);
        contenido = encabezado[2];
    }

    const patronSeparadores = new RegExp(separadores.map(escapeRegExp).join('|'));
    const partes = contenido.split(patronSeparadores).filter((parte) => parte !== '');

    if (!encabezado && partes.length === 1 && /^[\d\s]+$/.test(contenido)) {
        return (contenido.match(/\d/g) || []).reduce((resultado, digito) => resultado + Number(digito), 0);
    }

    return partes
        .reduce((resultado, numero) => {
            const valor = Number(numero.trim());

            if (Number.isNaN(valor) || valor > 1000) {
                return resultado;
            }

            return resultado + valor;
        }, 0);
}

export default calculadora_de_cadenas;