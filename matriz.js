function calcularTraco(matriz) {
    let traco = 0

    for (let i = 0; i < matriz.lenth; i++) {
        traco += matriz[i][i];
    }
    return traco;
}
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const traco = calcularTraco(matriz);
console.log("O traço da Matriz é:",traco);