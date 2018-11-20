import React, {Component} from 'react';
import EtapeKanban from '../image/EtapeKanban.png';


class WhatKanban extends Component {
  render(){
    return(
      <div className="WhatKanban">
        <h2>Qu'est-ce que c'est la methode Kanban ?</h2>
        <ul>
          <li>
            <p>
              La méthodologie Kanban vient de l’industrie automobile au Japon. Créée par Taiichi Ōno pour Toyota en 1950 pour optimiser sa capacité de production afin d’être compétitive face aux entreprises américaines.
            </p>
            <p>
              La méthode Kanban se base sur une approche qui s’apelle Lean, c’est-à-dire sur une amélioration continue des processus de production qui permet une gestion de la production sans gaspillage.
            </p>
          </li>
          <li>
            <div>
              <img src={EtapeKanban} alt='Méthode Kanban' />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}


export default WhatKanban;
