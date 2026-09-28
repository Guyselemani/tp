//mission 1
const nom = "Jonathan";
let age = 17;
const ville = "Goma";
const formation = "Développement web";
let fraisFormation = 150;

let montantPaye = 113;
let carteEtudiant = true;
let compteActif = true;
let autorisationParentale = false;

console.log(`
Présentation de l'étudiant
Nom : ${nom}
Âge : ${age} ans
Ville : ${ville}
Formation : ${formation}
Frais de formation : ${fraisFormation} $
Montant payé : ${montantPaye} $
Carte d'étudiant : ${carteEtudiant ? "Oui" : "Non"}
Compte actif : ${compteActif ? "Oui" : "Non"}
`);

console.log(typeof nom);
console.log(typeof age);
console.log(typeof montantPaye);
console.log(typeof carteEtudiant);

//missoin 2
let noteHTML = 85;
let noteCSS = 68;
let noteJavaScript = 42;
let noteAlgorithmique = 75;
let noteBaseDeDonnees = 90;
let noteReseau = 55;
let total =
  noteHTML +
  noteAlgorithmique +
  noteCSS +
  noteJavaScript +
  noteBaseDeDonnees +
  noteReseau;
let moyenne = total / 6;
console.log(`vous avez eu ${total}`);
console.log(`votre moyenne est ${moyenne}`);
console.log(`votre pourcentage est ${moyenne} %`);
if (moyenne >= 80) {
  console.log(`vous êtes excellent`);
} else if (moyenne >= 70) {
  console.log(`très bien`);
} else if (moyenne >= 60) {
  console.log(`bien`);
} else if (moyenne >= 50) {
  console.log(`passable`);
} else {
  console.log(`vous êtes ajourné parce que vous n'avez pas assez de moyenne`);
}

//mission 3
let reste_a_payer = fraisFormation - montantPaye;
const pourcentage_payer = (montantPaye * 100) / fraisFormation;
if (pourcentage_payer >= 75 && carteEtudiant === true && compteActif === true) {
  console.log(
    `vous pouvez passer l'examen parce que vous avez déjà payé ${pourcentage_payer}% et vous avez une carte d'étudiant et votre compte est actif`,
  );
} else {
  console.log(
    "vous n'êtes pas éligible pour passer les examens parce que vous ne remplissez pas nos conditions",
  );
}

//mission 4
const affichage = document.getElementById("affichage");
const noms = "Katembo Selemani Guy-Leon";
document.getElementById("nomEtudiant").textContent = noms;

document.getElementById("bouttonResultats").addEventListener("click", () => {
  affichage.textContent = `Résultats :\nNom : ${noms}\nMoyenne : ${moyenne}\nTotal : ${total}`;
});

document.getElementById("bouttonFrais").addEventListener("click", () => {
  const reste = fraisFormation - montantPaye;
  const pourcentage = (montantPaye * 100) / fraisFormation;
  affichage.textContent = `Frais de formation : ${fraisFormation} $\nMontant payé : ${montantPaye} $\nReste à payer : ${reste} $\nPourcentage payé : ${pourcentage}%`;
});

document.getElementById("bouttonExamens").addEventListener("click", () => {
  const message =
    pourcentage_payer >= 75 && carteEtudiant && compteActif
      ? "Vous pouvez passer l'examen."
      : "Vous n'êtes pas éligible pour passer l'examen.";
  affichage.textContent = message;
  alert(message);
});

document.getElementById("bouttonsPaiement").addEventListener("click", () => {
  const saisie = prompt("Entrer le nouveau montant payé", String(montantPaye));

  if (saisie === null) {
    return;
  }
  if (saisie.trim() === "") {
    alert("Entrez un montant");
    return;
  }

  const nouveauMontant = Number(saisie.replace(",", "."));
  if (
    !Number.isFinite(nouveauMontant) ||
    nouveauMontant < 0 ||
    nouveauMontant > fraisFormation
  ) {
    alert(`Entrez un montant entre 0 et ${fraisFormation} $.`);
    return;
  }

  montantPaye = nouveauMontant;
  const message = `Nouveau montant payé : ${montantPaye} $\nReste à payer : ${fraisFormation - montantPaye} $`;
  affichage.textContent = message;
  console.log(message);
});
