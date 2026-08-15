"use client"

import { useState } from "react"

import styles from "../styles/Secao.module.css"

export default function RegistroFotografico() {

    const [imagensSelecinadas, setImagensSelecinadas] = useState([])

    function salvarImagens(img) {
        const valorImg = Array.from(img.target.files)
        setImagensSelecinadas([...imagensSelecinadas, ...valorImg])
    }
    
    console.log(imagensSelecinadas)


    return (
        <section className={styles.secao}>
            <div className={styles.cabecalho}>
                <span className={styles.secaoNumero}>7</span>
                <h2 className={styles.subtitulo}>Registro Fotográfico</h2>
            </div>

            <div className={styles.formulario}>
                <label htmlFor="imagens" className={styles.colSpan2}>
                    <div className={styles.btnAddFotos}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect x="3" y="5" width="26" height="20" rx="3" stroke="#888" strokeWidth="1.5" />
                            <circle cx="11" cy="13" r="2.5" stroke="#888" strokeWidth="1.3" />
                            <path d="M3 24l7-7 4 4 5-6 7 9" stroke="#888" strokeWidth="1.3" strokeLinejoin="round" />
                            <path d="M22 5v-3M22 5l-2-2M22 5l2-2" stroke="#888" strokeWidth="1.3" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                        <p><span>Clique para selecionar</span> ou arraste as fotos aqui</p>
                        <p>JPG, PNG — múltiplos arquivos aceitos</p>
                    </div>
                </label>
            </div>
            <input
                type="file"
                name="imagens"
                id="imagens"
                accept="image/*"
                multiple
                className={styles.inputFotos}
                onChange={salvarImagens}
            />

            <div>
                {imagensSelecinadas.map((arquivo, k) => {
                    const url = URL.createObjectURL(arquivo)

                    return( 
                        <div key={k}>
                            <img src={url} alt="teste" />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}