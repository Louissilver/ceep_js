import BotaoConcluir from './components/concluiTarefa.js';
import BotaoDeletar from './components/deletaTarefa.js';

const handleNovoItem = (event) => {
    event.preventDefault();
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

    const tarefaCriada = criarTarefa(dados);

    listaDeTarefas.appendChild(tarefaCriada);

    sessionStorage.setItem("tarefas", JSON.stringify(dados));

    input.value = '';
}

const criarTarefa = ({ valor, dataFormatada }) => {

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


const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', handleNovoItem);


