// Codice per la pagina home
function temaDefault() {
    let tema = document.getElementById("tema");
    tema.href = "/SnapNote/home_style2.css";
}

function cambiaTema() {
    let tema = document.getElementById("tema");

    if (tema.href.includes("/SnapNote/home_style1.css")) {
        tema.href = "/SnapNote/home_style2.css";
    } else {
        tema.href = "/SnapNote/home_style1.css";
    }
}


// Codice per la pagina elenchi
let groupList = [];
let groupItemList = [];

let listSelected = 0;
let itemSelected = 0;

function addList() {
    if (groupList.length >= 18) {
        alert("Hai raggiunto il numero massimo di elenchi! (Max. 18)");
        return;
    }
    let name = document.getElementById("txtNomeList").value;

    if (name !== "") {
        document.getElementById("txtNomeList").value = "";
        groupList.push(name);
        groupItemList.push([]); 

        listsPresenti();
        aggiornaLists();
    }
    else alert("Inserisci un nome!");
}

function aggiornaLists() {
    document.getElementById("lblNumElenchi").innerHTML = "Numero Elenchi: " + groupList.length;
    let s = '<ul>';
    for (let i = 0; i < groupList.length; i++) {
        s += '<li onclick="mostraList(' + i + ')">' + groupList[i] + '</li>';
    }
    s += '</ul>';
    document.getElementById("names-container").innerHTML = s;
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
    listSelected = index;
    aggiornaItems();
}

function deleteList(index) {
    if (confirm("Sei sicuro di voler eliminare questa lista?")) {
        groupList.splice(index, 1);
        groupItemList.splice(index, 1);

        listsPresenti();
        aggiornaLists();
        document.getElementById("items-container").innerHTML = "";
    }
}

function addItem() {
    let item = prompt("Inserisci l'oggetto:");
    if (item !== null && item.trim() !== "" && item.trim().length <= 40) {
        groupItemList[listSelected].push(item.trim());
        aggiornaItems();
    } else {
        alert("Nome dell'oggetto non valido! (Max. 40 caratteri)");
    }
}

function removeItem() {
    if (groupItemList[listSelected] && groupItemList[listSelected].length > 0) {
        groupItemList[listSelected].splice(itemSelected, 1);
        itemSelected = 0;
        aggiornaItems();
    } else {
        alert("Non ci sono oggetti da rimuovere in questa lista!");
    }
}

function aggiornaItems() {
    if (groupList.length === 0) {
        document.getElementById("items-container").innerHTML = "";
        return;
    }

    let s = '';
    s += '<h2>Elenco: ' + groupList[listSelected] + '</h2>';
    s += '<br>';
    s += '<button id="btn-item-add" onclick="addItem()">Aggiungi</button> ';
    s += '<button id="btn-item-remove" onclick="removeItem()">Rimuovi</button> ';
    s += '<button id="btn-list-delete" onclick="deleteList(' + listSelected + ')">Elimina Lista</button>';

    s += '<br><br>';
    s += '<ul>';

    let attualiItems = groupItemList[listSelected] || [];
    for (let i = 0; i < attualiItems.length; i++) {
        s += '<li onclick="selezionaItem(' + i + ')">' + attualiItems[i] + '</li>';
    }
    s += '</ul>';

    document.getElementById("items-container").innerHTML = s;
}

function selezionaItem(index) {
    itemSelected = index;

    let items = document.querySelectorAll("#items-container ul li");
    items.forEach((item, i) => {
        if (i === index) {
            item.style.backgroundColor = "#38a5fd";
            item.style.color = "#ffffff";
            item.style.scale = "1.02";
        } else {
            item.style.backgroundColor = "";
            item.style.color = ""; 
            item.style.scale = "1";
        }
    });
}
