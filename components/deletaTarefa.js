const BotaoDeletar = () => {
    const botaoDeletar = document.createElement('button');
    botaoDeletar.classList.add('delete-button');
    botaoDeletar.innerText = 'Deletar';
    botaoDeletar.addEventListener('click', (event) => {
        event.preventDefault();
        deletarTarefa(event);
    })
    return botaoDeletar;
}

const deletarTarefa = (event) => {
    const botaoDeletar = event.target;

    const tarefaCompleta = botaoDeletar.parentElement;
    tarefaCompleta.remove();
}

export default BotaoDeletar;