const setaVoltar = document.getElementById('setaVoltar');
const setaAvancar = document.getElementById('setaAvancar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecinado = document.querySelector('.selecionado');
    cartaoSelecinado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');
}

setaAvancar.addEventListener('click', function () {
   
    esconderCartaoSelecionado();
    cartaoAtual++;
    if (cartaoAtual >= cartoes.length) {
        cartaoAtual=0
    }
    mostrarCartao(cartaoAtual);
})

setaVoltar.addEventListener('click', function () {
    if (cartaoAtual===0) {
        cartaoAtual=cartoes.length
    }
    esconderCartaoSelecionado(); 
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})

