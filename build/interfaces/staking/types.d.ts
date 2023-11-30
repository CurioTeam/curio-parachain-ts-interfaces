import type { Struct } from '@polkadot/types-codec';
import type { Perquintill } from '@polkadot/types/interfaces/runtime';
/** @name StakingRates */
export interface StakingRates extends Struct {
    readonly collatorStakingRate: Perquintill;
    readonly collatorRewardRate: Perquintill;
    readonly delegatorStakingRate: Perquintill;
    readonly delegatorRewardRate: Perquintill;
}
export type PHANTOM_STAKING = 'staking';
