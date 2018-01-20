/*
 * Copyright 2018 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Client } from 'boardgame.io/client';
import { HexGrid } from 'boardgame.io/ui';
import { MageKnight } from '../game';
import './mk.css';

class Board extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any,
    events: PropTypes.any,
  };

  render() {
    return (
      <div className="mk">
        <div className="mk-hand">
          {this.props.G.hand.map(card => (
            <pre className="mk-card" key={card.name}>
              {JSON.stringify(card, null, 2)}
            </pre>
          ))}
        </div>

        <HexGrid radius={6} />
      </div>
    );
  }
}

const App = Client({
  game: MageKnight,
  numPlayers: 1,
  board: Board,
});

const Render = () => (
  <div style={{ padding: 50 }}>
    <App gameID="single" />
  </div>
);

export default Render;
