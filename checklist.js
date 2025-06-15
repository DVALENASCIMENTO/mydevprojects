const checklistItens = [
  {
    "titulo": "Backlog",
    "itens": [
      "- Coleta de requisitos / briefing",
      "- Pesquisa de referências e concorrência",
      "- Definição de sitemap e páginas"
    ]
  },
  {
    "titulo": "A Fazer",
    "itens": [
      "- Criar wireframes das páginas principais",
      "- Definir paleta de cores e tipografia",
      "- Desenhar header e footer",
      "- Planejar estrutura responsiva e grid",
      "- Modelar banco de dados (se aplicável)"
    ]
  },
  {
    "titulo": "Em Progresso",
    "itens": [
      "- Codificar HTML/CSS da Home",
      "- Implementar responsividade (media queries)",
      "- Construir formulário de contato",
      "- Integrar APIs / backend",
      "- Otimizar imagens e assets"
    ]
  },
  {
    "titulo": "Revisão",
    "itens": [
      "- Revisão de código (clean code)",
      "- Testes manuais / usabilidade",
      "- Testes responsivos em dispositivos reais",
      "- Verificar acessibilidade e links"
    ]
  },
  {
    "titulo": "Homologação",
    "itens": [
      "- Deploy em ambiente de testes",
      "- Homologação com o cliente / PO",
      "- Ajustes por feedback",
      "- Teste com usuários (beta)"
    ]
  },
  {
    "titulo": "Concluído",
    "itens": [
      "- Deploy em produção",
      "- Gerar documentação / README",
      "- Backup e ponto de restauração",
      "- Entregar ao cliente e coletar feedback"
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
