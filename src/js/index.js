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
