import BotaoConcluir from './concluiTarefa.js';
import BotaoDeletar from './deletaTarefa.js';

export const handleNovoItem = (event) => {
    event.preventDefault();
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const listaDeTarefas = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);

    const dataFormatada = data.format('DD/MM/YYYY');

    const dados = {
        valor,
        dataFormatada
    }

    const tarefasAtualizadas = [...tarefas, dados];

    const tarefaCriada = Tarefa(dados);

    listaDeTarefas.appendChild(tarefaCriada);

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));

    input.value = '';
}

export const Tarefa = ({ valor, dataFormatada }) => {

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const conteudo = `
    <p class="content">${dataFormatada} - ${valor}<p/>
    `;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoDeletar());

    return tarefa;
}

