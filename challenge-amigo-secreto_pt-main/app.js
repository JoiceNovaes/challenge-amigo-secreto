let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo.length === 0) {
        alert("Digite um nome!");
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione um nome!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultadoLista = document.getElementById("resultado");

    resultadoLista.innerHTML = ""; 

    let item = document.createElement("li");
    item.textContent = sorteado;

    resultadoLista.appendChild(item);
}