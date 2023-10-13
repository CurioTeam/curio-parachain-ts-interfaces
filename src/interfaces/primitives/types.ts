// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, i128 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';

/** @name Amount */
export interface Amount extends i128 {}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isDexShare: boolean;
  readonly asDexShare: ITuple<[DexShare, DexShare]>;
  readonly type: 'Token' | 'DexShare';
}

/** @name DexShare */
export interface DexShare extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly type: 'Token';
}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isCgt: boolean;
  readonly isDai: boolean;
  readonly isWct1: boolean;
  readonly type: 'Cgt' | 'Dai' | 'Wct1';
}

/** @name TradingPair */
export interface TradingPair extends ITuple<[CurrencyId, CurrencyId]> {}

export type PHANTOM_PRIMITIVES = 'primitives';
