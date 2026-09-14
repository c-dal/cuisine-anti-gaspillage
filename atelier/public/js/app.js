const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const champ = document.querySelector('#message');
const liste = document.querySelector('#messages');
const longueurTxt = document.querySelector('#longueurAct');


champ.addEventListener('input',(event)=> {
  const longueur = champ.value.length;
  longueurTxt.textContent = longueur;
});

// J1 : interface seule, on bloque l’envoi et on l’explique.
formulaire?.addEventListener('submit', (event) => {
  const texte = champ.value.trim();
  event.preventDefault();
  if (statut) {
    statut.textContent = 'Interface prête ; les réponses arrivent au J2.';
  }
  if(texte.length == 0){
    statut.textContent = 'Le message ne doit pas être vide.';
    champ.focus();
  } else{
    const li = document.createElement('li');
    li.textContent = 'Vous: '+texte;
    liste.append(li);
    statut.textContent='';
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
