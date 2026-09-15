import { validateMessage, replyTo } from "./brain.js";
import { renderMessages } from "./view.js";
const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const champ = document.querySelector('#message');
const liste = document.querySelector('#messages');
const longueurTxt = document.querySelector('#longueurAct');
const historique = [];


champ.addEventListener('input',(event)=> {
  const longueur = champ.value.length;
  event.preventDefault();
  longueurTxt.textContent = longueur;
});

// J1 : interface seule, on bloque l’envoi et on l’explique.
formulaire?.addEventListener('submit', (event) => {
  event.preventDefault();
  const texte = champ.value.trim();
  if(validateMessage(texte).ok){
    historique.push({'role': 'user', 'texte': texte});
    historique.push({'role': 'assistant', 'texte': replyTo(texte)});
    renderMessages(historique,liste);
    statut.textContent='';
    champ.value='';
    longueurTxt.textContent = '0';
    champ.focus();
    } else {
    statut.textContent = 'Le message ne doit pas être vide.';
    champ.value='';
    longueurTxt.textContent = '0';
    champ.focus();
  }
});

// Version du serveur local, échec discret si indisponible.
fetch('/version.json', { headers: { accept: 'application/json' } })
  .then((reponse) => (reponse.ok ? reponse.json() : null))
  .then((donnees) => {
    if (donnees && typeof donnees.version === 'string' && versionElt) {
      versionElt.textContent = `version ${donnees.version}`;
    }
  })
  .catch(() => {});
