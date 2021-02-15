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
    
    input.value = "";
}



novaTarefa.addEventListener('click', criarTarefa);



