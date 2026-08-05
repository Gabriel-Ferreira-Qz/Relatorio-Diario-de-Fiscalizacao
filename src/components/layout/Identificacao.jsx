import styles from "../styles/Secao.module.css"
import clsx from "clsx"

export default function Identificacao() {

    const OpcoesSegmento = [
        {
            opcao: 'Selecione...',
            value: ''
        },
        {
            opcao: 'Manutenção e Operações de Rede',
            value: '1'
        },
        {
            opcao: 'Assistência Técnica',
            value: '2'
        },
        {
            opcao: 'Automação e Catódica',
            value: '3'
        },
        {
            opcao: 'Manutenção Civil',
            value: '4'
        },
        {
            opcao: 'Segurança do Trabalho',
            value: '5'
        }
    ]

    const tecnicosDeCampo = [
        {
            value: '',
            class: '',
            nome: 'Selecione...'
        },
        {
            value: '1',
            class: 'tecGas',
            nome: 'Ricardo Alves'
        },
        {
            value: '2',
            class: 'tecGas',
            nome: 'Luiz Ricardo'
        },
        {
            value: '3',
            class: 'tecGas',
            nome: 'Felipe Silva'
        },
        {
            value: '4',
            class: 'tecGas',
            nome: 'Izael Rodrigues'
        },
        {
            value: '5',
            class: 'tecGas',
            nome: 'Ranieri Freitas'
        },
        {
            value: '6',
            class: 'tecGas',
            nome: 'Sérgio Grazia'
        },
        {
            value: '7',
            class: 'tecSeguranca',
            nome: 'Carlos Antônio'
        },
        {
            value: '8',
            class: 'tecSeguranca',
            nome: 'Yuri da Silva'
        },
        {
            value: '9',
            class: 'tecSeguranca',
            nome: 'Rafael Assunção'
        },
        {
            value: '10',
            class: 'tecSeguranca',
            nome: 'Kathelleen Silva'
        },
        {
            value: '11',
            class: 'tecSeguranca',
            nome: 'Vanessa'
        },
        {
            value: '12',
            class: 'tecSeguranca',
            nome: 'Kelven'
        },
        {
            value: '13',
            class: 'tecSeguranca',
            nome: 'Ariane Aparecida'
        },
        {
            value: '14',
            class: 'tecSeguranca',
            nome: 'Luiz Lima'
        },
        {
            value: '15',
            class: 'tecSeguranca',
            nome: 'Andrea de Miranda'
        },
        {
            value: '16',
            class: 'tecSeguranca',
            nome: 'William Hippolito'
        },
        {
            value: '17',
            class: 'tecSeguranca',
            nome: 'Alexandre Vila'
        }
    ]

    return (
        <section className={styles.secao}>
            <div className={styles.cabecalho}>
                <span className={styles.secaoNumero}>1</span>
                <h2 className={styles.subtitulo}>Identificação da Atividade</h2>
            </div>

            <div className={styles.formulario}>
                <div className={clsx(styles.campo, styles.colSpan2)}>
                    <label
                        htmlFor="segmento"
                        className={styles.label}
                    >
                        Segmento
                    </label>

                    <select
                        name="segmento"
                        id="segmento"
                        className={styles.input}
                    >
                        {OpcoesSegmento.map((opt, k) =>
                            <option
                                value={opt.value}
                                key={k}
                            >
                                {opt.opcao}
                            </option>
                        )}
                    </select>
                </div>

                <div className={clsx(styles.campo, styles.colSpan2)}>
                    <label
                        htmlFor="projeto"
                        className={styles.label}
                    >
                        Projeto
                    </label>
                    <input
                        type="text"
                        name="projeto"
                        id="projeto"
                        placeholder="Ex: Troca de Bateria ISA"
                        className={styles.input}
                    />
                </div>

                <div className={styles.campo}>
                    <label
                        htmlFor="rdo"
                        className={styles.label}
                    >
                        RDO
                    </label>

                    <select
                        name="rdo"
                        id="rdo"
                        className={styles.input}
                    >
                        <option>Selecione...</option>
                        <option>N/A</option>
                        <option>Sim</option>
                        <option>Não</option>
                    </select>
                </div>

                <div className={styles.campo}>
                    <label
                        htmlFor="resposavel"
                        className={styles.label}
                    >
                        Responsável Técnico
                    </label>

                    <select
                        name="resposavel"
                        id="resposavel"
                        className={styles.input}
                    >
                        {tecnicosDeCampo.map((tec, k) =>
                            <option
                                key={k}
                                value={tec.value}
                            >
                                {tec.nome}
                            </option>
                        )}
                    </select>
                </div>

                <div className={styles.campo}>
                    <label
                        htmlFor="empresa"
                        className={styles.label}
                    >
                        Empresa Executora
                    </label>
                    <input
                        type="text"
                        name="empresa"
                        id="empresa"
                        placeholder="Nome da Empresa"
                        className={styles.input}
                    />
                </div>

                <div className={styles.campo}>
                    <label
                        htmlFor="data"
                        className={styles.label}
                    >
                        Data do Relatório
                    </label>
                    <input
                        type="date"
                        name="data"
                        id="data"
                        className={styles.input}
                    />
                </div>

                <div className={styles.campo}>
                    <label
                        htmlFor="periodo"
                        className={styles.label}
                    >
                        Período
                    </label>

                    <select
                        name="periodo"
                        id="periodo"
                        className={styles.input}
                    >
                        <option>Selecione...</option>
                        <option>Diurno</option>
                        <option>Noturno</option>
                    </select>
                </div>

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