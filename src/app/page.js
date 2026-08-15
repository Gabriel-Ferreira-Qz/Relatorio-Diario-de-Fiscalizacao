import styles from "../components/styles/Main.module.css"

import Header from "../components/layout/Header.jsx";
import Identificacao from "@/components/layout/Identificacao.jsx";
import Autorizacao from "@/components/layout/Autorizacao";
import SegurancaDoTrabalho from "@/components/layout/SegurancaDoTrabalho";
import AtividadeExecutada from "@/components/layout/AtividadeExecutada";
import StopWork from "@/components/layout/StopWork";
import DetalhamentoAtividade from "@/components/layout/DetalhamentoAtividade";
import RegistroFotografico from "@/components/layout/RegistroFotografico";


export default function Home() {
  return (
    <div>
      <Header /> 
      <main>
        <section className={styles.container}>
          <Identificacao />
          <Autorizacao />
          <SegurancaDoTrabalho />
          <AtividadeExecutada />
          <StopWork />
          <DetalhamentoAtividade />
          <RegistroFotografico />
        </section>
      </main>
    </div>
  );
}  
