# RDF — Relatório Diário de Fiscalização

Aplicação web para preenchimento digital do **Relatório Diário de Fiscalização (RDF)**, usado para registrar atividades, autorizações, condições de segurança do trabalho e ocorrências em campo durante a execução de projetos técnicos.

O projeto nasceu como uma ferramenta interna para a Satel Brasil e hoje é mantido como projeto pessoal, em processo de migração de HTML/CSS/JavaScript puro para **Next.js**.

🔗 **Demo:** https://relatorio-diario-de-fiscalizacao.vercel.app/

> ⚠️ Projeto em desenvolvimento ativo. Algumas seções ainda usam dados estáticos e a persistência dos dados (banco de dados, autenticação) está sendo implementada.

## O que o RDF faz

O formulário é dividido em seções que acompanham o fluxo real de uma fiscalização em campo:

1. **Identificação da Atividade** — segmento, projeto, RDO, responsável técnico, empresa executora, data e horário.
2. **Autorização** — vigência das autorizações de trabalho, com possibilidade de adicionar múltiplos registros dinamicamente.
3. **Segurança do Trabalho** — checklist de DDS (Diálogo Diário de Segurança) e demais itens de conformidade.
4. **Atividade Executada** — descrição, endereço e observações da atividade, com suporte a múltiplos grupos de atividade adicionados dinamicamente.
5. **Stop Work** — registro de paralisações de trabalho por questões de segurança.
6. **Detalhamento de Atividade** — campo livre para detalhamento textual.
7. **Registro Fotográfico** — upload de múltiplas imagens como evidência da fiscalização.
8. **Exportação em PDF** — geração do relatório final para envio/arquivamento.

## Tecnologias utilizadas

- **[Next.js](https://nextjs.org/)** (App Router) — framework React usado na migração do projeto
- **[React](https://react.dev/)** — componentização e gerenciamento de estado (`useState`) dos formulários dinâmicos
- **CSS Modules** — estilização isolada por componente
- **[clsx](https://github.com/lukeed/clsx)** — composição condicional de classes CSS
- **[jsPDF](https://github.com/parallax/jsPDF)** — geração do relatório em PDF
- **[Vercel](https://vercel.com/)** — deploy e hospedagem
- **MySQL** *(em andamento)* — persistência dos dados, atualmente em ambiente local

## Estrutura do projeto

```
src/
├── app/                  # Rotas e layout raiz (App Router)
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── layout/           # Componentes de cada seção do formulário
│   └── styles/           # CSS Modules por componente
└── utils/
    └── CriarCampos.jsx   # Funções utilitárias para criação de campos de formulário reutilizáveis
```

## Rodando localmente

```bash
# Clonar o repositório
git clone https://github.com/Gabriel-Ferreira-Qz/Relatorio-Diario-de-Fiscalizacao.git
cd Relatorio-Diario-de-Fiscalizacao

# Instalar dependências
pnpm install
# ou: npm install / yarn install

# Rodar o servidor de desenvolvimento
pnpm dev
# ou: npm run dev / yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Roadmap

- [ ] Migrar dados estáticos (ex.: lista de técnicos) para consumo via banco de dados MySQL
- [ ] Implementar autenticação (login)
- [ ] Adicionar novas seções/páginas ao sistema
- [ ] Persistência completa dos relatórios preenchidos

## Autor

**Gabriel Ferreira** — [LinkedIn](https://www.linkedin.com/in/gabriel-f-queiroz/)
