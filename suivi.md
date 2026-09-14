# Suivi J1 — Cap Web

Note ton avancée après chaque TP. Reste factuel, sans données personnelles. Ce fichier te sert pour la capsule et le bilan.

## TP00 — Diagnostic

- Hypothèse : Problème de largeur : deux tailles différentes entre header et main
- Action : Corriger la largeur
- Résultat : Problème réglé
- Point non compris : je ne comprends pas le passage sur les étiquettes, elles sont parfaitement lisibles, rien à corriger

## TP01 — Démarrer

- Hypothèse : Si le serveur démarre mais pas le js, le navigateur va afficher seulement     <h1>Cap Web</h1>
    <p>Le serveur fonctionne. Aujourd’hui, nous construisons notre interface.</p>
- Action : retiré l'import du js dans le html pour vérifier
- Résultat : c'est ça
- Point non compris : je n'ai pas compris cette consigne "Conserve l'unique p#status avec role="status" pour les annonces, sans le dupliquer."

## TP02 — HTML

- Hypothèse : Si on remplace main par div, la navigation par lecteur d'écran sera beaucoup moins claire pour les utilisateurs
- Action : garder le main, et prendre l'habitude de séparer les pages en sections
- Résultat :
- Point non compris :

## TP03 — Formulaire

- Hypothèse : Dans un champ multiligne ça fait un saut de ligne classique plutôt que d'envoyer le formumaire
- Action : J'ai testé selon les consignes en faisant entrée, puis tab et entrée
- Résultat : Le premier test ajoute un saut de ligne, le deuxième se positionne sur le bouton envoyer et envoie le formulaire
- Point non compris : -
- Facultatif : un message vide ne fonctionne pas, comme on a mis required on a unn message qui s'affiche nous demandant de remplir l'input; le message d'espaces s'envoie corectement; le message long est bloqué au bout de 280 caractères on ne peut pas en écrire plus

## TP04 — Responsive

- Hypothèse :
- Action :
- Résultat :
- Point non compris, test 360 / 1280 :

## Commandes essayées

Note chaque commande avec son dossier de lancement et son résultat exact. Exemple d'état local, depuis la racine étudiante :

```sh
# depuis RACINE_ETUDIANT
git status
git diff
```

Mes essais :

- Dossier :
- Commande et résultat :
- Problème exact si blocage :

Si Node ou Git bloque, note le message exact et continue en local sans attendre. Le double-clic sur `diagnostic/index.html` ne remplace pas le serveur pour les modules et l'envoi du TP03.

## Auto-revue finale

- Ce qui s'affiche bien :
- Ce qui reste fragile au clavier ou à 360 px :
- Ce que je veux revoir en capsule :

## Rappel Git prudent

Git reste optionnel le matin. Vérifie l'état local, ne valide que des fichiers nommés un par un et seulement si Git est configuré. Reste en local ou en ZIP sauf si le formateur précise le circuit avec fork personnel. Aucune invitation ni demande de fusion requise le matin.

## Liens

- [README](README.md)
- [TP00](tp/00-diagnostic.md)
- [TP05](tp/05-bilan.md)
- [Aide-mémoire](ressources/aide-memoire.md)
