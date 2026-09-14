# Suivi — après-midi J1

**Noté. Un fichier par étudiant, écrit avec vos mots.** Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») rapporte plus qu'une phrase parfaite recopiée.

- Nom : DALLAIS Chloé
- Binôme : CLEMENT Ameylia
- Atelier utilisé (le mien, celui du binôme, la reprise) : le mien

## Pour chaque TP abordé

Recopiez ce bloc autant de fois que nécessaire.

### TP07

- Réponse à la question « Dans le suivi » du TP :
  - Si on utilise innerHtml, on risque l'injection de html qui peut mener à des attaques xss avec injection de script
  - Nous avons utilisé textContent pour éviter cela
  - textContent affiche tout en texte, et ne parse pas les balises
  - Il est plus sécurisé de n'accepter aucune balise et de n'accepter que du texte pur
  - ```<b>gras</b>``` aurait affiché le mot en gras dans la liste

### TP08

- Réponse à la question « Dans le suivi » du TP : `brain.js` ne doit pas utiliser `document` pour bien séparer les responsabilités. De plus, si le serveur envoie tous les fichiers du dossier, les utilisateurs pourraient avoir accès à des fichiers auxquels ils ne devraient pas avoir accès.

### TP...

- J'ai prédit :
- Nous avons fait :
- J'ai observé :
- J'ai compris :
- Je n'ai pas compris :
- Réponse à la question « Dans le suivi » du TP :

## Épreuve de l'explication (TP12)

- Ce que je n'ai pas su expliquer :
- Ce que mon binôme n'a pas su expliquer :

## Trois questions

1. Pourquoi `textContent` et pas `innerHTML` ?
2. Pourquoi trois fichiers plutôt qu'un seul ?
3. Si demain une IA écrit une partie du code, comment saurai-je qu'il est correct ?

## Aides utilisées

- Indices, aide-mémoire, voisins :
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse :
