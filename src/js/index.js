// PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de personagem
const listaSelelcaoPersonagem = document.querySelectorAll(".pixel");

//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelelcaoPersonagem.forEach(personagem => {
    personagem.addEventListener("click", () => {
        // PASSO 3 - remover a classe aberto só do cartão que tá aberto
        esconderCartao();

        //PASSO 4 - ao clicar em um personagem da lista pegamos o id desse personagem pra saber qual cartão abrir
        const idPersonagemSelecionado = mostrarCartao(personagem);

        //PASSO 5 - remover a classe ativo que marca o personagem selecionado na listagem
        desativarCartaoNaListagem();

        //PASSO 6 - adicinar a classe ativo no personagem selecionado na listagem

        ativarCartaoNaListagem(idPersonagemSelecionado);



    })



})

function ativarCartaoNaListagem(idPersonagemSelecionado) {
    const listagemSelecionada = document.getElementById(idPersonagemSelecionado);
    listagemSelecionada.classList.add("ativo");
}

function desativarCartaoNaListagem() {
    const listagemAtiva = document.querySelector(".ativo");
    listagemAtiva.classList.remove("ativo");
}

function mostrarCartao(personagem) {
    const idPersonagemSelecionado = personagem.attributes.id.value;

    const idCartaoParaAbrir = "cartao-" + idPersonagemSelecionado;
    const cartaoParaAbrir = document.getElementById(idCartaoParaAbrir);
    cartaoParaAbrir.classList.add("aberto");
    return idPersonagemSelecionado;
}

function esconderCartao() {
    const cartaoAberto = document.querySelector(".aberto");
    cartaoAberto.classList.remove("aberto");
}
