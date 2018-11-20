import React, { Component } from 'react';
import img1 from '../image/sliderImage1.jpeg'

class Dev_Kanban extends Component {
  render() {
    return(
      <div className="dev_kanban">
        <h2>En Dev nous pouvons utiliser la méthode KanBan de cette Manière :</h2>
        <p>La méthode Kanban en dev est (plus souvent) utilisée comme un tableau contenant 3 colonnes ou plus l'intitulé peut varier en fonction du projet.<br/>Par exemple :</p>
        <div>
          <ul>
            <li><p>(To do/À faire) dans la première colonne</p></li>
            <li><p>(In progress/Doing/En cours) dans la deuxième colonne</p></li>
            <li><p>(Done/Terminé) dans la dernière colonne</p></li>
          </ul>
          <img src={img1}/>
        </div>
        <p>La colonne To do doit contenir toutes les étiquettes du projet , si l’étiquette est en cours , elle doit être déplacé dans la colonne Doing puis en Done si elle est fini.</p>
        <p>On peut aussi ajouter en plus une colonne “test” pour tester les réalisations de l'équipe (To Verify/À tester).</p>
        <h3>Une étiquette doit contenir :</h3>
        <ul>
          <li><p>La référence de la User Story</p></li>
          <li><p>La valeur de la User Story</p></li>
          <li><p>La complexité</p></li>
          <li><p>La description</p></li>
          <li><p>Les critères d’acceptation</p></li>
        </ul>
      </div>
    );
  }
}

export default Dev_Kanban;
