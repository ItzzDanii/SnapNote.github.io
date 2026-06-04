// Codice per la pagina home

function temaDefault() {
    let tema = document.getElementById("tema");
    tema.href = "home_style2.css";
}

function cambiaTema() {
    let tema = document.getElementById("tema");

    if (tema.href.includes("home_style1.css")) {
        tema.href = "home_style2.css";
    } else {
        tema.href = "home_style1.css";
    }
}

// Codice per la pagina elenchi

let groupList = [];
let groupNameList = [];
let groupItemList = [];

let listSelected = 0;
let itemSelected = 0;

function addList() {
    if (groupList.length >= 18) {
        alert("Hai raggiunto il numero massimo di elenchi!");
        return;
    }
    let name = document.getElementById("txtNomeList").value;

    if (name !== "") {
        document.getElementById("txtNomeList").value = "";
        groupList.push(name);
        listsPresenti();
        aggiornaLists();
    }
    else alert("Inserisci un nome!");
}

function aggiornaLists() {
    let s = '<ul>';
    for (let i = 0; i < groupList.length; i++) {
        s += '<li onclick="mostraList(' + i + ')">' + groupList[i] + '</li>';
    }
    s += '</ul>';
    document.getElementById("names-container").innerHTML = s;

    aggiornaItems();
}

function listsPresenti() {
    let container = document.getElementById("elenchi-container");

    if (groupList.length === 0) {
        document.getElementById("items-container").innerHTML = "";
        container.style.display = "none";
        return false;
    } else {
        container.style.display = "block";
        return true;
    }
}

function mostraList(index) {
    let s = '';
    s += '<h2>Elenco: ' + groupList.at(index) + '</h2>';
    s += '<br>';
    s += '<button id="btn-item-add" onclick="addItem()">Item</button>';
    s += '<button id="btn-item-remove" onclick="removeItem()">Item</button>';
    s += '<button id="btn-list-delete" onclick="deleteList(' + index + ')">Elimina Lista</button>';

    document.getElementById("items-container").innerHTML = s;
}

function deleteList(index) {
    if (confirm("Sei sicuro di voler eliminare questa lista?")) {
        groupList.splice(index, 1);
        listsPresenti();
        aggiornaLists();
        document.getElementById("items-container").innerHTML = "";
    }
}

function addItem() {
    let item = prompt("Inserisci il nome dell'item:");
    if (item !== null && item.trim() !== "") {
        groupItemList.push(item);
        aggiornaItems();
    } else {
        alert("Nome dell'item non valido!");
    }
}
