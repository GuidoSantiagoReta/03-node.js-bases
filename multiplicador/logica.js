

const logica = (base) =>{
    let resultado= '';


    for (let i = 1; i <= 10; i++) {
        resultado = resultado + `${base} * ${i} = ${base * i}\n`
        
    }

    return resultado;
}

module.exports ={
    logica
}
