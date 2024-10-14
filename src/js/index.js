// // const listaSelecaoReconhecimento = document.querySelectorAll(".esquadrao-reconhecimento");

// // listaSelecaoReconhecimento.forEach(reconhecimento => {
// //     reconhecimento.addEventListener("click", () => {
// //         esconderCartaoReconhecimento();

// //         const idReconhecimentoSelecionado = mostrarCartaoReconhecimentoSelecionado(reconhecimento);

// //         desativarReconhecimentoNaListagem();

// //         ativarReconhecimentoSelecionadoNaListagem(idReconhecimentoSelecionado);
// //     })
// // })

// // function ativarReconhecimentoSelecionadoNaListagem(idReconhecimentoSelecionado) {
// //     const reconhecimentoSelecionadoNaListagem = document.getElementById(idReconhecimentoSelecionado);
// //     reconhecimentoSelecionadoNaListagem.classList.add("aberto");
// // }

// // function desativarReconhecimentoNaListagem() {
// //     const reconhecimentoAtivoNaListagem = document.querySelector(".ativo");
// //     reconhecimentoAtivoNaListagem.classList.remove("ativo");
// // }

// // function mostrarCartaoReconhecimentoSelecionado(reconhecimento) {
// //     const idReconhecimentoSelecionado = reconhecimento.attributes.id.value;
// //     const idDoCartaoReconhecimentoParaAbrir = "cartao-" + idReconhecimentoSelecionado;
// //     const cartaoReconhecimentoParaAbrir = document.getElementById(idDoCartaoReconhecimentoParaAbrir);
// //     cartaoReconhecimentoParaAbrir.classList.add("aberto");
// //     return idReconhecimentoSelecionado;
// // }

// // function esconderCartaoReconhecimento() {
// //     const cartaoReconhecimentoAberto = document.querySelector(".aberto");
// //     cartaoReconhecimentoAberto.classList.remove("aberto");
// // }
// const listaSelecaoReconhecimento = document.querySelectorAll(".esquadrao-reconhecimento");

// listaSelecaoReconhecimento.forEach(reconhecimento => {
//     reconhecimento.addEventListener("click", () => {
//         const idReconhecimentoSelecionado = mostrarCartaoReconhecimentoSelecionado(reconhecimento); // Mostra o cartão selecionado

//         desativarReconhecimentoNaListagem(); // Desativa o reconhecimento na listagem

//         esconderCartaoReconhecimento(); // Esconde o cartão aberto, se houver

//         ativarReconhecimentoSelecionadoNaListagem(idReconhecimentoSelecionado); // Ativa o reconhecimento na listagem
//     });
// });

// function ativarReconhecimentoSelecionadoNaListagem(idReconhecimentoSelecionado) {
//     const reconhecimentoSelecionadoNaListagem = document.getElementById(idReconhecimentoSelecionado);
//     if (reconhecimentoSelecionadoNaListagem) { // Verificação
//         reconhecimentoSelecionadoNaListagem.classList.add("aberto");
//     }
// }

// function desativarReconhecimentoNaListagem() {
//     const reconhecimentoAtivoNaListagem = document.querySelector(".aberto");
//     if (reconhecimentoAtivoNaListagem) { // Verificação
//         reconhecimentoAtivoNaListagem.classList.remove("aberto");
//     }
// }

// function mostrarCartaoReconhecimentoSelecionado(reconhecimento) {
//     const idReconhecimentoSelecionado = reconhecimento.attributes.id.value;
//     const idDoCartaoReconhecimentoParaAbrir = "cartao-" + idReconhecimentoSelecionado;
//     const cartaoReconhecimentoParaAbrir = document.getElementById(idDoCartaoReconhecimentoParaAbrir);
//     if (cartaoReconhecimentoParaAbrir) { // Verificação
//         cartaoReconhecimentoParaAbrir.classList.add("aberto");
//     }
//     return idReconhecimentoSelecionado;
// }

// function esconderCartaoReconhecimento() {
//     const cartaoReconhecimentoAberto = document.querySelector(".aberto");
//     if (cartaoReconhecimentoAberto) { // Verificação
//         cartaoReconhecimentoAberto.classList.remove("aberto");
//     }
// }

const reconhecimentos = document.querySelectorAll('.reconhecimento');
const cartoes = document.querySelectorAll('.cartao-reconhecimento');

reconhecimentos.forEach(reconhecimento => {
    reconhecimento.addEventListener('click', () => {
        // Remover a classe 'aberto' de todos os cartões
        cartoes.forEach(cartao => {
            cartao.classList.remove('aberto');
        });

        // Adicionar a classe 'aberto' ao cartão correspondente
        const id = reconhecimento.id;
        const cartao = document.getElementById(`cartao-${id}`);
        cartao.classList.add('aberto');

        // Remover a classe 'ativo' de todos os reconhecimentos
        reconhecimentos.forEach(rec => {
            rec.classList.remove('ativo');
        });

        // Adicionar a classe 'ativo' ao reconhecimento clicado
        reconhecimento.classList.add('ativo');
    });
});
