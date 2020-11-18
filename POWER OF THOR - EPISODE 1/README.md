
## Objectif

Votre programme doit permettre à Thor de rejoindre l'éclair de puissance.


## 	Règles

Thor évolue sur une carte de 40 cases de large et 18 cases de hauteur. Notez que les coordonnées (X et Y) commencent en partant du haut ! Ainsi la case la plus en haut à gauche a pour coordonnées "X=0,Y=0" et celle située le plus en bas à droite a pour coordonnées "X=39,Y=17".

Au début du programme vous recevez :
la variable lightX : la position X de l'éclair que Thor doit rejoindre.
la variable lightY : la position Y de l'éclair que Thor doit rejoindre.
la variable initialTX : la position X initiale de Thor.
la variable initialTY : la position Y initiale de Thor.
À la fin du tour de jeu, vous devez afficher la direction que Thor doit prendre parmi :

![txt alt](./img/direction.png)

## Entrées de jeu

Votre programme doit lire les données depuis l'entrée standard et écrire le résultat sur la sortie standard.

#### Entrée

Ligne 1 : Le nombre N de températures à analyser.

Ligne 2 : Une chaine de caractères contenant les N températures exprimées sous la forme de nombres entiers allant de -273 à 5526

#### Sortie

Affichez 0 (zéro) si aucune température n'est fournie. Sinon, affichez la température la plus proche de 0

#### Contraintes

0 ≤ N < 10000
