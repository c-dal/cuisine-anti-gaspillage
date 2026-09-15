# Suivi — après-midi J1

**Noté. Un fichier par étudiant, écrit avec vos mots.** Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») rapporte plus qu'une phrase parfaite recopiée.

- Nom : DALLAIS Chloé
- Binôme : CLEMENT Ameylia
- Atelier utilisé (le mien, celui du binôme, la reprise) : le mien

## Pour chaque TP abordé

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

### TP11

- Réponse à la question « Dans le suivi » du TP :  
Le message exact du test rouge : "AssertionError [ERR_ASSERTION]: Expected values to be strictly equal : true !== false"  
J'ai donc appris qu'un test faux est indiqué, avec la valeur que le test a trouvé et sa comparaison avec la valeur souhaitée.

## Épreuve de l'explication (TP12)

- Ce que je n'ai pas su expliquer : Rien, nous avons tout codé à la main, sauf les quelques lignes indiquées dans la partie d'après que nous avons bien compris et su réexpliquer.
- Ce que mon binôme n'a pas su expliquer : idem

## Trois questions

1. Pourquoi `textContent` et pas `innerHTML` ?  
Pour éviter l'injection HTML car innerHTML parse les balises, donc si on met `<b>`, le texte sera en gras, si on met `<script>` il est facile d'avoir un script malicieux.
2. Pourquoi trois fichiers plutôt qu'un seul ?  
Trois fichiers plutôt qu'un seul pour séparer les responsabilités, et s'assurer que tous les fichiers ne sont pas à disposition de l'utilisateur s'ils ne lui sont pas destinés.
3. Si demain une IA écrit une partie du code, comment saurai-je qu'il est correct ?  
Si une IA écrit une partie du code, je saurai qu'il est correct en comprenant ligne par ligne ce qu'elle a écrit, et en vérifiant par des tests que le code est fonctionnel.

## Aides utilisées

- Indices, aide-mémoire, voisins : Nous avons travaillé à deux, et cherché de temps en temps certaines notions spécifiques sur internet (la propriété localStorage, certaines syntaxes spécifiques (try catch, append, push))
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse : On lui a demandé de l'aide pour corriger notre try catch de app.js pour l'enregistrement dans localStorage, c'est quelque chose qui était nouveau pour nous et il y avait des erreurs. L'IA a donc pu nous corriger, et en relisant ligne par ligne nous avons vu que ça correspondait aux consignes, et que nous comprenions chaque ligne de code. En testant, nous avons constaté que c'était fonctionnel.
