function mandarpix(){
    if(senha != '0000000' && senha != ''){
        const codigopix = document.querySelector('#input_codigopix').value;
        if(codigopix == ''){
            alert('Codigo pix não pode estar vazio!');
        } else{
            let senha_confirmada = window.prompt('Confirme a senha da conta!')
            if(validarsenha(senha_confirmada) == true){
                const olho = document.querySelector('#olho');
                const valor = Number(document.querySelector('#input_valorpix').value);
                let negativo = saldo - valor;
                if(negativo >= 0){
                    saldo -= valor;
                    alert('Pix Enviado!')
                    if(olho.classList[0] != 'bi-eye-slash'){
                        atualizar_saldo();
                    }
                } else {
                    alert('Não pode sacar saldo negativo!');
                }
            }
        }
    } else {
        alert('Senha para saque não cadastrada!')
    }
}