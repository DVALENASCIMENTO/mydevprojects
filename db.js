let db;
const request = indexedDB.open("ProjetosDB", 1);
request.onupgradeneeded = function(e) {
  db = e.target.result;
  db.createObjectStore("projetos", { keyPath: "id", autoIncrement: true });
};
request.onsuccess = function(e) {
  db = e.target.result;
  if (typeof carregarProjetos === "function") carregarProjetos();
};
request.onerror = function(e) {
  console.error("Erro ao acessar IndexedDB", e);
};
function adicionarProjeto(projeto, callback) {
  const tx = db.transaction("projetos", "readwrite");
  const store = tx.objectStore("projetos");
  store.add(projeto).onsuccess = callback;
}
function listarProjetos(callback) {
  const tx = db.transaction("projetos", "readonly");
  const store = tx.objectStore("projetos");
  const request = store.openCursor();
  const projetos = [];
  request.onsuccess = function(e) {
    const cursor = e.target.result;
    if (cursor) {
      projetos.push(cursor.value);
      cursor.continue();
    } else {
      callback(projetos);
    }
  };
}
function deletarProjeto(id, callback) {
  const tx = db.transaction("projetos", "readwrite");
  const store = tx.objectStore("projetos");
  store.delete(id).onsuccess = callback;
}