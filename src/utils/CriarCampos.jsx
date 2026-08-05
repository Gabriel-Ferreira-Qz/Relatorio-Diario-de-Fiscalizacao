export function criarCampoBooleano(chave, label, className = "") {
    return {
        tipo: "select",
        chave,
        label,
        className,
        opcao: [
            {
                texto: "Selecione...",
                value: ""
            },
            {
                texto: "Sim",
                value: "Sim"
            },
            {
                texto: "Não",
                value: "Não"
            }
        ]
    }
}

export function criarCampoDeTexto(chave, label, ph, className = "") {
    return {
        tipo: "text",
        chave,
        label,
        ph,
        className
    }
}

export function criarCampoTextArea(chave, label, ph, className = "") {
    return {
        tipo: "textarea",
        chave,
        label,
        ph,
        className
    }
}