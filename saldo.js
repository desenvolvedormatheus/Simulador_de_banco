let saldo = 0

function olho(){
    const olho = document.querySelector('#olho');
    let asteriscos = document.querySelector('#saldo');
    
    if(olho.classList[0] == 'bi-eye-slash'){
        olho.removeAttribute('class');
        olho.setAttribute('class', 'bi-eye');
        asteriscos.innerHTML = saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    } else {
        olho.removeAttribute('class');
        olho.setAttribute('class', 'bi-eye-slash');
        asteriscos.innerHTML = 'R$ ****'
    }
}

function atualizar_saldo(){
    let asteriscos = document.querySelector('#saldo');
    asteriscos.innerHTML = saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
}