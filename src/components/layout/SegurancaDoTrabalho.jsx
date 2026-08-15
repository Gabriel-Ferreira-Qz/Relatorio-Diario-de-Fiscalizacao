"use client"

import styles from "../styles/Secao.module.css"

import clsx from "clsx"
import { criarCampoBooleano, criarCampoDeTexto } from "../../utils/CriarCampos.jsx"
import { useState } from "react"

export default function SegurancaDoTrabalho() {

    const [semInspencao, setSemInspencao] = useState(false)

    const [valoresCampos, setValoresCampos] = useState({ id: "", pa: "" })

    function handleSelectChange(e) {
        const { id, value } = e.target

        if (id === 'inspencao') {
            setSemInspencao(value === 'Não')
        }
    }

    function handleTextChange(e) {
        const { id, value } = e.target

        return setValoresCampos({ ...valoresCampos, [id]: value })
    }

    const formCampos = {
        dds: criarCampoBooleano("dds-realizado", "DDS Realizado?"),
        arl: criarCampoBooleano("arl", "Possui ARL?"),
        inspecao: criarCampoBooleano("inspencao", "Teve Inspeção?", clsx(styles.campo, styles.colSpan2)),

        id: criarCampoDeTexto("id", "ID", "Numero do ID"),
        pa: criarCampoDeTexto("pa", "PA", "Informe o PA"),
        assuntoDDS: criarCampoDeTexto("dds", "Tema do DDS", "Assunto abordado no DDS", clsx(styles.campo, styles.colSpan2)),

        regiao: {
            tipo: "select",
            chave: "regiao",
            label: "Qual a Região?",
            className: clsx(styles.campo, styles.colSpan2),
            opcao: [
                {
                    texto: "Selecione...",
                    value: ""
                },
                {
                    texto: "RMSP",
                    value: "RMSP",
                },
                {
                    texto: "Vale",
                    value: "Vale",
                },
                {
                    texto: "Interior",
                    value: "Interior",
                },
                {
                    texto: "Baixada",
                    value: "Baixada",
                },
            ]
        },

        hospitalProximo: criarCampoDeTexto("hospital", "Hospital mais próximo (PAE)", "Pronto Atendimento 24 horas - Jundiapeba"),
        EnderecoHospital: criarCampoDeTexto("enderecoHospital", "Endereço do Hospital", "R. DR. Francisco Soares Marialva, 1701")
    }

    const listaCampos = Object.entries(formCampos).map((i) => i[1])

    return (
        <section className={styles.secao}>
            <div className={styles.cabecalho}>
                <span className={styles.secaoNumero}>3</span>
                <h2 className={styles.subtitulo}>Segurança do Trabalho</h2>
            </div>

            <div className={styles.formulario}>
                {listaCampos.map((campo, k) =>
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
                                onChange={handleSelectChange}
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
                        ) : campo.chave === "id" || campo.chave === "pa" ? (
                        <input
                            type="text"
                            name={campo.chave}
                            id={campo.chave}
                            placeholder={campo.ph}
                            className={styles.input}
                            value={semInspencao ? "N/A" : valoresCampos[campo.chave]}
                            disabled={semInspencao}
                            onChange={handleTextChange}
                        />
                        ) : (
                        <input
                            type="text"
                            name={campo.chave}
                            id={campo.chave}
                            placeholder={campo.ph}
                            className={styles.input}
                        />
)}
                    </div>
                )}
            </div>
        </section>
    )
}