const novaTarefa = document.querySelector('[data-form-button]');

const criarTarefa = (event) => {
    
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    console.log(valor);
    input.value = "";
}


novaTarefa.addEventListener('click', criarTarefa);



