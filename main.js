function carregarProjetos() {
  listarProjetos(projetos => {
    const ul = document.getElementById("listaProjetos");
    ul.innerHTML = "";
    projetos.forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${p.nome}</strong><br>
        Dev: ${p.dev} | Empresa: ${p.empresa} | Data: ${p.data} | Status: ${p.status}<br>
        <button onclick="abrirChecklist(${p.id})">Abrir</button>
        <button onclick="removerProjeto(${p.id})">Excluir</button>
      `;
      ul.appendChild(li);
    });
  });
}
function abrirChecklist(id) {
  localStorage.setItem("projetoAtual", id);
  window.location.href = "checklist.html";
}
function abrirFormulario() {
  document.getElementById("formProjeto").classList.remove("hidden");
}
function fecharFormulario() {
  document.getElementById("formProjeto").classList.add("hidden");
}
function salvarProjeto() {
  const projeto = {
    nome: document.getElementById("nome").value,
    dev: document.getElementById("dev").value,
    empresa: document.getElementById("empresa").value,
    data: document.getElementById("data").value,
    status: document.getElementById("status").value
  };
  adicionarProjeto(projeto, () => {
    fecharFormulario();
    carregarProjetos();
  });
}
function removerProjeto(id) {
  deletarProjeto(id, carregarProjetos);
}