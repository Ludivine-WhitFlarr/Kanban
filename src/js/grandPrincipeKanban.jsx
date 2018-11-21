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
                <div className="text">Hello World</div>
              </div>
            </li>

            <li>
              <i className="fas fa-hands-helping"></i>
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </li>

            <li>
              <i className="fas fa-play"></i>
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </li>

            <li>
              <i className="fas fa-undo-alt"></i>
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </li>
          </ul>
      </div>
    );
  }
}

export default GrandPrincipe;
