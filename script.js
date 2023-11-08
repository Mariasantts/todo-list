const { Tarefa } = require('./Tarefa');

class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }
    
    // Adicionar tarefa
    adicionarTarefa(textoTarefa) {
        this.tarefas.push({ texto: textoTarefa, concluida: false });
    }

    // Marcar tarefa como concluída
    marcarTarefaConcluida(indice) {
        if (indice >= 0 && indice < this.tarefas.length) {
            this.tarefas[indice].concluida = true;
        }
    }

    // Remover tarefa da lista
    removerTarefa(indice) {
        if (indice >= 0 && indice < this.tarefas.length) {
            this.tarefas.splice(indice, 1);
        }
    }

    // Visualizar a lista de tarefas
    visualizarTarefas() {
        return this.tarefas;
    }
}


module.exports = ListaDeTarefas;

/**class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    // Adicionar tarefa
    adicionarTarefa(textoTarefa) {
        this.tarefas.push({ texto: textoTarefa, concluida: false });
    }

    // Marcar tarefa como concluída
    marcarTarefaConcluida(indice) {
        if (indice >= 0 && indice < this.tarefas.length) {
            this.tarefas[indice].concluida = true;
        }
    }

    // Remover tarefa da lista
    removerTarefa(indice) {
        if (indice >= 0 && indice < this.tarefas.length) {
            this.tarefas.splice(indice, 1);
        }
    }

    // Atualizar a lista de tarefas na página
    atualizarTarefas() {
        const listaDeTarefas = document.getElementById('taskList');
        listaDeTarefas.innerHTML = '';

        this.tarefas.forEach((tarefa, indice) => {
            const itemLista = document.createElement('li');
            itemLista.textContent = tarefa.texto;

            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.addEventListener('click', () => {
                this.removerTarefa(indice);
                this.atualizarTarefas();
            });

            itemLista.appendChild(botaoRemover);
            listaDeTarefas.appendChild(itemLista);
        });
    }
}

// Create a new to-do list
const listaDeTarefas = new ListaDeTarefas();

// Add a task when the button is clicked
const botaoAdicionarTarefa = document.getElementById('addTask');
botaoAdicionarTarefa.addEventListener('click', () => {
    const entradaTarefa = document.getElementById('taskInput');
    const textoTarefa = entradaTarefa.value.trim();

    if (textoTarefa !== '') {
        listaDeTarefas.adicionarTarefa(textoTarefa);
        entradaTarefa.value = '';
        listaDeTarefas.atualizarTarefas();
    }
});

// Initial update of the task list
listaDeTarefas.atualizarTarefas(); */