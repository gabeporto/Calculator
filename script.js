const result = document.querySelector(".result");
const enter = document.querySelector(".Equal");


function backspace() {
    if(result.textContent){
        let x = document.getElementById("resultado").innerHTML
        result.innerHTML = x.substring(0, x.length-1)
    }
}

function insert(valor) {
    result.innerHTML += valor;
}

function clean() {
    result.innerHTML = "";
    
}


function confirm() {
    if(result.textContent != "Erro") {
        document.getElementById("resultado").innerHTML = eval(result.innerHTML)
    }
    
}