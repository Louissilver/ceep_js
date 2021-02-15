const BotaoConcluir = () => {
    const botaoConcluir = document.createElement('button');
    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerText = 'Concluir';
    botaoConcluir.addEventListener('click', (event) => {
        event.preventDefault();
        concluirTarefa(event);
    })
    return botaoConcluir;
}

const concluirTarefa = (event) => {
    const botaoConcluir = event.target;

    const tarefaCompleta = botaoConcluir.parentElement;
    tarefaCompleta.classList.toggle('done');
}

export default BotaoConcluir;