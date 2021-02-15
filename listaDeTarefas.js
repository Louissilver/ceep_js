const novaTarefa = document.querySelector('[data-form-button]');
const tarefa = document.querySelector('[data-form-input]');

novaTarefa.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(tarefa.value);
})



