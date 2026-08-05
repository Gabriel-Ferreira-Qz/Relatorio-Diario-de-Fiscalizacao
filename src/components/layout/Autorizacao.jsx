"use client"

import styles from "../styles/Secao.module.css"

import { useState } from "react"
import clsx from "clsx"

export default function Autorizacao() {

    const [form, setForm] = useState([])

    function adicionarFormulario() {
        const addGrupo = {
            idCampo: crypto.randomUUID(),
            campos: [
                {
                    label: 'Vigência da Autorização',
                    ph: 'Ex.: 01/01/2025 a 31/01/2025',
                    idElemento: 'vigencia'
                },
                {
                    label: 'Observação',
                    ph: '...',
                    idElemento: 'obs-vigencia'
                }
            ]
        }

        setForm([...form, addGrupo])
    }

    function deletarFormulario(idParaRemover) {
        setForm(form.filter((grupo) => grupo.idCampo !== idParaRemover))
    }

    return (
        <section className={styles.secao}>
            <div className={styles.cabecalho}>
                <span className={styles.secaoNumero}>2</span>
                <h2 className={styles.subtitulo}>Autorização</h2>
            </div>

            <div className={styles.campoFormDinamico}>
                <div className={styles.formDinamico}>
                    {form.map((grupo) => {
                        return (
                            <div
                                key={grupo.idCampo}
                                className={styles.formItem}
                            >
                                <div className={styles.removerFormulario}>
                                    <button
                                        onClick={() => deletarFormulario(grupo.idCampo)}
                                    >
                                        X
                                    </button>
                                </div>
                                <div className={styles.campo}>
                                    <label
                                        htmlFor={grupo.campos[0].idElemento}
                                        className={styles.label}
                                    >
                                        {grupo.campos[0].label}
                                    </label>
                                    <input
                                        id={grupo.campos[0].idElemento}
                                        type="text"
                                        placeholder={grupo.campos[0].ph}
                                        className={styles.input}
                                    />
                                </div>
                                <div className={styles.campo}>
                                    <label
                                        htmlFor={grupo.campos[1].idElemento}
                                        className={styles.label}
                                    >
                                        {grupo.campos[1].label}
                                    </label>
                                    <textarea
                                        id={grupo.campos[1].idElemento}
                                        placeholder={grupo.campos[1].ph}
                                        className={clsx(styles.input, styles.textArea)}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.addFormulario}>
                    <button onClick={adicionarFormulario}>
                        <svg width="14" height="14" viewBox="0 0 14 14">
                            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        Adicionar Autorização
                    </button>
                </div>
            </div>
        </section>
    )
}