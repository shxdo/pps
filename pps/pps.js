
function generator() {
    return Math.floor(Math.random() * 3);
  } 

// variable du nombre généré par le PC
var AI = generator();

// variable du nombre choisi par le joueur
var player;

// si le joueur choisi pierre
function pierre(){
    document.getElementById(pierre);
    player="pierre";
    console.log("vous avez choisi la pierre");
    generator();
    computer();
    result();
}
// si le joueur choisi papier
function papier(){
    document.getElementById(pierre);
    player = "papier";
    console.log("vous avez choisi le papier");
    generator();
    computer();
    result();
}
// si le joueur choisi ciseaux
function ciseaux(){
    document.getElementById(ciseaux);
    player="ciseaux";
    console.log("vous avez choisi le ciseaux");
    generator();
    computer();
    result();
}

function computer (){
    if (AI == 0){
        console.log("votre adversaire a choisi la pierre")
    } else if (AI == 1){
        console.log("votre adversaire a choisi la papier")
    } else {
        console.log("votre adversaire a choisi le ciseaux")
    }
}
function result(){
    if (player = "pierre") {
        if (AI == 0){
            console.log("pierre contre pierre, égalité")
        } else if (AI == 1){
            console.log("pierre contre papier, vous perdez")
        } else {
            console.log("pierre contre ciseaux, vous gagnez")
        }
    } else if (player = "papier") {
        if (AI == 0){
            console.log("papier contre pierre, vous gagnez")
        } else if (AI == 1){
            console.log("papier contre papier, égalité")
        } else {
            console.log("papier contre ciseaux, vous perdez")
        }
    } else {
        if (AI == 0){
            console.log("ciseaux contre pierre, vous perdez")
        } else if (AI == 1){
            console.log("ciseaux contre papier, vous gagnez")
        } else {
            console.log("ciseaux contre ciseaux, égalité")
        }
    }
}