// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, i128, u128, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';

/** @name Amount */
export interface Amount extends i128 {}

/** @name Balance */
export interface Balance extends u128 {}

/** @name BlockNumber */
export interface BlockNumber extends u64 {}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isForeignAsset: boolean;
  readonly asForeignAsset: u32;
  readonly isDexShare: boolean;
  readonly asDexShare: ITuple<[DexShare, DexShare]>;
  readonly type: 'Token' | 'ForeignAsset' | 'DexShare';
}

/** @name DexShare */
export interface DexShare extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isForeignAsset: boolean;
  readonly asForeignAsset: u32;
  readonly type: 'Token' | 'ForeignAsset';
}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isCgt: boolean;
  readonly isKsm: boolean;
  readonly isDai: boolean;
  readonly isUsdc: boolean;
  readonly type: 'Cgt' | 'Ksm' | 'Dai' | 'Usdc';
}

/** @name TradingPair */
export interface TradingPair extends ITuple<[CurrencyId, CurrencyId]> {}

export type PHANTOM_PRIMITIVES = 'primitives';
