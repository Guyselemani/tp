//mission 1
const nom = "Jonathan";
const age = 17;
const ville = "Goma";
const formation = "Développement web";
const fraisFormation = 150;

let montantPaye = 95;
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
console.log(`vous avex eu ${total}`);
console.log(`votre moyenne est ${moyenne}`);
console.log(`votre pour centage est ${(moyenne * 100) / 100} %`);
if (moyenne === 80 || moyenne <= 100) {
  console.log(`vous etes exelent `);
} else if (moyenne < 80 || moyenne === 70) {
  console.log(`tres biens`);
} else if (moyenne < 70 || moyenne === 60) {
  console.log(`bien`);
} else if (moyenne < 60 || moyenne === 50) {
  console.log(`passable`);
} else if (moyenne === 50 && noteJavaScript === 50) {
  console.log(`vous etes admin`);
} else {
  console.log(
    `vous estes ajournee prceque vous n'avez pas eu assez des moyenne `,
  );
}
