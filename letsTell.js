function contar() {
    let dig1 = document.querySelector('input#dig1')
    let inicio = Number(dig1.value)
    let dig2 = document.querySelector('input#dig2')
    let fim = Number(dig2.value)
    let dig3 = document.querySelector('input#dig3')
    let passo = Number(dig3.value)
    let res = document.querySelector('div#res')
    if (dig1.value.length == 0 || dig2.value.length == 0 || dig3.value.length == 0){
        res.innerHTML = 'Fill in all fields!'
    } 
    else if (passo <= 0){
        res.innerHTML = 'Step must be greater than zero!'
    } else{
        res.innerHTML = 'Counting...<br>'
        if (inicio < fim){
            for(let c = inicio; c <= fim; c += passo){
                res.innerHTML += ` \u{1F449}${c}`
            }
        } else {
            for(let c = inicio; c >= fim; c -= passo){
                res.innerHTML += ` \u{1F449}${c}`
            }
        } res.innerHTML += ` \u{1F3F4}` 
    }
} 


