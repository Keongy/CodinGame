
## Objectif

Écrivez le programme permettant de détruire les montagnes pour pouvoir attérir. Pour cela, tirez sur la montagne la plus haute.

## Règles

Au début de chaque tour de jeu, vous recevez en entrée la hauteur de chaque montagne de gauche à droite.
Avant la fin du tour de jeu, vous devez indiquer la montagne la plus haute pour tirer dessus.

Tirer sur une montagne ne fera qu'en détruire une partie. Votre vaisseau descend à chaque passe.

![Screenshot](./img/screenshot.png)

### Note

N'oubliez pas d'exécuter les tests depuis la fenêtre "Jeu de tests". Les tests fournis et les validateurs utilisés pour le calcul du score sont légèrement différents pour éviter les solutions codées en dur.

## Entrées du jeu

Le programme doit lire depuis l'entrée standard la hauteur des montagnes puis fournir sur la sortie standard l'indice de la montagne à détruire.

### Entrées pour un tour de jeu

8 lignes : un entier mountainH par ligne. Il représente la hauteur d'une montagne. Les hauteurs des montagnes sont données dans l'ordre de leur index (allant de 0 à 7).

### Sortie pour un tour de jeu

Une unique ligne contenant le numéro de la montagne sur laquelle tirer.

### Contraintes

0 ≤ mountainH ≤ 9
Temps de réponse pour un tour ≤ 100ms