import React, { Component } from 'react';

class GrandPrincipe extends Component {
  render() {
    return(
      <div className="Principe">
        <h2>Les Grands Principes de Kanban</h2>
          <ul>
            <li>
              <i className="fas fa-thumbs-up"></i>
              <div className="overlay">
                <div className="text">
                  <h3>Commencer pas finir</h3>
                  <p>a méthode Kanban utilise les processus déjà en place et <br/>encourage une amélioration de ces processus.</p>
                </div>
              </div>
            </li>

            <li>
              <i className="fas fa-hands-helping"></i>
              <div className="overlay">
                <div className="text">
                  <h3>Respectez le processus actuel, les rôles,
                  les responsabilités et les titres</h3>
                </div>
              </div>
            </li>

            <li>
              <i className="fas fa-play"></i>
              <div className="overlay">
                <div className="text">
                  <h3>Respectez le processus actuel, les rôles, les responsabilités et les titres</h3>
                  <p>Afin de faciliter les changements à venir, il faut éliminer la crainte du changement, notamment en maintenant et en respectant les rôles, les responsabilités et les titres professionnels actuels de chacun.</p>
                </div>
              </div>
            </li>

            <li>
              <i className="fas fa-undo-alt"></i>
              <div className="overlay">
                <div className="text">
                  <h3>Encourager le leadership</h3>
                  <p>collaborateurs ou cadres supérieurs, tous les actes de leadership au sein de l’organisation doivent être encouragés.</p>
                </div>
              </div>
            </li>
          </ul>
      </div>
    );
  }
}

export default GrandPrincipe;
