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

### TP09

- J'ai compris : J'ai compris qu'il est important de séparer les responsabilités. Le fichier qui fait les traitements n'est pas celui qui doit afficher le rendu.
- Réponse à la question « Dans le suivi » du TP : `brain.js` sert à faire tous les traitements nécessaires des messages, c'est le fichier qui "réfléchit", comme son nom l'indique. Le fichier `view.js` sert à l'affichage, il ne fait pas de traitement. Quant au fichier `app.js`, c'est le côté applicatif qui fait les appels aux fonctions nécessaires.

### TP10

- J'ai prédit : La conversation apparait dans un autre onglet car localStorage est lié à l'adresse du site sur notre machine, mais ne s'affichera pas en navigation privée car il n'a pas accès au local storage. Sur http://localhost:3000 la conversation ne va pas s'afficher, le site est considéré comme différent par le serveur.
- Nous avons fait : nous avons testé l'ouverture dans un nouvel onglet, dans un onglet de navigation privée, et sur une adresse différente.
- J'ai observé : Les prédictions étaient correctes.
- J'ai compris : La différence entre http://localhost:3000 et http://127.0.0.1:3000, elles poitent toutes les deux vers ma machine mais sont considérées comme 2 sites distincts par le serveur, ce qui explique que le localStorage n'est pas partagé entre les deux.
- Je n'ai pas compris : - 

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
