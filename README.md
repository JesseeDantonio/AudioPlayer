# audio_player

Fork modifié par "Dylan Jessee D'antonio"
Projet original : https://codepen.io/codingandstuff/pen/rNNNzyW?editors=0010

Modifications ( hors bugs corrigé ) :

  - Ajout de la possibilité de changer de musique "fichiers ou urls".
  - Ajout de la possibilité sur le bouton "back" de changer de musique si <= 5 secondes ou de remettre le temps à zero le temps de la musique si >.
  - Amélioration de la gestion du volume.
  - Normalisation des variables ("var" par "let").
  - Ajout d'un changement d'état sur le bouton "playpause".
  - Ajout du changement automatique de musique quand celle-ci arrive à la fin.
  - Ajout du changement d'état du bouton stop. 
  - Remise à zero de l'index avec l'action du bouton stop.
  - Supression des lignes inutiles, indentation, optimisation de mon code.
  - Ajout de la possibilité de faire tourner une musique en boucle.
  - Mise à jour des anciennes technologies (onclick, oninput), on passe maintenant par le gestionnaire d'évènement.
  - Ajout de la possibilité de choisir les musiques aléatoirement.
  - Le projet a été refactorisé ( programmation objet ).

Bugs résolu récemment :

  - Le lecteur audio inactif changé de musique quand la barre de progression était déplacé manuellement sur la fin. (cause fonction changeMusicAuto)
  - Le lecteur en pause, si l'utilisateur cliqué sur le bouton "stop", le bouton (playpause) resté en état "pause"
  - La fonctionnalité "loop" était bloqué à l'index 0, car j'appelais simplement la méthode stop().
  
    Enlever les zéros "être plus précis" -> parseFloat((variable).toFixed(nombreDécimauxAutorisé -> exemple 2));