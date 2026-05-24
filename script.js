function temaDefault(){
    let tema = document.getElementById("tema");
    tema.href = "home_style2.css";
}

function cambiaTema(){
    let tema = document.getElementById("tema");

    if(tema.href.includes("home_style1.css")){
        tema.href = "home_style2.css";
    } else {
        tema.href = "home_style1.css";
    }
}