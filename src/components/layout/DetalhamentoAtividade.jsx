import styles from "../styles/Secao.module.css"

import clsx from "clsx"

export default function DetalhamentoAtividade() {
    return (
        <section className={styles.secao}>
            <div className={styles.cabecalho}>
                <span className={styles.secaoNumero}>6</span>
                <h2 className={styles.subtitulo}>Detalhamento de Atividade</h2>
            </div>

            <div className={styles.formulario}>
                <div className={clsx(styles.campo, styles.colSpan2)}>
                    <label
                        htmlFor="detalhamentoAtt"
                        className={styles.label}
                    >
                        Detalhamento de Atividade
                    </label>
                    <textarea
                        name="detalhamentoAtt"
                        id="detalhamentoAtt"
                        placeholder="..."
                        className={clsx(styles.input, styles.textArea)}
                    />
                </div>
            </div>
        </section>
    )
}