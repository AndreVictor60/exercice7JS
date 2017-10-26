function resultat(){
  // Déclarer les variables & récuperer les deux nombres saisie par utilisateur
  var size = document.getElementById('pointure').value;
  var year = document.getElementById('annee').value;
  //Vérification
  if(isNaN(size) == true || isNaN(year) == true){
        alert('Ceci n\'est pas un chiffre');
  }
  else {
  var  shoesize = size;
  var  yearbith = year;
    // Multiplier la pointure par 2
  var  resultat = shoesize * 2;
    // Ajouter 5 au résultat
    resultat += 5;
    // Multiplier le tout par 50
    resultat += 50;
    // Soustraire l’année de naissance
    resultat -= yearbith;
    // Ajouter au tout 1766
    resultat +=  1766;
    // Afficher le résultat
    alert(resultat);

  }

}

/* Demander à l’utilisateur sa pointure et son année de naissance. Créer une fonction qui fait les calculs suivants :

    Multiplier la pointure par 2
    Ajouter 5 au résultat
    Multiplier le tout par 50
    Soustraire l’année de naissance
    Ajouter au tout 1766

La fonction doit retourner le résultat. Tester avec votre date de naissance et votre pointure. Attention : n'utiliser une seule variable « resultat ». */
