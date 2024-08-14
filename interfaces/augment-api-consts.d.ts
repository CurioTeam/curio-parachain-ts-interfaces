import '@polkadot/api-base/types/consts';
import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Option, Vec, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { CurioMainnetRuntimeCurrencyId, FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, PalletReferendaTrackInfo, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, StagingXcmV3MultiLocation } from '@polkadot/types/lookup';
export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;
declare module '@polkadot/api-base/types/consts' {
    interface AugmentedConsts<ApiType extends ApiTypes> {
        assetRegistry: {
            /**
             * The maximum length of a name or symbol.
             **/
            stringLimit: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        balances: {
            /**
             * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
             *
             * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
             * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
             * In case you have multiple sources of provider references, you may also get unexpected
             * behaviour if you set this to zero.
             *
             * Bottom line: Do yourself a favour and make it at least one!
             **/
            existentialDeposit: u128 & AugmentedConst<ApiType>;
            /**
             * The maximum number of individual freeze locks that can exist on an account at any time.
             **/
            maxFreezes: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum number of holds that can exist on an account at any time.
             **/
            maxHolds: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum number of locks that should exist on an account.
             * Not strictly enforced, but used for weight estimation.
             **/
            maxLocks: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum number of named reserves that can exist on an account.
             **/
            maxReserves: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        bounties: {
            /**
             * The amount held on deposit for placing a bounty proposal.
             **/
            bountyDepositBase: u128 & AugmentedConst<ApiType>;
            /**
             * The delay period for which a bounty beneficiary need to wait before claim the payout.
             **/
            bountyDepositPayoutDelay: u64 & AugmentedConst<ApiType>;
            /**
             * Bounty duration in blocks.
             **/
            bountyUpdatePeriod: u64 & AugmentedConst<ApiType>;
            /**
             * Minimum value for a bounty.
             **/
            bountyValueMinimum: u128 & AugmentedConst<ApiType>;
            /**
             * Maximum amount of funds that should be placed in a deposit for making a proposal.
             **/
            curatorDepositMax: Option<u128> & AugmentedConst<ApiType>;
            /**
             * Minimum amount of funds that should be placed in a deposit for making a proposal.
             **/
            curatorDepositMin: Option<u128> & AugmentedConst<ApiType>;
            /**
             * The curator deposit is calculated as a percentage of the curator fee.
             *
             * This deposit has optional upper and lower bounds with `CuratorDepositMax` and
             * `CuratorDepositMin`.
             **/
            curatorDepositMultiplier: Permill & AugmentedConst<ApiType>;
            /**
             * The amount held on deposit per byte within the tip report reason or bounty description.
             **/
            dataDepositPerByte: u128 & AugmentedConst<ApiType>;
            /**
             * Maximum acceptable reason length.
             *
             * Benchmarks depend on this value, be sure to update weights file when changing this value
             **/
            maximumReasonLength: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        bridge: {
            /**
             * The native currency identifier.
             **/
            getNativeCurrencyId: CurioMainnetRuntimeCurrencyId & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        convictionVoting: {
            /**
             * The maximum number of concurrent votes an account may have.
             *
             * Also used to compute weight, an overly large value can lead to extrinsics with large
             * weight estimation: see `delegate` for instance.
             **/
            maxVotes: u32 & AugmentedConst<ApiType>;
            /**
             * The minimum period of vote locking.
             *
             * It should be no shorter than enactment period to ensure that in the case of an approval,
             * those successful voters are locked into the consequences that their votes entail.
             **/
            voteLockingPeriod: u64 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        currencies: {
            /**
             * The native currency id
             **/
            getNativeCurrencyId: CurioMainnetRuntimeCurrencyId & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        dex: {
            /**
             * The extended provisioning blocks since the `not_before` of provisioning.
             **/
            extendedProvisioningBlocks: u64 & AugmentedConst<ApiType>;
            /**
             * Trading fee rate
             * The first item of the tuple is the numerator of the fee rate, second
             * item is the denominator, fee_rate = numerator / denominator,
             * use (u32, u32) over `Rate` type to minimize internal division
             * operation.
             **/
            getExchangeFee: ITuple<[u32, u32]> & AugmentedConst<ApiType>;
            /**
             * The DEX's module id, keep all assets in DEX.
             **/
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            /**
             * The limit for length of trading path
             **/
            tradingPathLimit: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        fellowshipReferenda: {
            /**
             * Quantization level for the referendum wakeup scheduler. A higher number will result in
             * fewer storage reads/writes needed for smaller voters, but also result in delays to the
             * automatic referendum status changes. Explicit servicing instructions are unaffected.
             **/
            alarmInterval: u64 & AugmentedConst<ApiType>;
            /**
             * Maximum size of the referendum queue for a single track.
             **/
            maxQueued: u32 & AugmentedConst<ApiType>;
            /**
             * The minimum amount to be used as a deposit for a public referendum proposal.
             **/
            submissionDeposit: u128 & AugmentedConst<ApiType>;
            /**
             * Information concerning the different referendum tracks.
             **/
            tracks: Vec<ITuple<[u16, PalletReferendaTrackInfo]>> & AugmentedConst<ApiType>;
            /**
             * The number of blocks after submission that a referendum must begin being decided by.
             * Once this passes, then anyone may cancel the referendum.
             **/
            undecidingTimeout: u64 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        identity: {
            /**
             * The amount held on deposit for a registered identity
             **/
            basicDeposit: u128 & AugmentedConst<ApiType>;
            /**
             * The amount held on deposit per additional field for a registered identity.
             **/
            fieldDeposit: u128 & AugmentedConst<ApiType>;
            /**
             * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
             * required to access an identity, but can be pretty high.
             **/
            maxAdditionalFields: u32 & AugmentedConst<ApiType>;
            /**
             * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
             * of, e.g., updating judgements.
             **/
            maxRegistrars: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum number of sub-accounts allowed per identified account.
             **/
            maxSubAccounts: u32 & AugmentedConst<ApiType>;
            /**
             * The amount held on deposit for a registered subaccount. This should account for the fact
             * that one storage item's value will increase by the size of an account ID, and there will
             * be another trie item whose value is the size of an account ID plus 32 bytes.
             **/
            subAccountDeposit: u128 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        incentives: {
            /**
             * The period to accumulate rewards
             **/
            accumulatePeriod: u64 & AugmentedConst<ApiType>;
            /**
             * The module id, keep DexShare LP.
             **/
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            /**
             * The source account for native token rewards.
             **/
            rewardsSource: AccountId32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        indices: {
            /**
             * The deposit needed for reserving an index.
             **/
            deposit: u128 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        multisig: {
            /**
             * The base amount of currency needed to reserve for creating a multisig execution or to
             * store a dispatch call for later.
             *
             * This is held for an additional storage item whose value size is
             * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
             * `32 + sizeof(AccountId)` bytes.
             **/
            depositBase: u128 & AugmentedConst<ApiType>;
            /**
             * The amount of currency needed per unit threshold when creating a multisig execution.
             *
             * This is held for adding 32 bytes more into a pre-existing storage value.
             **/
            depositFactor: u128 & AugmentedConst<ApiType>;
            /**
             * The maximum amount of signatories allowed in the multisig.
             **/
            maxSignatories: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        parachainStaking: {
            /**
             * Default number of blocks validation rounds last, as set in the
             * genesis configuration.
             **/
            defaultBlocksPerRound: u64 & AugmentedConst<ApiType>;
            /**
             * Number of rounds a collator has to stay active after submitting a
             * request to leave the set of collator candidates.
             **/
            exitQueueDelay: u32 & AugmentedConst<ApiType>;
            /**
             * Maximum number of delegations which can be made within the same
             * round.
             *
             * NOTE: To prevent re-delegation-reward attacks, we should keep this
             * to be one.
             **/
            maxDelegationsPerRound: u32 & AugmentedConst<ApiType>;
            /**
             * Maximum number of delegators a single collator can have.
             **/
            maxDelegatorsPerCollator: u32 & AugmentedConst<ApiType>;
            /**
             * Maximum size of the top candidates set.
             **/
            maxTopCandidates: u32 & AugmentedConst<ApiType>;
            /**
             * Max number of concurrent active unstaking requests before
             * unlocking.
             *
             * NOTE: To protect against irremovability of a candidate or delegator,
             * we only allow for MaxUnstakeRequests - 1 many manual unstake
             * requests. The last one serves as a placeholder for the cases of
             * calling either `kick_delegator`, force_remove_candidate` or
             * `execute_leave_candidates`. Otherwise, a user could max out their
             * unstake requests and prevent themselves from being kicked from the
             * set of candidates/delegators until they unlock their funds.
             **/
            maxUnstakeRequests: u32 & AugmentedConst<ApiType>;
            /**
             * Minimum number of blocks validation rounds can last.
             **/
            minBlocksPerRound: u64 & AugmentedConst<ApiType>;
            /**
             * Minimum stake required for any account to be added to the set of
             * candidates.
             **/
            minCollatorCandidateStake: u128 & AugmentedConst<ApiType>;
            /**
             * Minimum number of collators selected from the set of candidates at
             * every validation round.
             **/
            minCollators: u32 & AugmentedConst<ApiType>;
            /**
             * Minimum stake required for any account to be elected as validator
             * for a round.
             **/
            minCollatorStake: u128 & AugmentedConst<ApiType>;
            /**
             * Minimum stake required for any account to become a delegator.
             **/
            minDelegatorStake: u128 & AugmentedConst<ApiType>;
            /**
             * Minimum number of collators which cannot leave the network if there
             * are no others.
             **/
            minRequiredCollators: u32 & AugmentedConst<ApiType>;
            /**
             * The rate in percent for the network rewards which are based on the
             * maximum number of collators and the maximum amount a collator can
             * stake.
             **/
            networkRewardRate: Perquintill & AugmentedConst<ApiType>;
            /**
             * The starting block number for the network rewards. Once the current
             * block number exceeds this start, the beneficiary will receive the
             * configured reward in each block.
             **/
            networkRewardStart: u64 & AugmentedConst<ApiType>;
            /**
             * Number of blocks for which unstaked balance will still be locked
             * before it can be unlocked by actively calling the extrinsic
             * `unlock_unstaked`.
             **/
            stakeDuration: u64 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        proxy: {
            /**
             * The base amount of currency needed to reserve for creating an announcement.
             *
             * This is held when a new storage item holding a `Balance` is created (typically 16
             * bytes).
             **/
            announcementDepositBase: u128 & AugmentedConst<ApiType>;
            /**
             * The amount of currency needed per announcement made.
             *
             * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
             * into a pre-existing storage value.
             **/
            announcementDepositFactor: u128 & AugmentedConst<ApiType>;
            /**
             * The maximum amount of time-delayed announcements that are allowed to be pending.
             **/
            maxPending: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum amount of proxies allowed for a single account.
             **/
            maxProxies: u32 & AugmentedConst<ApiType>;
            /**
             * The base amount of currency needed to reserve for creating a proxy.
             *
             * This is held for an additional storage item whose value size is
             * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
             **/
            proxyDepositBase: u128 & AugmentedConst<ApiType>;
            /**
             * The amount of currency needed per proxy added.
             *
             * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
             * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
             * into account `32 + proxy_type.encode().len()` bytes of data.
             **/
            proxyDepositFactor: u128 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        referenda: {
            /**
             * Quantization level for the referendum wakeup scheduler. A higher number will result in
             * fewer storage reads/writes needed for smaller voters, but also result in delays to the
             * automatic referendum status changes. Explicit servicing instructions are unaffected.
             **/
            alarmInterval: u64 & AugmentedConst<ApiType>;
            /**
             * Maximum size of the referendum queue for a single track.
             **/
            maxQueued: u32 & AugmentedConst<ApiType>;
            /**
             * The minimum amount to be used as a deposit for a public referendum proposal.
             **/
            submissionDeposit: u128 & AugmentedConst<ApiType>;
            /**
             * Information concerning the different referendum tracks.
             **/
            tracks: Vec<ITuple<[u16, PalletReferendaTrackInfo]>> & AugmentedConst<ApiType>;
            /**
             * The number of blocks after submission that a referendum must begin being decided by.
             * Once this passes, then anyone may cancel the referendum.
             **/
            undecidingTimeout: u64 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        scheduler: {
            /**
             * The maximum weight that may be scheduled per block for any dispatchables.
             **/
            maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
            /**
             * The maximum number of scheduled calls in the queue for a single block.
             *
             * NOTE:
             * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
             * higher limit under `runtime-benchmarks` feature.
             **/
            maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        system: {
            /**
             * Maximum number of block number to block hash mappings to keep (oldest pruned first).
             **/
            blockHashCount: u64 & AugmentedConst<ApiType>;
            /**
             * The maximum length of a block (in bytes).
             **/
            blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
            /**
             * Block & extrinsics weights: base values and limits.
             **/
            blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
            /**
             * The weight of runtime database operations the runtime can invoke.
             **/
            dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
            /**
             * The designated SS58 prefix of this chain.
             *
             * This replaces the "ss58Format" property declared in the chain spec. Reason is
             * that the runtime should know about the prefix in order to make use of it as
             * an identifier of the chain.
             **/
            ss58Prefix: u16 & AugmentedConst<ApiType>;
            /**
             * Get the chain's current version.
             **/
            version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        timestamp: {
            /**
             * The minimum period between blocks. Beware that this is different to the *expected*
             * period that the block production apparatus provides. Your chosen consensus system will
             * generally work with this to determine a sensible block time. e.g. For Aura, it will be
             * double this period on default settings.
             **/
            minimumPeriod: u64 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        tokens: {
            maxLocks: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum number of named reserves that can exist on an account.
             **/
            maxReserves: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        transactionPayment: {
            /**
             * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
             * `priority`
             *
             * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
             * added to a tip component in regular `priority` calculations.
             * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
             * extrinsic (with no tip), by including a tip value greater than the virtual tip.
             *
             * ```rust,ignore
             * // For `Normal`
             * let priority = priority_calc(tip);
             *
             * // For `Operational`
             * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
             * let priority = priority_calc(tip + virtual_tip);
             * ```
             *
             * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
             * sent with the transaction. So, not only does the transaction get a priority bump based
             * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
             * transactions.
             **/
            operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        treasury: {
            /**
             * Percentage of spare funds (if any) that are burnt per spend period.
             **/
            burn: Permill & AugmentedConst<ApiType>;
            /**
             * The maximum number of approvals that can wait in the spending queue.
             *
             * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
             **/
            maxApprovals: u32 & AugmentedConst<ApiType>;
            /**
             * The treasury's pallet id, used for deriving its sovereign account ID.
             **/
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            /**
             * Fraction of a proposal's value that should be bonded in order to place the proposal.
             * An accepted proposal gets these back. A rejected proposal does not.
             **/
            proposalBond: Permill & AugmentedConst<ApiType>;
            /**
             * Maximum amount of funds that should be placed in a deposit for making a proposal.
             **/
            proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
            /**
             * Minimum amount of funds that should be placed in a deposit for making a proposal.
             **/
            proposalBondMinimum: u128 & AugmentedConst<ApiType>;
            /**
             * Period between successive spends.
             **/
            spendPeriod: u64 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        txPause: {
            /**
             * Maximum length for pallet name and call name SCALE encoded string names.
             *
             * TOO LONG NAMES WILL BE TREATED AS PAUSED.
             **/
            maxNameLen: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        utility: {
            /**
             * The limit on the number of batched calls.
             **/
            batchedCallsLimit: u32 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        vesting: {
            maxVestingSchedules: u32 & AugmentedConst<ApiType>;
            /**
             * The minimum amount transferred to call `vested_transfer`.
             **/
            minVestedTransfer: u128 & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
        xTokens: {
            /**
             * Base XCM weight.
             *
             * The actually weight for an XCM message is `T::BaseXcmWeight +
             * T::Weigher::weight(&msg)`.
             **/
            baseXcmWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
            /**
             * Self chain location.
             **/
            selfLocation: StagingXcmV3MultiLocation & AugmentedConst<ApiType>;
            /**
             * Generic const
             **/
            [key: string]: Codec;
        };
    }
}
