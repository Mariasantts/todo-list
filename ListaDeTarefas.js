const { Tarefa } = require('./Tarefa');

class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }
    
    // Adicionar tarefa
    adicionarTarefa(textoTarefa) {
        this.tarefas.push(new Tarefa(textoTarefa));
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