function salvarNome() {
    let Nome = document.getElementById("Nome").value;
    if (Nome) {
        localStorage.setItem("Nome", Nome);
        mostrarNome();
    }
}

// Função para exibir o nome salvo
function mostrarNome() {
    let nomeSalvo = localStorage.getItem("Nome");
    if (NomeSalvo) {
        document.getElementById("nomeExibido").textContent = "Nome salvo: " + nomeSalvo;
    } else {
        document.getElementById("nomeExibido").textContent = "Nenhum nome salvo.";
    }
}

// Função para remover o nome do localStorage
function removerNome() {
    localStorage.removeItem("Nome");
    mostrarNome();
}

// Carregar nome salvo ao abrir a página
window.onload = mostrarNome;