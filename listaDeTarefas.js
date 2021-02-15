(() => {

    const novaTarefa = document.querySelector('[data-form-button]');

    const criarTarefa = (event) => {

        event.preventDefault();
        const listaDeTarefas = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;

        const tarefa = document.createElement('li');
        tarefa.classList.add('task');

        const conteudo = `
        <p class="content">${valor}<p/>
        `;

        listaDeTarefas.appendChild(tarefa);
        tarefa.innerHTML = conteudo;
        tarefa.appendChild(BotaoConcluir());
        tarefa.appendChild(BotaoDeletar());

        input.value = '';
    }

    novaTarefa.addEventListener('click', criarTarefa);

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
})();

