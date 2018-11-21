import React, { Component } from 'react';

class Pratique extends Component {
  render() {
    return(
      <div className="ListePratique">
        <h2>Comment le pratiquer ?</h2>
          <ul>
            <li>
              <p>1 - visualiser le projet (management visuel)</p>
            </li>
            <li>
              <p>2 - imiter le travail en cours</p>
            </li>
            <li>
              <p>3 - Mesurer et gérer le flux de travail</p>
            </li>
            <li>
              <p>4 - rendre explicite les règles de gestion du projet</p>
            </li>
            <li>
              <p>5 - S’améliorer de manière collaborative</p>
            </li>
          </ul>
        <p>Il existe des logiciels de suivi du travail comme <strong>Kanban Tool, JIRA, Trello, RealtimeBoard et Framaboard</strong></p>
      </div>
    );
  }
}

export default Pratique;
