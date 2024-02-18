preco1 = 50;
preco2 = 30;
preco3 = 35;

function quantidade(){
    var quantidade = document.getElementById("quantidade").value;
    if (document.URL.includes("evento1.html")){
        valorfinal = preco1*quantidade
    }
    if (document.URL.includes("evento2.html")){
        valorfinal = preco2*quantidade
    }
    if (document.URL.includes("evento3.html")){
        valorfinal = preco3*quantidade
    }
    document.getElementById("preco").innerHTML = `${valorfinal}`
    document.getElementById("precocanvas").innerHTML = `${valorfinal}`
    return valorfinal
}

var valorfinal

function comprar(){
    redirect
}
