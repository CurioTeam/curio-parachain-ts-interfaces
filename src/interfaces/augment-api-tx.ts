// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { Bytes, Compact, Option, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256, MultiAddress, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { CumulusPrimitivesParachainInherentParachainInherentData, CurioCommonRuntimeXcmConfigCustomMetadata, CurioMainnetRuntimeConsensusSessionKeys, CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeOriginCaller, CurioMainnetRuntimeUtilitiesProxyType, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime, OrmlTraitsAssetRegistryAssetMetadata, PalletBridgeMintData, PalletConvictionVotingConviction, PalletConvictionVotingVoteAccountVote, PalletIdentityBitFlags, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIncentivesPoolId, PalletMultisigTimepoint, PalletVestingVestingInfo, SpWeightsWeightV2Weight, StagingXcmV3MultiLocation, StagingXcmV3WeightLimit, StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiAssets, StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * See [`Pallet::register_asset`].
       **/
      registerAsset: AugmentedSubmittable<(metadata: OrmlTraitsAssetRegistryAssetMetadata | { decimals?: any; name?: any; symbol?: any; existentialDeposit?: any; location?: any; additional?: any } | string | Uint8Array, assetId: Option<CurioMainnetRuntimeCurrencyId> | null | Uint8Array | CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string) => SubmittableExtrinsic<ApiType>, [OrmlTraitsAssetRegistryAssetMetadata, Option<CurioMainnetRuntimeCurrencyId>]>;
      /**
       * See [`Pallet::update_asset`].
       **/
      updateAsset: AugmentedSubmittable<(assetId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, decimals: Option<u32> | null | Uint8Array | u32 | AnyNumber, name: Option<Bytes> | null | Uint8Array | Bytes | string, symbol: Option<Bytes> | null | Uint8Array | Bytes | string, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, location: Option<Option<StagingXcmVersionedMultiLocation>> | null | Uint8Array | Option<StagingXcmVersionedMultiLocation> | StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string, additional: Option<CurioCommonRuntimeXcmConfigCustomMetadata> | null | Uint8Array | CurioCommonRuntimeXcmConfigCustomMetadata | { feePerSecond?: any } | string) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, Option<u32>, Option<Bytes>, Option<Bytes>, Option<u128>, Option<Option<StagingXcmVersionedMultiLocation>>, Option<CurioCommonRuntimeXcmConfigCustomMetadata>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      /**
       * See [`Pallet::force_set_balance`].
       **/
      forceSetBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::force_unreserve`].
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * See [`Pallet::set_balance_deprecated`].
       **/
      setBalanceDeprecated: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, oldReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_all`].
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * See [`Pallet::transfer_allow_death`].
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::upgrade_accounts`].
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bounties: {
      /**
       * See [`Pallet::accept_curator`].
       **/
      acceptCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::approve_bounty`].
       **/
      approveBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::award_bounty`].
       **/
      awardBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * See [`Pallet::claim_bounty`].
       **/
      claimBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::close_bounty`].
       **/
      closeBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::extend_bounty_expiry`].
       **/
      extendBountyExpiry: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes]>;
      /**
       * See [`Pallet::propose_bounty`].
       **/
      proposeBounty: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
      /**
       * See [`Pallet::propose_curator`].
       **/
      proposeCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::unassign_curator`].
       **/
      unassignCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bridge: {
      /**
       * See [`Pallet::add_supported_currency`].
       **/
      addSupportedCurrency: AugmentedSubmittable<(currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, token: H160 | string | Uint8Array, pause: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, H160, bool]>;
      /**
       * See [`Pallet::batch_mint`].
       **/
      batchMint: AugmentedSubmittable<(data: Vec<PalletBridgeMintData> | (PalletBridgeMintData | { requestId?: any; to?: any; token?: any; amount?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletBridgeMintData>]>;
      /**
       * See [`Pallet::burn`].
       **/
      burn: AugmentedSubmittable<(currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, to: H160 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, H160, u128]>;
      /**
       * See [`Pallet::mint`].
       **/
      mint: AugmentedSubmittable<(requestId: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, token: H160 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32, H160, u128]>;
      /**
       * See [`Pallet::remove_supported_currency`].
       **/
      removeSupportedCurrency: AugmentedSubmittable<(currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId]>;
      /**
       * See [`Pallet::set_currency_pause`].
       **/
      setCurrencyPause: AugmentedSubmittable<(currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, pause: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, bool]>;
      /**
       * See [`Pallet::set_eth_blacklist`].
       **/
      setEthBlacklist: AugmentedSubmittable<(account: H160 | string | Uint8Array, blacklisted: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, bool]>;
      /**
       * See [`Pallet::set_full_pause`].
       **/
      setFullPause: AugmentedSubmittable<(pause: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::set_manager`].
       **/
      setManager: AugmentedSubmittable<(manager: AccountId32 | string | Uint8Array, isManager: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, bool]>;
      /**
       * See [`Pallet::set_sub_blacklist`].
       **/
      setSubBlacklist: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array, blacklisted: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    convictionVoting: {
      /**
       * See [`Pallet::delegate`].
       **/
      delegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, to: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, conviction: PalletConvictionVotingConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, MultiAddress, PalletConvictionVotingConviction, u128]>;
      /**
       * See [`Pallet::remove_other_vote`].
       **/
      removeOtherVote: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, clazz: u16 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u16, u32]>;
      /**
       * See [`Pallet::remove_vote`].
       **/
      removeVote: AugmentedSubmittable<(clazz: Option<u16> | null | Uint8Array | u16 | AnyNumber, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u16>, u32]>;
      /**
       * See [`Pallet::undelegate`].
       **/
      undelegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * See [`Pallet::unlock`].
       **/
      unlock: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, MultiAddress]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(pollIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletConvictionVotingVoteAccountVote | { Standard: any } | { Split: any } | { SplitAbstain: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletConvictionVotingVoteAccountVote]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    currencies: {
      /**
       * See [`Pallet::sweep_dust`].
       **/
      sweepDust: AugmentedSubmittable<(currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, accounts: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, Vec<AccountId32>]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CurioMainnetRuntimeCurrencyId, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_native_currency`].
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::update_balance`].
       **/
      updateBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, amount: i128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CurioMainnetRuntimeCurrencyId, i128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dex: {
      /**
       * See [`Pallet::abort_provisioning`].
       **/
      abortProvisioning: AugmentedSubmittable<(currencyIdA: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, currencyIdB: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyId]>;
      /**
       * See [`Pallet::add_liquidity`].
       **/
      addLiquidity: AugmentedSubmittable<(currencyIdA: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, currencyIdB: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, maxAmountA: Compact<u128> | AnyNumber | Uint8Array, maxAmountB: Compact<u128> | AnyNumber | Uint8Array, minShareIncrement: Compact<u128> | AnyNumber | Uint8Array, stakeIncrementShare: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyId, Compact<u128>, Compact<u128>, Compact<u128>, bool]>;
      /**
       * See [`Pallet::add_provision`].
       **/
      addProvision: AugmentedSubmittable<(currencyIdA: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, currencyIdB: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, amountA: Compact<u128> | AnyNumber | Uint8Array, amountB: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyId, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::claim_dex_share`].
       **/
      claimDexShare: AugmentedSubmittable<(owner: AccountId32 | string | Uint8Array, currencyIdA: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, currencyIdB: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyId]>;
      /**
       * See [`Pallet::disable_trading_pair`].
       **/
      disableTradingPair: AugmentedSubmittable<(currencyIdA: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, currencyIdB: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyId]>;
      /**
       * See [`Pallet::enable_trading_pair`].
       **/
      enableTradingPair: AugmentedSubmittable<(currencyIdA: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, currencyIdB: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyId]>;
      /**
       * See [`Pallet::end_provisioning`].
       **/
      endProvisioning: AugmentedSubmittable<(currencyIdA: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, currencyIdB: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyId]>;
      /**
       * See [`Pallet::list_provisioning`].
       **/
      listProvisioning: AugmentedSubmittable<(currencyIdA: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, currencyIdB: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, minContributionA: Compact<u128> | AnyNumber | Uint8Array, minContributionB: Compact<u128> | AnyNumber | Uint8Array, targetProvisionA: Compact<u128> | AnyNumber | Uint8Array, targetProvisionB: Compact<u128> | AnyNumber | Uint8Array, notBefore: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyId, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u64>]>;
      /**
       * See [`Pallet::refund_provision`].
       **/
      refundProvision: AugmentedSubmittable<(owner: AccountId32 | string | Uint8Array, currencyIdA: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, currencyIdB: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyId]>;
      /**
       * See [`Pallet::remove_liquidity`].
       **/
      removeLiquidity: AugmentedSubmittable<(currencyIdA: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, currencyIdB: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, removeShare: Compact<u128> | AnyNumber | Uint8Array, minWithdrawnA: Compact<u128> | AnyNumber | Uint8Array, minWithdrawnB: Compact<u128> | AnyNumber | Uint8Array, byUnstake: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyId, Compact<u128>, Compact<u128>, Compact<u128>, bool]>;
      /**
       * See [`Pallet::swap_with_exact_supply`].
       **/
      swapWithExactSupply: AugmentedSubmittable<(path: Vec<CurioMainnetRuntimeCurrencyId> | (CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array)[], supplyAmount: Compact<u128> | AnyNumber | Uint8Array, minTargetAmount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<CurioMainnetRuntimeCurrencyId>, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::swap_with_exact_target`].
       **/
      swapWithExactTarget: AugmentedSubmittable<(path: Vec<CurioMainnetRuntimeCurrencyId> | (CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array)[], targetAmount: Compact<u128> | AnyNumber | Uint8Array, maxSupplyAmount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<CurioMainnetRuntimeCurrencyId>, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::update_provisioning_parameters`].
       **/
      updateProvisioningParameters: AugmentedSubmittable<(currencyIdA: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, currencyIdB: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, minContributionA: Compact<u128> | AnyNumber | Uint8Array, minContributionB: Compact<u128> | AnyNumber | Uint8Array, targetProvisionA: Compact<u128> | AnyNumber | Uint8Array, targetProvisionB: Compact<u128> | AnyNumber | Uint8Array, notBefore: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyId, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dmpQueue: {
      /**
       * See [`Pallet::service_overweight`].
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    fellowshipCollective: {
      /**
       * See [`Pallet::add_member`].
       **/
      addMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::cleanup_poll`].
       **/
      cleanupPoll: AugmentedSubmittable<(pollIndex: u32 | AnyNumber | Uint8Array, max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::demote_member`].
       **/
      demoteMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::promote_member`].
       **/
      promoteMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::remove_member`].
       **/
      removeMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minRank: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u16]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(poll: u32 | AnyNumber | Uint8Array, aye: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    fellowshipReferenda: {
      /**
       * See [`Pallet::cancel`].
       **/
      cancel: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::kill`].
       **/
      kill: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::nudge_referendum`].
       **/
      nudgeReferendum: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::one_fewer_deciding`].
       **/
      oneFewerDeciding: AugmentedSubmittable<(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * See [`Pallet::place_decision_deposit`].
       **/
      placeDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::refund_decision_deposit`].
       **/
      refundDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::refund_submission_deposit`].
       **/
      refundSubmissionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_metadata`].
       **/
      setMetadata: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<H256>]>;
      /**
       * See [`Pallet::submit`].
       **/
      submit: AugmentedSubmittable<(proposalOrigin: CurioMainnetRuntimeOriginCaller | { system: any } | { Void: any } | { Origins: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, enactmentMoment: FrameSupportScheduleDispatchTime | { At: any } | { After: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeOriginCaller, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      /**
       * See [`Pallet::add_registrar`].
       **/
      addRegistrar: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::add_sub`].
       **/
      addSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * See [`Pallet::cancel_request`].
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::clear_identity`].
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::kill_identity`].
       **/
      killIdentity: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::provide_judgement`].
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, PalletIdentityJudgement, H256]>;
      /**
       * See [`Pallet::quit_sub`].
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_sub`].
       **/
      removeSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::rename_sub`].
       **/
      renameSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * See [`Pallet::request_judgement`].
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_account_id`].
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * See [`Pallet::set_fee`].
       **/
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_fields`].
       **/
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletIdentityBitFlags]>;
      /**
       * See [`Pallet::set_identity`].
       **/
      setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityIdentityInfo]>;
      /**
       * See [`Pallet::set_subs`].
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    incentives: {
      /**
       * See [`Pallet::claim_rewards`].
       **/
      claimRewards: AugmentedSubmittable<(poolId: PalletIncentivesPoolId | { Dex: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIncentivesPoolId]>;
      /**
       * See [`Pallet::deposit_dex_share`].
       **/
      depositDexShare: AugmentedSubmittable<(lpCurrencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, Compact<u128>]>;
      /**
       * See [`Pallet::update_claim_reward_deduction_rates`].
       **/
      updateClaimRewardDeductionRates: AugmentedSubmittable<(updates: Vec<ITuple<[PalletIncentivesPoolId, u128]>> | ([PalletIncentivesPoolId | { Dex: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[PalletIncentivesPoolId, u128]>>]>;
      /**
       * See [`Pallet::update_incentive_rewards`].
       **/
      updateIncentiveRewards: AugmentedSubmittable<(updates: Vec<ITuple<[PalletIncentivesPoolId, Vec<ITuple<[CurioMainnetRuntimeCurrencyId, u128]>>]>> | ([PalletIncentivesPoolId | { Dex: any } | string | Uint8Array, Vec<ITuple<[CurioMainnetRuntimeCurrencyId, u128]>> | ([CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[PalletIncentivesPoolId, Vec<ITuple<[CurioMainnetRuntimeCurrencyId, u128]>>]>>]>;
      /**
       * See [`Pallet::withdraw_dex_share`].
       **/
      withdrawDexShare: AugmentedSubmittable<(lpCurrencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    indices: {
      /**
       * See [`Pallet::claim`].
       **/
      claim: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array, freeze: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, bool]>;
      /**
       * See [`Pallet::free`].
       **/
      free: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::freeze`].
       **/
      freeze: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multisig: {
      /**
       * See [`Pallet::approve_as_multi`].
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::as_multi`].
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, call: Call | IMethod | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::as_multi_threshold_1`].
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
      /**
       * See [`Pallet::cancel_as_multi`].
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainStaking: {
      /**
       * See [`Pallet::cancel_leave_candidates`].
       **/
      cancelLeaveCandidates: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::candidate_stake_less`].
       **/
      candidateStakeLess: AugmentedSubmittable<(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::candidate_stake_more`].
       **/
      candidateStakeMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::claim_rewards`].
       **/
      claimRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::delegator_stake_less`].
       **/
      delegatorStakeLess: AugmentedSubmittable<(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::delegator_stake_more`].
       **/
      delegatorStakeMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::execute_leave_candidates`].
       **/
      executeLeaveCandidates: AugmentedSubmittable<(collator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::execute_scheduled_reward_change`].
       **/
      executeScheduledRewardChange: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::force_new_round`].
       **/
      forceNewRound: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::force_remove_candidate`].
       **/
      forceRemoveCandidate: AugmentedSubmittable<(collator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::increment_collator_rewards`].
       **/
      incrementCollatorRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::increment_delegator_rewards`].
       **/
      incrementDelegatorRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::init_leave_candidates`].
       **/
      initLeaveCandidates: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::join_candidates`].
       **/
      joinCandidates: AugmentedSubmittable<(stake: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::join_delegators`].
       **/
      joinDelegators: AugmentedSubmittable<(collator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * See [`Pallet::leave_delegators`].
       **/
      leaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_blocks_per_round`].
       **/
      setBlocksPerRound: AugmentedSubmittable<(updated: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * See [`Pallet::set_inflation`].
       **/
      setInflation: AugmentedSubmittable<(collatorMaxRatePercentage: Perquintill | AnyNumber | Uint8Array, collatorAnnualRewardRatePercentage: Perquintill | AnyNumber | Uint8Array, delegatorMaxRatePercentage: Perquintill | AnyNumber | Uint8Array, delegatorAnnualRewardRatePercentage: Perquintill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perquintill, Perquintill, Perquintill, Perquintill]>;
      /**
       * See [`Pallet::set_max_candidate_stake`].
       **/
      setMaxCandidateStake: AugmentedSubmittable<(updated: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::set_max_selected_candidates`].
       **/
      setMaxSelectedCandidates: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::unlock_unstaked`].
       **/
      unlockUnstaked: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainSystem: {
      /**
       * See [`Pallet::authorize_upgrade`].
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array, checkVersion: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
      /**
       * See [`Pallet::enact_authorized_upgrade`].
       **/
      enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_validation_data`].
       **/
      setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
      /**
       * See [`Pallet::sudo_send_upward_message`].
       **/
      sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    polkadotXcm: {
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedXcm, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::force_default_xcm_version`].
       **/
      forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * See [`Pallet::force_subscribe_version_notify`].
       **/
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
      /**
       * See [`Pallet::force_suspension`].
       **/
      forceSuspension: AugmentedSubmittable<(suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::force_unsubscribe_version_notify`].
       **/
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
      /**
       * See [`Pallet::force_xcm_version`].
       **/
      forceXcmVersion: AugmentedSubmittable<(location: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, version: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV3MultiLocation, u32]>;
      /**
       * See [`Pallet::limited_reserve_transfer_assets`].
       **/
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::limited_teleport_assets`].
       **/
      limitedTeleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::reserve_transfer_assets`].
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
      /**
       * See [`Pallet::send`].
       **/
      send: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm]>;
      /**
       * See [`Pallet::teleport_assets`].
       **/
      teleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    preimage: {
      /**
       * See [`Pallet::note_preimage`].
       **/
      notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::request_preimage`].
       **/
      requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::unnote_preimage`].
       **/
      unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::unrequest_preimage`].
       **/
      unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proxy: {
      /**
       * See [`Pallet::add_proxy`].
       **/
      addProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: CurioMainnetRuntimeUtilitiesProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CurioMainnetRuntimeUtilitiesProxyType, u64]>;
      /**
       * See [`Pallet::announce`].
       **/
      announce: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::create_pure`].
       **/
      createPure: AugmentedSubmittable<(proxyType: CurioMainnetRuntimeUtilitiesProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: u64 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeUtilitiesProxyType, u64, u16]>;
      /**
       * See [`Pallet::kill_pure`].
       **/
      killPure: AugmentedSubmittable<(spawner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: CurioMainnetRuntimeUtilitiesProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u64> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CurioMainnetRuntimeUtilitiesProxyType, u16, Compact<u64>, Compact<u32>]>;
      /**
       * See [`Pallet::proxy`].
       **/
      proxy: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<CurioMainnetRuntimeUtilitiesProxyType> | null | Uint8Array | CurioMainnetRuntimeUtilitiesProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<CurioMainnetRuntimeUtilitiesProxyType>, Call]>;
      /**
       * See [`Pallet::proxy_announced`].
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<CurioMainnetRuntimeUtilitiesProxyType> | null | Uint8Array | CurioMainnetRuntimeUtilitiesProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Option<CurioMainnetRuntimeUtilitiesProxyType>, Call]>;
      /**
       * See [`Pallet::reject_announcement`].
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::remove_announcement`].
       **/
      removeAnnouncement: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::remove_proxies`].
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_proxy`].
       **/
      removeProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: CurioMainnetRuntimeUtilitiesProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CurioMainnetRuntimeUtilitiesProxyType, u64]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    referenda: {
      /**
       * See [`Pallet::cancel`].
       **/
      cancel: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::kill`].
       **/
      kill: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::nudge_referendum`].
       **/
      nudgeReferendum: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::one_fewer_deciding`].
       **/
      oneFewerDeciding: AugmentedSubmittable<(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * See [`Pallet::place_decision_deposit`].
       **/
      placeDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::refund_decision_deposit`].
       **/
      refundDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::refund_submission_deposit`].
       **/
      refundSubmissionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_metadata`].
       **/
      setMetadata: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<H256>]>;
      /**
       * See [`Pallet::submit`].
       **/
      submit: AugmentedSubmittable<(proposalOrigin: CurioMainnetRuntimeOriginCaller | { system: any } | { Void: any } | { Origins: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, enactmentMoment: FrameSupportScheduleDispatchTime | { At: any } | { After: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeOriginCaller, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    scheduler: {
      /**
       * See [`Pallet::cancel`].
       **/
      cancel: AugmentedSubmittable<(when: u64 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u32]>;
      /**
       * See [`Pallet::cancel_named`].
       **/
      cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * See [`Pallet::schedule`].
       **/
      schedule: AugmentedSubmittable<(when: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_after`].
       **/
      scheduleAfter: AugmentedSubmittable<(after: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_named`].
       **/
      scheduleNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, when: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_named_after`].
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, after: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * See [`Pallet::purge_keys`].
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_keys`].
       **/
      setKeys: AugmentedSubmittable<(keys: CurioMainnetRuntimeConsensusSessionKeys | { aura?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeConsensusSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudo: {
      /**
       * See [`Pallet::set_key`].
       **/
      setKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::sudo`].
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * See [`Pallet::sudo_as`].
       **/
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * See [`Pallet::sudo_unchecked_weight`].
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * See [`Pallet::kill_prefix`].
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * See [`Pallet::kill_storage`].
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * See [`Pallet::remark`].
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::remark_with_event`].
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code`].
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code_without_checks`].
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_heap_pages`].
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * See [`Pallet::set_storage`].
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * See [`Pallet::set`].
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tokens: {
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, CurioMainnetRuntimeCurrencyId, Compact<u128>]>;
      /**
       * See [`Pallet::set_balance`].
       **/
      setBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CurioMainnetRuntimeCurrencyId, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CurioMainnetRuntimeCurrencyId, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_all`].
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CurioMainnetRuntimeCurrencyId, bool]>;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, CurioMainnetRuntimeCurrencyId, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      /**
       * See [`Pallet::approve_proposal`].
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::propose_spend`].
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * See [`Pallet::reject_proposal`].
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::remove_approval`].
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::spend`].
       **/
      spend: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    txPause: {
      /**
       * See [`Pallet::pause`].
       **/
      pause: AugmentedSubmittable<(fullName: ITuple<[Bytes, Bytes]> | [Bytes | string | Uint8Array, Bytes | string | Uint8Array]) => SubmittableExtrinsic<ApiType>, [ITuple<[Bytes, Bytes]>]>;
      /**
       * See [`Pallet::unpause`].
       **/
      unpause: AugmentedSubmittable<(ident: ITuple<[Bytes, Bytes]> | [Bytes | string | Uint8Array, Bytes | string | Uint8Array]) => SubmittableExtrinsic<ApiType>, [ITuple<[Bytes, Bytes]>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      /**
       * See [`Pallet::as_derivative`].
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * See [`Pallet::batch`].
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::batch_all`].
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::dispatch_as`].
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: CurioMainnetRuntimeOriginCaller | { system: any } | { Void: any } | { Origins: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeOriginCaller, Call]>;
      /**
       * See [`Pallet::force_batch`].
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::with_weight`].
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      /**
       * See [`Pallet::force_vested_transfer`].
       **/
      forceVestedTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, PalletVestingVestingInfo]>;
      /**
       * See [`Pallet::merge_schedules`].
       **/
      mergeSchedules: AugmentedSubmittable<(schedule1Index: u32 | AnyNumber | Uint8Array, schedule2Index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::vest`].
       **/
      vest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::vested_transfer`].
       **/
      vestedTransfer: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletVestingVestingInfo]>;
      /**
       * See [`Pallet::vest_other`].
       **/
      vestOther: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    whitelistFrame: {
      /**
       * See [`Pallet::dispatch_whitelisted_call`].
       **/
      dispatchWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array, callEncodedLen: u32 | AnyNumber | Uint8Array, callWeightWitness: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
       **/
      dispatchWhitelistedCallWithPreimage: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * See [`Pallet::remove_whitelisted_call`].
       **/
      removeWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::whitelist_call`].
       **/
      whitelistCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xcmpQueue: {
      /**
       * See [`Pallet::resume_xcm_execution`].
       **/
      resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::service_overweight`].
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::suspend_xcm_execution`].
       **/
      suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::update_drop_threshold`].
       **/
      updateDropThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_resume_threshold`].
       **/
      updateResumeThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_suspend_threshold`].
       **/
      updateSuspendThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_threshold_weight`].
       **/
      updateThresholdWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::update_weight_restrict_decay`].
       **/
      updateWeightRestrictDecay: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::update_xcmp_max_individual_weight`].
       **/
      updateXcmpMaxIndividualWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xTokens: {
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, u128, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiasset`].
       **/
      transferMultiasset: AugmentedSubmittable<(asset: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiassets`].
       **/
      transferMultiassets: AugmentedSubmittable<(assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeItem: u32 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAssets, u32, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiasset_with_fee`].
       **/
      transferMultiassetWithFee: AugmentedSubmittable<(asset: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, fee: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multicurrencies`].
       **/
      transferMulticurrencies: AugmentedSubmittable<(currencies: Vec<ITuple<[CurioMainnetRuntimeCurrencyId, u128]>> | ([CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], feeItem: u32 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[CurioMainnetRuntimeCurrencyId, u128]>>, u32, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_with_fee`].
       **/
      transferWithFee: AugmentedSubmittable<(currencyId: CurioMainnetRuntimeCurrencyId | { Token: any } | { ForeignAsset: any } | { DexShare: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurioMainnetRuntimeCurrencyId, u128, u128, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module
