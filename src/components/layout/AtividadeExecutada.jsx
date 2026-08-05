"use client"

import styles from "../styles/Secao.module.css"

import clsx from "clsx"
import { useState } from "react"
import { criarCampoBooleano, criarCampoDeTexto, criarCampoTextArea } from "../../utils/CriarCampos.jsx"

export default function AtividadeExecutada() {

    const [formDinamico, setFormDinamico] = useState([])

    function addFormularioDinamico() {
        const addGrupo = {
            idCampo: crypto.randomUUID(),
            campos: {
                descricao: criarCampoDeTexto("descricao-atividade", "Descrição da Atividade", "Ex.: Concretagem da laje"),
                endereco: criarCampoDeTexto("endereco-atividade", "Endereço", "Ex.: Pav. 3"),
                obs: criarCampoTextArea("obs-atividade", "Observação", "...")
            }
        }
        setFormDinamico([...formDinamico, addGrupo])
    }

    function deletarFormulario(idParaRemover) {
        setFormDinamico(formDinamico.filter((grupo) => grupo.idCampo !== idParaRemover))
    }

    const formAtividade = {
        pocc: criarCampoDeTexto("pocc", "POCC", ""),
        pocs: criarCampoDeTexto("pocs", "POCS", ""),
        pt: criarCampoDeTexto("pt", "PT", "", clsx(styles.campo, styles.colSpan2)),

        spool: criarCampoBooleano("spool", "Spool Aço"),
        solda: criarCampoBooleano("solda", "Solda em Aço"),
        teste: criarCampoBooleano("teste", "Teste"),
        comissionamento: criarCampoBooleano("comissionamento", "Comissionamento"),
        assentamento: criarCampoBooleano("assentamento", "Assentamento"),

        recomposicao: {
            tipo: "select",
            chave: "recomposicao",
            label: "Recomposicao",
            className: "",
            opcao: [
                {
                    texto: "Selecione...",
                    value: ""
                },
                {
                    texto: "N/A",
                    value: "N/A"
                },
                {
                    texto: "Definitivo",
                    value: "definitivo"
                },
                {
                    texto: "Provisório",
                    value: "provisorio"
                }
            ]
        }
    }

    const listaCampos = Object.entries(formAtividade).map((i) => i[1])

    return (
        <section className={styles.secao}>
            <div className={styles.cabecalho}>
                <span className={styles.secaoNumero}>4</span>
                <h2 className={styles.subtitulo}>Atividades Executadas</h2>
            </div>

            <div className={styles.campoFormDinamico}>
                <div className={styles.formDinamico}>
                    {formDinamico.map((grupo) => (
                        <div
                            key={grupo.idCampo}
                            className={styles.formItem}
                        >
                            <div
                                className={styles.removerFormulario}
                            >
                                <button
                                    onClick={() => deletarFormulario(grupo.idCampo)}
                                >
                                    X
                                </button>
                            </div>

                            {Object.values(grupo.campos).map((campo) => (
                                <div
                                    key={campo.chave}
                                    className={styles.campo}
                                >
                                    <label
                                        htmlFor={campo.chave}
                                        className={styles.label}
                                    >
                                        {campo.label}
                                    </label>
                                    {campo.tipo === "text" ? (
                                        <input
                                            type={campo.tipo}
                                            name={campo.chave}
                                            id={campo.chave}
                                            placeholder={campo.ph}
                                            className={styles.input}
                                        />
                                    ) : (
                                        <textarea
                                            name={campo.chave}
                                            id={campo.chave}
                                            placeholder={campo.ph}
                                            className={clsx(styles.input, styles.textArea)}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={styles.addFormulario}>
                    <button onClick={addFormularioDinamico}>
                        <svg width="14" height="14" viewBox="0 0 14 14">
                            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        Adicionar Atividade
                    </button>
                </div>
            </div>

            <div className={styles.formulario}>
                {listaCampos.map((campo, k) => (
                    <div
                        key={k}
                        className={campo.className || styles.campo}
                    >
                        <label
                            htmlFor={campo.chave}
                            className={styles.label}
                        >
                            {campo.label}
                        </label>

                        {campo.tipo === "select" ? (
                            <select
                                name={campo.chave}
                                id={campo.chave}
                                className={styles.input}
                            >
                                {campo.opcao.map((opt, k) => (
                                    <option
                                        key={k}
                                        value={opt.value}
                                    >
                                        {opt.texto}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={campo.tipo}
                                name={campo.chave}
                                id={campo.chave}
                                placeholder={campo.ph}
                                className={styles.input}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}