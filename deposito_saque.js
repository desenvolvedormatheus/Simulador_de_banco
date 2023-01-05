function depositar(){
    const olho = document.querySelector('#olho');
    valor = Number(document.querySelector('#input_depositar').value);
    saldo += valor;
    if(olho.classList[0] != 'bi-eye-slash'){
        atualizar_saldo();
    }
}
function sacar(){
    if(senha != '0000000' && senha != ''){
        let senha_confirmada = window.prompt('Confirme a senha da conta!')
        if(validarsenha(senha_confirmada) == true){
            const olho = document.querySelector('#olho');
            const valor = Number(document.querySelector('#input_sacar').value);
            let negativo = saldo - valor;
            if(negativo >= 0){
                saldo -= valor;
                alert('Saque efetuado!')
                if(olho.classList[0] != 'bi-eye-slash'){
                    atualizar_saldo();
                }
            } else {
                alert('Não pode sacar saldo negativo!');
            }
        }
    } else {
        alert('Senha para saque não cadastrada!')
    }
}
