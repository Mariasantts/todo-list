class Tarefa {
    constructor(texto) {
        this.texto = texto;
        this.concluida = false;
    }
}

class TarefaRepetitiva extends Tarefa {
    constructor(texto, frequencia, dataInicio) {
        super(texto);
        this.frequencia = frequencia;
        this.dataInicio = dataInicio;
    }
}

class TarefaPrioritaria extends Tarefa {
    constructor(texto, prioridade, dataLimite) {
        super(texto);
        this.prioridade = prioridade;
        this.dataLimite = dataLimite;
    }
}

class TarefaComEtiqueta extends Tarefa {
    constructor(texto, etiquetas) {
        super(texto);
        this.etiquetas = etiquetas;
    }
}

module.exports = {
    Tarefa,
    TarefaRepetitiva,
    TarefaPrioritaria,
    TarefaComEtiqueta,
};