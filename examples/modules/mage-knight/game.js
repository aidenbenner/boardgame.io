/*
 * Copyright 2018 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { Game } from 'boardgame.io/core';
import * as Card from './cards';

export const MageKnight = Game({
  setup: () => ({
    hand: [Card.STAMINA, Card.MARCH],
  }),

  moves: {},

  flow: {},
});
