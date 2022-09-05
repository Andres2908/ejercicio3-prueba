const operations = async (body) => {
    // const numero = validarNumero(body.numero, 'numero', true, null, false);
    const numero = body.numero
    const operation = {
        0: numero + 1,
        1: numero - 2,
        2: numero / 3,
        3: 0
    }

    let countColor = ""
    const color = {
        0: "red",
        1: "green",
        2: "blue"
    }
    if(body.tipo === 2) countColor = numero % 3

    return {count: operation[body.tipo], countColor: color[countColor] }
};
module.exports = operations;