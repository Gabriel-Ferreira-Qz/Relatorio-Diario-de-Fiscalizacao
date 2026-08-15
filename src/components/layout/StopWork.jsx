"use client"

import styles from "../styles/Secao.module.css"

import clsx from "clsx"
import { useState } from "react"

export default function StopWork() {

    const [respostaStopWork, setRespostaStopWork] = useState("")

    return (
        <section className={styles.secao}>
            <div className={styles.cabecalho}>
                <span className={styles.secaoNumero}>5</span>
                <h2 className={styles.subtitulo}>Stop Work</h2>
            </div>

            <div className={styles.formularioStopWork}>
                <div className={clsx(styles.campo, styles.colSpan2)}>
                    <label
                        htmlFor="stopWork"
                        className={styles.label}
                    >
                        Houve Stop Work?
                    </label>
                    <select
                        name="stopWork"
                        id="stopWork"
                        className={styles.input}
                        onChange={(e) => setRespostaStopWork(e.target.value)}
                    >
                        <option value="">Selecione...</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                </div>

                {respostaStopWork === "Sim" && (
                    <div className={styles.flexColumn14}>
                        <div className={styles.horario}>
                            <div className={styles.campo}>
                                <label
                                    htmlFor="sw-inicio"
                                    className={styles.label}
                                >
                                    Início
                                </label>
                                <input
                                    type="time"
                                    name="sw-inicio"
                                    id="sw-inicio"
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.campo}>
                                <label
                                    htmlFor="sw-termino"
                                    className={styles.label}
                                >
                                    Término
                                </label>
                                <input
                                    type="time"
                                    name="sw-termino"
                                    id="sw-termino"
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className={styles.campo}>
                            <label
                                htmlFor="paralizacao"
                                className={styles.label}
                            >
                                Motivo da Paralização</label>
                            <textarea
                                name="paralizacao"
                                id="paralizacao"
                                placeholder="..."
                                className={clsx(styles.input, styles.textArea)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}