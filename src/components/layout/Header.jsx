"use client"

import styles from "../styles/Header.module.css"
import Image from "next/image"

import seta from "../../../public/SetaDowload.png"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.cabecalho}>
                <h1 className={styles.titulo}>Relatório Diário de Fiscalização</h1>
                <span className={styles.tag}>RDF</span>
            </div>

            <div className={styles.exportar}>
                <div className={styles.dowload}>
                    <button>
                        <Image
                            src={seta}
                            width={14}
                            height={14}
                            alt="Seta de dowload"
                        />
                        Exportar PDF
                    </button>
                </div>

                <div>
                    <button>
                        <Image
                            src={seta}
                            width={14}
                            height={14}
                            alt="Seta de dowload"
                        />
                        Exportar Excel
                    </button>
                </div>
            </div>
        </header>
    )
}  