let senha = '0000000'
let nome = 'index_usuario'

function editar_conta(){
    if(nome == 'index_usuario'){
        nome = window.prompt('Qual o seu nome?');
    } else{
        let pergunta_nome = window.prompt('Quer editar o nome?\n[s] [n]');
        if(pergunta_nome == 's'){
            nome_aux = window.prompt('Novo nome');
            if(nome_aux == '' || nome_aux == nome){
                alert('Nome não alterado.')
            } else{
                nome = nome_aux
                alert('Nome alterado')
            }
        } else{
            alert('Nome não foi alterado');
        }
    }
    
    if(senha.length < 6){
        let pergunta_senha = window.prompt('Quer editar a senha?\n[s] [n]');
    
        if(pergunta_senha == 's'){
            senha = window.prompt('Crie uma senha para saque\nMaximo de caracteres 6');
            alert('Senha atualizada!')
        } else {
            alert('A senha não foi alterada.')
        }
    }

    while(senha.length > 6 || senha == ''){
        senha = window.prompt('Crie uma senha para saque\nMaximo de caracteres 6');
    }

    
    let usuario = document.querySelector('#nome_usuario');
    usuario.innerHTML = `Olá, ${nome}`;
}