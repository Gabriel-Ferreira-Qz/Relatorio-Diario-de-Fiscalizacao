"use client"

import { useState } from "react"

import styles from "../styles/Secao.module.css"
import clsx from "clsx"

import { criarCampoBooleano, criarCampoDeTexto } from "../../utils/CriarCampos"

export default function Identificacao() {

    const [dataRelatorio, setDataRealatorio] = useState(() => {
        const data = new Date()
        const dia = String(data.getDate()).padStart(2, '0')
        const mes = String(data.getMonth() + 1).padStart(2, '0')
        const ano = String(data.getFullYear())
        return `${ano}-${mes}-${dia}`
    })

    const formIdentificacao = {
        segmento: {
            tipo: "select",
            chave: "segmento",
            label: "Segmento",
            className: clsx(styles.campo, styles.colSpan2),
            opcao: [
                {
                    texto: 'Selecione...',
                    value: ''
                },
                {
                    texto: 'Manutenção e Operações de Rede',
                    value: '1'
                },
                {
                    texto: 'Assistência Técnica',
                    value: '2'
                },
                {
                    texto: 'Automação e Catódica',
                    value: '3'
                },
                {
                    texto: 'Manutenção Civil',
                    value: '4'
                },
                {
                    texto: 'Segurança do Trabalho',
                    value: '5'
                }
            ]
        },

        projeto: criarCampoDeTexto("projeto", "Projeto", "Ex: Troca de Bateria ISA", clsx(styles.campo, styles.colSpan2)),
        rdo: criarCampoBooleano("rdo", "RDO"),

        tecnico: {
            tipo: "select",
            chave: "tecnico",
            label: "Responsável Técnico",
            className: "",
            opcao: [
                {
                    value: '',
                    class: '',
                    texto: 'Selecione...'
                },
                {
                    value: '1',
                    class: 'tecGas',
                    texto: 'Ricardo Alves'
                },
                {
                    value: '2',
                    class: 'tecGas',
                    texto: 'Luiz Ricardo'
                },
                {
                    value: '3',
                    class: 'tecGas',
                    texto: 'Felipe Silva'
                },
                {
                    value: '4',
                    class: 'tecGas',
                    texto: 'Izael Rodrigues'
                },
                {
                    value: '5',
                    class: 'tecGas',
                    texto: 'Ranieri Freitas'
                },
                {
                    value: '6',
                    class: 'tecGas',
                    texto: 'Sérgio Grazia'
                },
                {
                    value: '7',
                    class: 'tecSeguranca',
                    texto: 'Carlos Antônio'
                },
                {
                    value: '8',
                    class: 'tecSeguranca',
                    texto: 'Yuri da Silva'
                },
                {
                    value: '9',
                    class: 'tecSeguranca',
                    texto: 'Rafael Assunção'
                },
                {
                    value: '10',
                    class: 'tecSeguranca',
                    texto: 'Kathelleen Silva'
                },
                {
                    value: '11',
                    class: 'tecSeguranca',
                    texto: 'Vanessa'
                },
                {
                    value: '12',
                    class: 'tecSeguranca',
                    texto: 'Kelven'
                },
                {
                    value: '13',
                    class: 'tecSeguranca',
                    texto: 'Ariane Aparecida'
                },
                {
                    value: '14',
                    class: 'tecSeguranca',
                    texto: 'Luiz Lima'
                },
                {
                    value: '15',
                    class: 'tecSeguranca',
                    texto: 'Andrea de Miranda'
                },
                {
                    value: '16',
                    class: 'tecSeguranca',
                    texto: 'William Hippolito'
                },
                {
                    value: '17',
                    class: 'tecSeguranca',
                    texto: 'Alexandre Vila'
                }
            ]
        },

        empresa: criarCampoDeTexto("empresa", "Empresa Executora", "Nome da Empresa"),

        dataRelatorio: {
            tipo: "date",
            chave: "data",
            label: "Data do Relatório",
            className: ""
        },

        periodo: {
            tipo: "select",
            chave: "periodo",
            label: "Período",
            className: "",
            opcao: [
                {
                    texto: "Selecione...",
                    value: ""
                },
                {
                    texto: "Diurno",
                    value: "Diurno"
                },
                {
                    texto: "Noturno",
                    value: "Noturno"
                }
            ]
        }
    }

    const listaCampos = Object.entries(formIdentificacao).map((i) => i[1])

    console.log(listaCampos)

    function renderizarCampo(campo) {
        switch (campo.tipo) {
            case "select":
                return (
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
                )
            case "text":
                return (
                    <input
                        type={campo.tipo}
                        name={campo.chave}
                        id={campo.chave}
                        placeholder={campo.ph}
                        className={styles.input}
                    />
                )
            case "date":
                return (
                    <input
                        type={campo.tipo}
                        name={campo.chave}
                        id={campo.chave}
                        className={styles.input}
                        value={dataRelatorio}
                        onChange={(e) => setDataRealatorio(e.target.value)}
                    />
                )
        }
    }

    return (
        <section className={styles.secao}>
            <div className={styles.cabecalho}>
                <span className={styles.secaoNumero}>1</span>
                <h2 className={styles.subtitulo}>Identificação da Atividade</h2>
            </div>

            <div className={styles.formulario}>
                {listaCampos.map((campo) => (
                    <div
                        key={campo.chave}
                        className={campo.className || styles.campo}
                    >
                        <label htmlFor={campo.chave} className={styles.label}>{campo.label}</label>
                        {renderizarCampo(campo)}
                    </div>
                ))}

                <div className={styles.horario}>
                    <div className={styles.campo}>
                        <label
                            htmlFor="at-inicio"
                            className={styles.label}
                        >
                            Início
                        </label>
                        <input
                            type="time"
                            name="at-inicio"
                            id="at-inicio"
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.campo}>
                        <label
                            htmlFor="at-termino"
                            className={styles.label}
                        >
                            Término
                        </label>
                        <input
                            type="time"
                            name="at-termino"
                            id="at-termino"
                            className={styles.input}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}