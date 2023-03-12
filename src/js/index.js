// passo 1 - dar um jeito de pegar o elemento HTML dos botoões
// passo 2 - dar um jeito de identificar o clique do usuário no botão
// passo 3 - desmarcar o botão selecionado anterior 
// passo 4 - marcar o botão clicado como se estivesse selecionado
// passo 5 - esconder a imagem ativa de fundo anterior
// passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado


// passo 1 - dar um jeito de pegar o elemento HTML dos botoões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        console.log(indice);
        
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();
 
        mostrarImagemDeFundo(indice);
    })    
})
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

