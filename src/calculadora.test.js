import calculadora_de_cadenas from './calculadora';

test('Calculadora de cadenas: "" debe ser igual a 0', () => {
    expect(calculadora_de_cadenas("")).toBe(0);
});

test('Calculadora de cadenas: "2" debe ser igual a 2', () => {
    expect(calculadora_de_cadenas("2")).toBe(2);
});

test('Calculadora de cadenas: "123" debe ser igual a 6', () => {
    expect(calculadora_de_cadenas("123")).toBe(6);
});

test('Calculadora de cadenas: "1 2 3" debe ser igual a 6', () => {
    expect(calculadora_de_cadenas("1 2 3")).toBe(6);
});

test('Calculadora de cadenas: "12 3" debe ser igual a 6', () => {
    expect(calculadora_de_cadenas("12 3")).toBe(6);
});

test('Calculadora de cadenas: "1,2,3" debe ser igual a 6', () => {
    expect(calculadora_de_cadenas("//[,] 1,2,3")).toBe(6);
});

test('Calculadora de cadenas: "1-2,3" debe ser igual a 6', () => {
    expect(calculadora_de_cadenas("//[-] 1-2,3")).toBe(6);
});

test('Calculadora de cadenas: "4,5-6" debe ser igual a 15', () => {
    expect(calculadora_de_cadenas("4,5-6")).toBe(15);
});

test('Calculadora de cadenas: "7;8;9" debe ser igual a 24', () => {
    expect(calculadora_de_cadenas("//[;] 7;8;9")).toBe(24);
});

test('Calculadora de cadenas: "10-11,12;13" debe ser igual a 46', () => {
    expect(calculadora_de_cadenas("//[;] 10-11,12;13")).toBe(46);
});