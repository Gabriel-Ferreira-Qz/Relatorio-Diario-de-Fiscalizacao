import styles from "../styles/Footer.module.css"

export default function Rodape() {
    return (
        <div className={styles.rodape}>
            <p>
                RDF — Relatório Diário de Fiscalização
                <br />
                Desenvolvido por
                <a
                    className={styles.rodapeLink}
                    href="https://www.linkedin.com/in/gabriel-f-queiroz/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Gabriel Ferreira
                </a>
                © 2026
            </p>
        </div>
    )
}