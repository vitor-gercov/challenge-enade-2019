function verificarParametros(limiteInferior, limiteSuperior) {

    if (typeof limiteInferior !== 'number' || typeof limiteSuperior !== 'number') {
        throw Error('Erro: Parâmetros passados não são números')
    }

    const m = Number(limiteInferior)
    const n = Number(limiteSuperior)
    
    if (m >= n) {
        throw Error('Erro: Limite inferior maior do que limite superior.')
    }
    
    if (m <= 0) {
        throw Error('Erro: Limite inferior menor ou igual a zero.')
    }
}

function iterativa(limiteInferior, limiteSuperior) {
   
    verificarParametros(limiteInferior, limiteSuperior)

    let x = 1

    for (let i = limiteInferior; i <= limiteSuperior; i++) {
        x = x * (i + (1 / i))
    }

    return x
}

function recursiva(limiteInferior, limiteSuperior, valorAtual = 1) {
    
    verificarParametros(limiteInferior, limiteSuperior)

    let valor = valorAtual
    valor = valor * (limiteInferior + (1 / limiteInferior))

    if (limiteInferior === limiteSuperior) {
        return valor
    }

    return recursiva(++limiteInferior, limiteSuperior, valor)
}

console.log(iterativa(1, 5))
console.log(recursiva(1, 5))