# Suivi — après-midi J1

**Noté. Un fichier par étudiant, écrit avec vos mots.** Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») rapporte plus qu'une phrase parfaite recopiée.

- Nom : CLEMENT Ameylia
- Binôme : DALLAIS Chloé
- Atelier utilisé (le mien, celui du binôme, la reprise) : celui du binôme

## Pour chaque TP abordé

Recopiez ce bloc autant de fois que nécessaire.

### TP07 
- Réponse à la question « Dans le suivi » du TP : Nous avons utilisé textContent pour éviter l'injection HTML et donc éviter des failles de sécurité. TextContent affiche du texte et n'injecte pas du HTML. Utiliser TextContent est plus sécuritaire. Si on avait mis '<b>gras</b>' gras serait afficher en gras dans la liste li.

### TP08 
- Réponse à la question « Dans le suivi » du TP : Nous n'avons pas utilisé document dans brain.js car il peut y avoir des accès aux fichiers par les utilisateurs qu'ils ne sont pas sensés pouvoir avoir. 

### TP09 
- Réponse à la question « Dans le suivi » du TP : Le fichier brain.js s'occupe des réponses apporter par le chat bot c'est celui qui réfléchi. Le fichier view.js s'occupe de l'ajout des réponses et question envoyé par l'utilisateur et par l'assistant. Le fichier app.js sert d'applicatifs aux autres fichiers. 

### TP10

- J'ai prédit : La conversation apparaitra sur un autre onglet car localStorage est lié à l'addresse du site, mais ne s'affichera pas sur la navigation privée. Elle ne s'affichera pas sur "localhost : 3000" car le site est différent du site du server. 
- Nous avons fait : Nous avons testé d'ouvrir un nouvel onglet de l'adresse http://127.0.0.1:3000/ en public et en privée, puis nous avons testé l'adresse localhost : 3000.
- J'ai observé : Nous avons observé que la prédiction était bonne.
- J'ai compris : J'ai compris que le stockage de la conversation était lié au server et donc à l'adresse http://127.0.0.1:3000/

### TP11

-Réponse à la question : AssertionError [ERR_ASSERTION]: Expected values to be strictly equal: true !== false. J'ai donc appris qu'un test faux est en contradiction avec la valeur normal du test.

### TP…

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

1. Pourquoi `textContent` et pas `innerHTML` ? Car innerHTML réalise une injection HTML et est donc une possible faille de sécurité, un utilisateur n'est pas sensé pouvoir injecté du HTML. Ainsi on utilise textContent pour modifier juste le texte. 
2. Pourquoi trois fichiers plutôt qu'un seul ? Trois fichiers plutôt qu'un seul permettent le respect des responsabilités et donc de ne pas tout mélanger au sein d'un seul fichier. 
3. Si demain une IA écrit une partie du code, comment saurai-je qu'il est correct ? Si demain une IA écrit une partie du code, je saurai qu'il est correct en vérifiant ligne par ligne et en analysant son injection dans mon code déjà existante. 

## Aides utilisées

- Indices, aide-mémoire, voisins : Nous avons travaillé en binôme et rechercher dans la librairie du langage utilisé. 
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse : On lui à demandé de l'aide pour la correction du try catch du localStorage, nous avons vérifié sa réponse en comprenant les lignes à modifié et les erreurs que nous avions fait. 
