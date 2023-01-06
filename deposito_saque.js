function depositar(){
    const olho = document.querySelector('#olho');
    valor = Number(document.querySelector('#input_depositar').value);
    if(valor <= 0 ){
        alert('Deposito não pode ser negativo!')
    } else{
        saldo += valor;
        alert('Deposito efetuado!')
        if(olho.classList[0] != 'bi-eye-slash'){
            atualizar_saldo();
        }
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
        alert('Senha para saque não cadastrada!\nVá até o icone ao lado do (Usuario) para cadastrar.')
    }
}
