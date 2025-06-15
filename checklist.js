const checklistItens = [
  {
    titulo: "🗂️ ESTRUTURA DE PASTAS E ARQUIVOS",
    itens: [
      { texto: "Criar pasta principal do projeto: projeto-nome/" },
      { texto: "Criar subpastas:" },
      { texto: "- src/ – código-fonte (HTML, CSS, JS ou React)", tooltip: "Armazena todo o código-fonte da aplicação: HTML, CSS, JavaScript ou arquivos React." },
      { texto: "- docs/ – documentação técnica", tooltip: "Inclui arquivos como documento de visão, requisitos e casos de uso do sistema." },
      { texto: "- tests/ – plano de testes", tooltip: "Contém arquivos de testes, tanto manuais quanto automatizados." },
      { texto: "- .github/ (opcional – CI/CD ou actions)", tooltip: "Usado para armazenar workflows de CI/CD como GitHub Actions." },
      { texto: "Criar arquivos base:" },
      { texto: "- README.md – resumo do projeto", tooltip: "Apresenta uma visão geral do projeto, funcionalidades e instruções de uso." },
      { texto: "- kanban.md – quadro de tarefas ágil", tooltip: "Organiza tarefas em formato ágil, ideal para acompanhamento com Kanban." },
      { texto: "- index.html (JS puro) ou App.jsx (React)", tooltip: "Arquivo principal de entrada para o frontend, varia conforme a stack usada." },
      { texto: "- style.css ou tailwind.config.js (React)", tooltip: "Define os estilos globais da interface, manualmente ou via framework como Tailwind." },
      { texto: "- script.js ou main.jsx (React)", tooltip: "Contém a lógica principal da aplicação, como funções e interações." }
    ]
  },
  {
    titulo: "📄 DOCUMENTAÇÃO (docs/)",
    itens: [
      { texto: "Documento de Visão" },
      { texto: "- Descrever objetivo do projeto", tooltip: "Explique o que o sistema deve resolver ou melhorar." },
      { texto: "- Justificar sua importância", tooltip: "Destaque o valor do projeto para o usuário ou negócio." },
      { texto: "- Definir público-alvo", tooltip: "Liste quem usará o sistema e como ele será utilizado." },
      { texto: "- Listar funcionalidades principais", tooltip: "Descreva o que o sistema será capaz de fazer." },
      { texto: "Requisitos" },
      { texto: "- Requisitos funcionais (RF)", tooltip: "Funções que o sistema deve realizar (ex: login, cadastro)." },
      { texto: "- Requisitos não funcionais (RNF)", tooltip: "Critérios como desempenho, segurança e usabilidade." },
      { texto: "Casos de Uso" },
      { texto: "- Criar fluxos resumidos de uso", tooltip: "Liste etapas que o usuário segue ao usar o sistema." },
      { texto: "- Definir atores e etapas principais", tooltip: "Identifique quem realiza cada ação no sistema." },
      { texto: "Arquitetura" },
      { texto: "- Desenhar ou descrever estrutura de arquivos", tooltip: "Explique a organização das pastas e arquivos." },
      { texto: "- Especificar tecnologias utilizadas (ex: Date, setInterval, React hooks, etc.)", tooltip: "Liste bibliotecas, APIs, frameworks usados no projeto." },
      { texto: "- Explicar o fluxo de dados ou lógica", tooltip: "Descreva como os dados circulam e são manipulados." }
    ]
  },
  {
    titulo: "🧪 TESTES (tests/)",
    itens: [
      { texto: "- Criar arquivo testes.md", tooltip: "Arquivo markdown com descrição dos testes executados." },
      { texto: "- Definir testes manuais e/ou automatizados", tooltip: "Detalhe quais testes serão feitos manualmente ou com ferramentas automatizadas." },
      { texto: "- Teste de funcionamento da lógica", tooltip: "Verifique se as funcionalidades principais funcionam corretamente." },
      { texto: "- Teste de responsividade", tooltip: "Confirme que o layout se adapta bem a telas diferentes." },
      { texto: "- Teste de acessibilidade (opcional)", tooltip: "Avalie se o sistema é acessível para pessoas com deficiência." },
      { texto: "- Marcar critérios de aceitação (Ex: 'deve atualizar a cada segundo')", tooltip: "Defina o que significa 'funcionar corretamente' para cada funcionalidade." }
    ]
  },
  {
    titulo: "🔁 METODOLOGIA ÁGIL (kanban.md ou GitHub Projects)",
    itens: [
      { texto: "- Criar Backlog de funcionalidades", tooltip: "Liste todas as funcionalidades previstas para o projeto." },
      { texto: "- Criar quadro Kanban com colunas:", tooltip: "Divida as tarefas por status no fluxo de desenvolvimento." },
      { texto: "- 📝 A Fazer", tooltip: "Tarefas que ainda não foram iniciadas." },
      { texto: "- 🚧 Em Progresso", tooltip: "Tarefas que estão sendo desenvolvidas." },
      { texto: "- ✅ Concluído", tooltip: "Tarefas finalizadas e testadas." },
      { texto: "- Atualizar tarefas ao longo do desenvolvimento", tooltip: "Mantenha o quadro sempre atualizado com o progresso real." }
    ]
  },
  {
    titulo: "📦 README.md",
    itens: [
      { texto: "- Nome do projeto", tooltip: "Nome identificador do repositório e sistema." },
      { texto: "- Descrição resumida", tooltip: "Resumo breve explicando o que é o projeto." },
      { texto: "- Lista de funcionalidades", tooltip: "Detalhamento das ações que o sistema pode realizar." },
      { texto: "- Tecnologias usadas", tooltip: "Frameworks, linguagens e bibliotecas aplicadas." },
      { texto: "- Instruções de uso (execução local ou deploy)", tooltip: "Passos para instalar, executar e testar o sistema." },
      { texto: "- Licença e créditos (opcional)", tooltip: "Indique a licença de uso e colaboradores, se houver." }
    ]
  },
  {
    titulo: "💻 CÓDIGO-FONTE (src/)",
    itens: [
      { texto: "- Criar interface HTML (estrutura básica)", tooltip: "Monte a estrutura base com header, main, footer, etc." },
      { texto: "- Criar arquivo CSS com layout responsivo", tooltip: "Inclua estilos que se adaptam a diferentes tamanhos de tela." },
      { texto: "- Criar lógica JS (funções, atualizações, interações)", tooltip: "Desenvolva scripts que tornam o site funcional." },
      { texto: "- Garantir separação de responsabilidades (sem inline JS/CSS)", tooltip: "Mantenha HTML, CSS e JS em arquivos separados para melhor organização." }
    ]
  },
  {
    titulo: "🚀 ENTREGA / DEPLOY (opcional)",
    itens: [
      { texto: "- Subir projeto no GitHub", tooltip: "Versão final deve estar disponível em repositório público ou privado." },
      { texto: "- Configurar GitHub Pages, Vercel ou Netlify", tooltip: "Utilize uma dessas plataformas para publicar o projeto." },
      { texto: "- Testar link final e responsividade", tooltip: "Garanta que tudo funcione corretamente online em todos os dispositivos." }
    ]
  },
  {
    titulo: "📘 PADRÕES EXTRAS (opcional para projetos maiores)",
    itens: [
      { texto: "- Padrão de commits (feat:, fix:, doc: etc.)", tooltip: "Use convenções de commits para facilitar o histórico do Git." },
      { texto: "- CI/CD (GitHub Actions)", tooltip: "Configure deploys automáticos ou testes com workflows." },
      { texto: "- ESLint/Prettier para padronizar código", tooltip: "Ferramentas que ajudam a manter o código limpo e consistente." }
    ]
  }
];


const projetoId = Number(localStorage.getItem("projetoAtual"));
if (!projetoId || isNaN(projetoId)) {
  alert("Projeto inválido. Volte e selecione um projeto novamente.");
  window.location.href = "index.html";
}

function iniciarChecklist() {
  listarProjetos(projetos => {
    const projeto = projetos.find(p => p.id === projetoId);
    if (!projeto) return;

    document.getElementById("tituloProjeto").textContent = `Checklist – ${projeto.nome}`;
    document.getElementById("infoProjeto").textContent = `Desenvolvedor: ${projeto.dev} | Empresa: ${projeto.empresa} | Status: ${projeto.status}`;

    const ul = document.getElementById("checklist");
    ul.innerHTML = "";

    checklistItens.forEach((secao, secaoIndex) => {
      const titulo = document.createElement("li");
      titulo.innerHTML = `<strong class="titulo-secao">${secao.titulo}</strong>`;
      ul.appendChild(titulo);

      secao.itens.forEach((item, itemIndex) => {
        const texto = typeof item === "string" ? item : item.texto;
        const tooltip = typeof item === "object" && item.tooltip ? item.tooltip : null;

        const id = `${projetoId}_check_${secaoIndex}_${itemIndex}`;
        const checked = localStorage.getItem(id) === "true";

        const li = document.createElement("li");
        li.className = "check-item";

        if (texto.trim().startsWith("-")) {
          li.innerHTML = `
            <label class="tooltip-container">
              <input type="checkbox" ${checked ? "checked" : ""} onchange="salvarItem('${id}', this.checked)">
              <span>${texto.replace("-", "").trim()}</span>
              ${tooltip ? `<div class="tooltip">${tooltip}</div>` : ""}
            </label>
          `;
        } else {
          li.innerHTML = `<span class="subtitulo">${texto}</span>`;
        }

        ul.appendChild(li);
      });
    });
  });
}

function salvarItem(id, checked) {
  localStorage.setItem(id, checked);
}

function voltar() {
  window.location.href = "index.html";
}

if (typeof db !== "undefined" && db !== null) {
  iniciarChecklist();
} else {
  const request = indexedDB.open("ProjetosDB", 1);
  request.onsuccess = function (e) {
    db = e.target.result;
    iniciarChecklist();
  };
}
