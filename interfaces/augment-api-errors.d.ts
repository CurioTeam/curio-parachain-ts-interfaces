import '@polkadot/api-base/types/errors';
import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';
export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;
declare module '@polkadot/api-base/types/errors' {
    interface AugmentedErrors<ApiType extends ApiTypes> {
        assetRegistry: {
            /**
             * Asset was not found.
             **/
            AssetNotFound: AugmentedError<ApiType>;
            /**
             * The version of the `VersionedMultiLocation` value used is not able
             * to be interpreted.
             **/
            BadVersion: AugmentedError<ApiType>;
            /**
             * Another asset was already register with this asset id.
             **/
            ConflictingAssetId: AugmentedError<ApiType>;
            /**
             * Another asset was already register with this location.
             **/
            ConflictingLocation: AugmentedError<ApiType>;
            /**
             * The asset id is invalid.
             **/
            InvalidAssetId: AugmentedError<ApiType>;
            /**
             * Name or symbol is too long.
             **/
            InvalidAssetString: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        balances: {
            /**
             * Beneficiary account must pre-exist.
             **/
            DeadAccount: AugmentedError<ApiType>;
            /**
             * Value too low to create account due to existential deposit.
             **/
            ExistentialDeposit: AugmentedError<ApiType>;
            /**
             * A vesting schedule already exists for this account.
             **/
            ExistingVestingSchedule: AugmentedError<ApiType>;
            /**
             * Transfer/payment would kill account.
             **/
            Expendability: AugmentedError<ApiType>;
            /**
             * Balance too low to send value.
             **/
            InsufficientBalance: AugmentedError<ApiType>;
            /**
             * Account liquidity restrictions prevent withdrawal.
             **/
            LiquidityRestrictions: AugmentedError<ApiType>;
            /**
             * Number of freezes exceed `MaxFreezes`.
             **/
            TooManyFreezes: AugmentedError<ApiType>;
            /**
             * Number of holds exceed `MaxHolds`.
             **/
            TooManyHolds: AugmentedError<ApiType>;
            /**
             * Number of named reserves exceed `MaxReserves`.
             **/
            TooManyReserves: AugmentedError<ApiType>;
            /**
             * Vesting balance too high to send value.
             **/
            VestingBalance: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        bounties: {
            /**
             * The bounty cannot be closed because it has active child bounties.
             **/
            HasActiveChildBounty: AugmentedError<ApiType>;
            /**
             * Proposer's balance is too low.
             **/
            InsufficientProposersBalance: AugmentedError<ApiType>;
            /**
             * Invalid bounty fee.
             **/
            InvalidFee: AugmentedError<ApiType>;
            /**
             * No proposal or bounty at that index.
             **/
            InvalidIndex: AugmentedError<ApiType>;
            /**
             * Invalid bounty value.
             **/
            InvalidValue: AugmentedError<ApiType>;
            /**
             * A bounty payout is pending.
             * To cancel the bounty, you must unassign and slash the curator.
             **/
            PendingPayout: AugmentedError<ApiType>;
            /**
             * The bounties cannot be claimed/closed because it's still in the countdown period.
             **/
            Premature: AugmentedError<ApiType>;
            /**
             * The reason given is just too big.
             **/
            ReasonTooBig: AugmentedError<ApiType>;
            /**
             * Require bounty curator.
             **/
            RequireCurator: AugmentedError<ApiType>;
            /**
             * Too many approvals are already queued.
             **/
            TooManyQueued: AugmentedError<ApiType>;
            /**
             * The bounty status is unexpected.
             **/
            UnexpectedStatus: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        bridge: {
            /**
             * The Ethereum account is already blacklisted.
             **/
            AlreadyBlacklistedEth: AugmentedError<ApiType>;
            /**
             * The Substrate account is already blacklisted.
             **/
            AlreadyBlacklistedSub: AugmentedError<ApiType>;
            /**
             * The account is already a bridge manager.
             **/
            AlreadyManager: AugmentedError<ApiType>;
            /**
             * The Ethereum account is not already blacklisted.
             **/
            AlreadyNotBlacklistedEth: AugmentedError<ApiType>;
            /**
             * The Substrate account is not already blacklisted.
             **/
            AlreadyNotBlacklistedSub: AugmentedError<ApiType>;
            /**
             * The account is not already a bridge manager.
             **/
            AlreadyNotManager: AugmentedError<ApiType>;
            /**
             * The bridge is not already paused.
             **/
            AlreadyNotPaused: AugmentedError<ApiType>;
            /**
             * The bridge has already been paused.
             **/
            AlreadyPaused: AugmentedError<ApiType>;
            /**
             * The bridge is paused.
             **/
            BridgePaused: AugmentedError<ApiType>;
            /**
             * The currency is not already paused.
             **/
            CurrencyAlreadyNotPaused: AugmentedError<ApiType>;
            /**
             * The currency has already been paused.
             **/
            CurrencyAlreadyPaused: AugmentedError<ApiType>;
            /**
             * The currency is already supported.
             **/
            CurrencyAlreadySupported: AugmentedError<ApiType>;
            /**
             * The currency is paused.
             **/
            CurrencyNotActive: AugmentedError<ApiType>;
            /**
             * The currency is not paused.
             **/
            CurrencyNotPaused: AugmentedError<ApiType>;
            /**
             * The currency is not supported.
             **/
            CurrencyNotSupported: AugmentedError<ApiType>;
            /**
             * The Ethereum account is blacklisted.
             **/
            EthAccountBlacklisted: AugmentedError<ApiType>;
            /**
             * Insufficient CGT bridged supply.
             **/
            InsufficientNativeBridged: AugmentedError<ApiType>;
            /**
             * The maximum batch size exceeded.
             **/
            MaxBatchSizeExceeded: AugmentedError<ApiType>;
            /**
             * The account request is already being processed.
             **/
            RequestAlreadyProcessed: AugmentedError<ApiType>;
            /**
             * The sender is not a bridge manager.
             **/
            SenderNotBridgeManager: AugmentedError<ApiType>;
            /**
             * The Substrate account is blacklisted.
             **/
            SubAccountBlacklisted: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        convictionVoting: {
            /**
             * The account is already delegating.
             **/
            AlreadyDelegating: AugmentedError<ApiType>;
            /**
             * The account currently has votes attached to it and the operation cannot succeed until
             * these are removed, either through `unvote` or `reap_vote`.
             **/
            AlreadyVoting: AugmentedError<ApiType>;
            /**
             * The class ID supplied is invalid.
             **/
            BadClass: AugmentedError<ApiType>;
            /**
             * The class must be supplied since it is not easily determinable from the state.
             **/
            ClassNeeded: AugmentedError<ApiType>;
            /**
             * Too high a balance was provided that the account cannot afford.
             **/
            InsufficientFunds: AugmentedError<ApiType>;
            /**
             * Maximum number of votes reached.
             **/
            MaxVotesReached: AugmentedError<ApiType>;
            /**
             * Delegation to oneself makes no sense.
             **/
            Nonsense: AugmentedError<ApiType>;
            /**
             * The actor has no permission to conduct the action.
             **/
            NoPermission: AugmentedError<ApiType>;
            /**
             * The actor has no permission to conduct the action right now but will do in the future.
             **/
            NoPermissionYet: AugmentedError<ApiType>;
            /**
             * The account is not currently delegating.
             **/
            NotDelegating: AugmentedError<ApiType>;
            /**
             * Poll is not ongoing.
             **/
            NotOngoing: AugmentedError<ApiType>;
            /**
             * The given account did not vote on the poll.
             **/
            NotVoter: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        cumulusXcm: {
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        currencies: {
            /**
             * Unable to convert the Amount type into Balance.
             **/
            AmountIntoBalanceFailed: AugmentedError<ApiType>;
            /**
             * Balance is too low.
             **/
            BalanceTooLow: AugmentedError<ApiType>;
            /**
             * Deposit result is not expected
             **/
            DepositFailed: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        dex: {
            /**
             * Trading pair is already Enabled
             **/
            AlreadyEnabled: AugmentedError<ApiType>;
            /**
             * Cannot swap
             **/
            CannotSwap: AugmentedError<ApiType>;
            /**
             * Supply amount is more than max_supply_amount
             **/
            ExcessiveSupplyAmount: AugmentedError<ApiType>;
            /**
             * Liquidity is not enough
             **/
            InsufficientLiquidity: AugmentedError<ApiType>;
            /**
             * Target amount is less to min_target_amount
             **/
            InsufficientTargetAmount: AugmentedError<ApiType>;
            /**
             * The increment of provision is invalid
             **/
            InvalidContributionIncrement: AugmentedError<ApiType>;
            /**
             * Invalid currency id
             **/
            InvalidCurrencyId: AugmentedError<ApiType>;
            /**
             * The increment of liquidity is invalid
             **/
            InvalidLiquidityIncrement: AugmentedError<ApiType>;
            /**
             * The trading path is invalid
             **/
            InvalidTradingPath: AugmentedError<ApiType>;
            /**
             * Invalid trading path length
             **/
            InvalidTradingPathLength: AugmentedError<ApiType>;
            /**
             * The swap dosen't meet the invariant check
             **/
            InvariantCheckFailed: AugmentedError<ApiType>;
            /**
             * Trading pair must be in Disabled status
             **/
            MustBeDisabled: AugmentedError<ApiType>;
            /**
             * Trading pair must be in Enabled status
             **/
            MustBeEnabled: AugmentedError<ApiType>;
            /**
             * Trading pair must be in Provisioning status
             **/
            MustBeProvisioning: AugmentedError<ApiType>;
            /**
             * This trading pair is not allowed to be listed
             **/
            NotAllowedList: AugmentedError<ApiType>;
            /**
             * Not allowed to refund provision
             **/
            NotAllowedRefund: AugmentedError<ApiType>;
            /**
             * Trading pair is still provisioning
             **/
            StillProvisioning: AugmentedError<ApiType>;
            /**
             * The liquidity withdrawn is unacceptable
             **/
            UnacceptableLiquidityWithdrawn: AugmentedError<ApiType>;
            /**
             * The share increment is unacceptable
             **/
            UnacceptableShareIncrement: AugmentedError<ApiType>;
            /**
             * The Provision is unqualified to be converted to `Enabled`
             **/
            UnqualifiedProvision: AugmentedError<ApiType>;
            /**
             * The supply amount is zero
             **/
            ZeroSupplyAmount: AugmentedError<ApiType>;
            /**
             * The target amount is zero
             **/
            ZeroTargetAmount: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        dmpQueue: {
            /**
             * The amount of weight given is possibly not enough for executing the message.
             **/
            OverLimit: AugmentedError<ApiType>;
            /**
             * The message index given is unknown.
             **/
            Unknown: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        fellowshipCollective: {
            /**
             * Account is already a member.
             **/
            AlreadyMember: AugmentedError<ApiType>;
            /**
             * Unexpected error in state.
             **/
            Corruption: AugmentedError<ApiType>;
            /**
             * The information provided is incorrect.
             **/
            InvalidWitness: AugmentedError<ApiType>;
            /**
             * There are no further records to be removed.
             **/
            NoneRemaining: AugmentedError<ApiType>;
            /**
             * The origin is not sufficiently privileged to do the operation.
             **/
            NoPermission: AugmentedError<ApiType>;
            /**
             * Account is not a member.
             **/
            NotMember: AugmentedError<ApiType>;
            /**
             * The given poll index is unknown or has closed.
             **/
            NotPolling: AugmentedError<ApiType>;
            /**
             * The given poll is still ongoing.
             **/
            Ongoing: AugmentedError<ApiType>;
            /**
             * The member's rank is too low to vote.
             **/
            RankTooLow: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        fellowshipReferenda: {
            /**
             * The referendum index provided is invalid in this context.
             **/
            BadReferendum: AugmentedError<ApiType>;
            /**
             * The referendum status is invalid for this operation.
             **/
            BadStatus: AugmentedError<ApiType>;
            /**
             * The track identifier given was invalid.
             **/
            BadTrack: AugmentedError<ApiType>;
            /**
             * There are already a full complement of referenda in progress for this track.
             **/
            Full: AugmentedError<ApiType>;
            /**
             * Referendum's decision deposit is already paid.
             **/
            HasDeposit: AugmentedError<ApiType>;
            /**
             * The deposit cannot be refunded since none was made.
             **/
            NoDeposit: AugmentedError<ApiType>;
            /**
             * The deposit refunder is not the depositor.
             **/
            NoPermission: AugmentedError<ApiType>;
            /**
             * There was nothing to do in the advancement.
             **/
            NothingToDo: AugmentedError<ApiType>;
            /**
             * Referendum is not ongoing.
             **/
            NotOngoing: AugmentedError<ApiType>;
            /**
             * No track exists for the proposal origin.
             **/
            NoTrack: AugmentedError<ApiType>;
            /**
             * The preimage does not exist.
             **/
            PreimageNotExist: AugmentedError<ApiType>;
            /**
             * The queue of the track is empty.
             **/
            QueueEmpty: AugmentedError<ApiType>;
            /**
             * Any deposit cannot be refunded until after the decision is over.
             **/
            Unfinished: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        identity: {
            /**
             * Account ID is already named.
             **/
            AlreadyClaimed: AugmentedError<ApiType>;
            /**
             * Empty index.
             **/
            EmptyIndex: AugmentedError<ApiType>;
            /**
             * Fee is changed.
             **/
            FeeChanged: AugmentedError<ApiType>;
            /**
             * The index is invalid.
             **/
            InvalidIndex: AugmentedError<ApiType>;
            /**
             * Invalid judgement.
             **/
            InvalidJudgement: AugmentedError<ApiType>;
            /**
             * The target is invalid.
             **/
            InvalidTarget: AugmentedError<ApiType>;
            /**
             * The provided judgement was for a different identity.
             **/
            JudgementForDifferentIdentity: AugmentedError<ApiType>;
            /**
             * Judgement given.
             **/
            JudgementGiven: AugmentedError<ApiType>;
            /**
             * Error that occurs when there is an issue paying for judgement.
             **/
            JudgementPaymentFailed: AugmentedError<ApiType>;
            /**
             * No identity found.
             **/
            NoIdentity: AugmentedError<ApiType>;
            /**
             * Account isn't found.
             **/
            NotFound: AugmentedError<ApiType>;
            /**
             * Account isn't named.
             **/
            NotNamed: AugmentedError<ApiType>;
            /**
             * Sub-account isn't owned by sender.
             **/
            NotOwned: AugmentedError<ApiType>;
            /**
             * Sender is not a sub-account.
             **/
            NotSub: AugmentedError<ApiType>;
            /**
             * Sticky judgement.
             **/
            StickyJudgement: AugmentedError<ApiType>;
            /**
             * Too many additional fields.
             **/
            TooManyFields: AugmentedError<ApiType>;
            /**
             * Maximum amount of registrars reached. Cannot add any more.
             **/
            TooManyRegistrars: AugmentedError<ApiType>;
            /**
             * Too many subs-accounts.
             **/
            TooManySubAccounts: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        incentives: {
            /**
             * Invalid currency id
             **/
            InvalidCurrencyId: AugmentedError<ApiType>;
            /**
             * Invalid pool id
             **/
            InvalidPoolId: AugmentedError<ApiType>;
            /**
             * Invalid rate
             **/
            InvalidRate: AugmentedError<ApiType>;
            /**
             * Share amount is not enough
             **/
            NotEnough: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        indices: {
            /**
             * The index was not available.
             **/
            InUse: AugmentedError<ApiType>;
            /**
             * The index was not already assigned.
             **/
            NotAssigned: AugmentedError<ApiType>;
            /**
             * The index is assigned to another account.
             **/
            NotOwner: AugmentedError<ApiType>;
            /**
             * The source and destination accounts are identical.
             **/
            NotTransfer: AugmentedError<ApiType>;
            /**
             * The index is permanent and may not be freed/changed.
             **/
            Permanent: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        multisig: {
            /**
             * Call is already approved by this signatory.
             **/
            AlreadyApproved: AugmentedError<ApiType>;
            /**
             * The data to be stored is already stored.
             **/
            AlreadyStored: AugmentedError<ApiType>;
            /**
             * The maximum weight information provided was too low.
             **/
            MaxWeightTooLow: AugmentedError<ApiType>;
            /**
             * Threshold must be 2 or greater.
             **/
            MinimumThreshold: AugmentedError<ApiType>;
            /**
             * Call doesn't need any (more) approvals.
             **/
            NoApprovalsNeeded: AugmentedError<ApiType>;
            /**
             * Multisig operation not found when attempting to cancel.
             **/
            NotFound: AugmentedError<ApiType>;
            /**
             * No timepoint was given, yet the multisig operation is already underway.
             **/
            NoTimepoint: AugmentedError<ApiType>;
            /**
             * Only the account that originally created the multisig is able to cancel it.
             **/
            NotOwner: AugmentedError<ApiType>;
            /**
             * The sender was contained in the other signatories; it shouldn't be.
             **/
            SenderInSignatories: AugmentedError<ApiType>;
            /**
             * The signatories were provided out of order; they should be ordered.
             **/
            SignatoriesOutOfOrder: AugmentedError<ApiType>;
            /**
             * There are too few signatories in the list.
             **/
            TooFewSignatories: AugmentedError<ApiType>;
            /**
             * There are too many signatories in the list.
             **/
            TooManySignatories: AugmentedError<ApiType>;
            /**
             * A timepoint was given, yet no multisig operation is underway.
             **/
            UnexpectedTimepoint: AugmentedError<ApiType>;
            /**
             * A different timepoint was given to the multisig operation that is underway.
             **/
            WrongTimepoint: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        parachainStaking: {
            /**
             * The delegator has already previously delegated the collator
             * candidate.
             **/
            AlreadyDelegatedCollator: AugmentedError<ApiType>;
            /**
             * The account is already delegating the collator candidate.
             **/
            AlreadyDelegating: AugmentedError<ApiType>;
            /**
             * The collator candidate has already trigger the process to leave the
             * set of collator candidates.
             **/
            AlreadyLeaving: AugmentedError<ApiType>;
            /**
             * The account is already part of the collator candidates set.
             **/
            CandidateExists: AugmentedError<ApiType>;
            /**
             * The account is not part of the collator candidates set.
             **/
            CandidateNotFound: AugmentedError<ApiType>;
            /**
             * The collator candidate is in the process of leaving the set of
             * candidates and thus cannot be delegated to.
             **/
            CannotDelegateIfLeaving: AugmentedError<ApiType>;
            /**
             * The account has a full list of unstaking requests and needs to
             * unlock at least one of these before being able to join (again).
             * NOTE: Can only happen if the account was a candidate or
             * delegator before and either got kicked or exited voluntarily.
             **/
            CannotJoinBeforeUnlocking: AugmentedError<ApiType>;
            /**
             * The collator tried to leave before waiting at least for
             * `ExitQueueDelay` many rounds.
             **/
            CannotLeaveYet: AugmentedError<ApiType>;
            /**
             * The number of selected candidates per staking round is
             * above the maximum value allowed.
             **/
            CannotSetAboveMax: AugmentedError<ApiType>;
            /**
             * The number of selected candidates per staking round is
             * below the minimum value allowed.
             **/
            CannotSetBelowMin: AugmentedError<ApiType>;
            /**
             * The collator candidate is in the process of leaving the set of
             * candidates and cannot perform any other actions in the meantime.
             **/
            CannotStakeIfLeaving: AugmentedError<ApiType>;
            /**
             * The account has not staked enough funds to delegate a collator
             * candidate.
             **/
            DelegationBelowMin: AugmentedError<ApiType>;
            /**
             * The given delegation does not exist in the set of delegations.
             **/
            DelegationNotFound: AugmentedError<ApiType>;
            /**
             * The delegator has exceeded the number of delegations per round which
             * is equal to MaxDelegatorsPerCollator.
             *
             * This protects against attacks in which a delegator can re-delegate
             * from a collator who has already authored a block, to another one
             * which has not in this round.
             **/
            DelegationsPerRoundExceeded: AugmentedError<ApiType>;
            /**
             * The account is already part of the delegators set.
             **/
            DelegatorExists: AugmentedError<ApiType>;
            /**
             * The account is not part of the delegators set.
             **/
            DelegatorNotFound: AugmentedError<ApiType>;
            /**
             * An invalid inflation configuration is trying to be set.
             **/
            InvalidSchedule: AugmentedError<ApiType>;
            /**
             * The delegator has already delegated the maximum number of candidates
             * allowed.
             **/
            MaxCollatorsPerDelegatorExceeded: AugmentedError<ApiType>;
            /**
             * The staking reward being unlocked does not exist.
             * Max unlocking requests reached.
             **/
            NoMoreUnstaking: AugmentedError<ApiType>;
            /**
             * The collator candidate wanted to execute the exit but has not
             * requested to leave before by calling `init_leave_candidates`.
             **/
            NotLeaving: AugmentedError<ApiType>;
            /**
             * The account has not delegated any collator candidate yet, hence it
             * is not in the set of delegators.
             **/
            NotYetDelegating: AugmentedError<ApiType>;
            /**
             * Cannot claim rewards if empty.
             **/
            RewardsNotFound: AugmentedError<ApiType>;
            /**
             * Provided staked value is zero. Should never be thrown.
             **/
            StakeNotFound: AugmentedError<ApiType>;
            /**
             * The reward rate cannot be adjusted yet as an entire year has not
             * passed.
             **/
            TooEarly: AugmentedError<ApiType>;
            /**
             * The set of collator candidates would fall below the required minimum
             * if the collator left.
             **/
            TooFewCollatorCandidates: AugmentedError<ApiType>;
            /**
             * The collator candidate has already reached the maximum number of
             * delegators.
             *
             * This error is generated in case a new delegation request does not
             * stake enough funds to replace some other existing delegation.
             **/
            TooManyDelegators: AugmentedError<ApiType>;
            /**
             * The collator delegate or the delegator is trying to un-stake more
             * funds that are currently staked.
             **/
            Underflow: AugmentedError<ApiType>;
            /**
             * Cannot unlock when Unstaked is empty.
             **/
            UnstakingIsEmpty: AugmentedError<ApiType>;
            /**
             * The account has already staked the maximum amount of funds possible.
             **/
            ValStakeAboveMax: AugmentedError<ApiType>;
            /**
             * The account has not staked enough funds to be added to the collator
             * candidates set.
             **/
            ValStakeBelowMin: AugmentedError<ApiType>;
            /**
             * The account tried to stake more or less with amount zero.
             **/
            ValStakeZero: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        parachainSystem: {
            /**
             * The inherent which supplies the host configuration did not run this block.
             **/
            HostConfigurationNotAvailable: AugmentedError<ApiType>;
            /**
             * No code upgrade has been authorized.
             **/
            NothingAuthorized: AugmentedError<ApiType>;
            /**
             * No validation function upgrade is currently scheduled.
             **/
            NotScheduled: AugmentedError<ApiType>;
            /**
             * Attempt to upgrade validation function while existing upgrade pending.
             **/
            OverlappingUpgrades: AugmentedError<ApiType>;
            /**
             * Polkadot currently prohibits this parachain from upgrading its validation function.
             **/
            ProhibitedByPolkadot: AugmentedError<ApiType>;
            /**
             * The supplied validation function has compiled into a blob larger than Polkadot is
             * willing to run.
             **/
            TooBig: AugmentedError<ApiType>;
            /**
             * The given code upgrade has not been authorized.
             **/
            Unauthorized: AugmentedError<ApiType>;
            /**
             * The inherent which supplies the validation data did not run this block.
             **/
            ValidationDataNotAvailable: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        polkadotXcm: {
            /**
             * The given account is not an identifiable sovereign account for any location.
             **/
            AccountNotSovereign: AugmentedError<ApiType>;
            /**
             * The location is invalid since it already has a subscription from us.
             **/
            AlreadySubscribed: AugmentedError<ApiType>;
            /**
             * The given location could not be used (e.g. because it cannot be expressed in the
             * desired version of XCM).
             **/
            BadLocation: AugmentedError<ApiType>;
            /**
             * The version of the `Versioned` value used is not able to be interpreted.
             **/
            BadVersion: AugmentedError<ApiType>;
            /**
             * Could not re-anchor the assets to declare the fees for the destination chain.
             **/
            CannotReanchor: AugmentedError<ApiType>;
            /**
             * The destination `MultiLocation` provided cannot be inverted.
             **/
            DestinationNotInvertible: AugmentedError<ApiType>;
            /**
             * The assets to be sent are empty.
             **/
            Empty: AugmentedError<ApiType>;
            /**
             * The operation required fees to be paid which the initiator could not meet.
             **/
            FeesNotMet: AugmentedError<ApiType>;
            /**
             * The message execution fails the filter.
             **/
            Filtered: AugmentedError<ApiType>;
            /**
             * The unlock operation cannot succeed because there are still consumers of the lock.
             **/
            InUse: AugmentedError<ApiType>;
            /**
             * Invalid asset for the operation.
             **/
            InvalidAsset: AugmentedError<ApiType>;
            /**
             * Origin is invalid for sending.
             **/
            InvalidOrigin: AugmentedError<ApiType>;
            /**
             * A remote lock with the corresponding data could not be found.
             **/
            LockNotFound: AugmentedError<ApiType>;
            /**
             * The owner does not own (all) of the asset that they wish to do the operation on.
             **/
            LowBalance: AugmentedError<ApiType>;
            /**
             * The referenced subscription could not be found.
             **/
            NoSubscription: AugmentedError<ApiType>;
            /**
             * There was some other issue (i.e. not to do with routing) in sending the message.
             * Perhaps a lack of space for buffering the message.
             **/
            SendFailure: AugmentedError<ApiType>;
            /**
             * Too many assets have been attempted for transfer.
             **/
            TooManyAssets: AugmentedError<ApiType>;
            /**
             * The asset owner has too many locks on the asset.
             **/
            TooManyLocks: AugmentedError<ApiType>;
            /**
             * The desired destination was unreachable, generally because there is a no way of routing
             * to it.
             **/
            Unreachable: AugmentedError<ApiType>;
            /**
             * The message's weight could not be determined.
             **/
            UnweighableMessage: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        preimage: {
            /**
             * Preimage has already been noted on-chain.
             **/
            AlreadyNoted: AugmentedError<ApiType>;
            /**
             * The user is not authorized to perform this action.
             **/
            NotAuthorized: AugmentedError<ApiType>;
            /**
             * The preimage cannot be removed since it has not yet been noted.
             **/
            NotNoted: AugmentedError<ApiType>;
            /**
             * The preimage request cannot be removed since no outstanding requests exist.
             **/
            NotRequested: AugmentedError<ApiType>;
            /**
             * A preimage may not be removed when there are outstanding requests.
             **/
            Requested: AugmentedError<ApiType>;
            /**
             * Preimage is too large to store on-chain.
             **/
            TooBig: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        proxy: {
            /**
             * Account is already a proxy.
             **/
            Duplicate: AugmentedError<ApiType>;
            /**
             * Call may not be made by proxy because it may escalate its privileges.
             **/
            NoPermission: AugmentedError<ApiType>;
            /**
             * Cannot add self as proxy.
             **/
            NoSelfProxy: AugmentedError<ApiType>;
            /**
             * Proxy registration not found.
             **/
            NotFound: AugmentedError<ApiType>;
            /**
             * Sender is not a proxy of the account to be proxied.
             **/
            NotProxy: AugmentedError<ApiType>;
            /**
             * There are too many proxies registered or too many announcements pending.
             **/
            TooMany: AugmentedError<ApiType>;
            /**
             * Announcement, if made at all, was made too recently.
             **/
            Unannounced: AugmentedError<ApiType>;
            /**
             * A call which is incompatible with the proxy type's filter was attempted.
             **/
            Unproxyable: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        referenda: {
            /**
             * The referendum index provided is invalid in this context.
             **/
            BadReferendum: AugmentedError<ApiType>;
            /**
             * The referendum status is invalid for this operation.
             **/
            BadStatus: AugmentedError<ApiType>;
            /**
             * The track identifier given was invalid.
             **/
            BadTrack: AugmentedError<ApiType>;
            /**
             * There are already a full complement of referenda in progress for this track.
             **/
            Full: AugmentedError<ApiType>;
            /**
             * Referendum's decision deposit is already paid.
             **/
            HasDeposit: AugmentedError<ApiType>;
            /**
             * The deposit cannot be refunded since none was made.
             **/
            NoDeposit: AugmentedError<ApiType>;
            /**
             * The deposit refunder is not the depositor.
             **/
            NoPermission: AugmentedError<ApiType>;
            /**
             * There was nothing to do in the advancement.
             **/
            NothingToDo: AugmentedError<ApiType>;
            /**
             * Referendum is not ongoing.
             **/
            NotOngoing: AugmentedError<ApiType>;
            /**
             * No track exists for the proposal origin.
             **/
            NoTrack: AugmentedError<ApiType>;
            /**
             * The preimage does not exist.
             **/
            PreimageNotExist: AugmentedError<ApiType>;
            /**
             * The queue of the track is empty.
             **/
            QueueEmpty: AugmentedError<ApiType>;
            /**
             * Any deposit cannot be refunded until after the decision is over.
             **/
            Unfinished: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        rewards: {
            CanSplitOnlyLessThanShare: AugmentedError<ApiType>;
            /**
             * Pool does not exist
             **/
            PoolDoesNotExist: AugmentedError<ApiType>;
            ShareDoesNotExist: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        scheduler: {
            /**
             * Failed to schedule a call
             **/
            FailedToSchedule: AugmentedError<ApiType>;
            /**
             * Attempt to use a non-named function on a named task.
             **/
            Named: AugmentedError<ApiType>;
            /**
             * Cannot find the scheduled call.
             **/
            NotFound: AugmentedError<ApiType>;
            /**
             * Reschedule failed because it does not change scheduled time.
             **/
            RescheduleNoChange: AugmentedError<ApiType>;
            /**
             * Given target block number is in the past.
             **/
            TargetBlockNumberInPast: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        session: {
            /**
             * Registered duplicate key.
             **/
            DuplicatedKey: AugmentedError<ApiType>;
            /**
             * Invalid ownership proof.
             **/
            InvalidProof: AugmentedError<ApiType>;
            /**
             * Key setting account is not live, so it's impossible to associate keys.
             **/
            NoAccount: AugmentedError<ApiType>;
            /**
             * No associated validator ID for account.
             **/
            NoAssociatedValidatorId: AugmentedError<ApiType>;
            /**
             * No keys are associated with this account.
             **/
            NoKeys: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        sudo: {
            /**
             * Sender must be the Sudo account
             **/
            RequireSudo: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        system: {
            /**
             * The origin filter prevent the call to be dispatched.
             **/
            CallFiltered: AugmentedError<ApiType>;
            /**
             * Failed to extract the runtime version from the new runtime.
             *
             * Either calling `Core_version` or decoding `RuntimeVersion` failed.
             **/
            FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
            /**
             * The name of specification does not match between the current runtime
             * and the new runtime.
             **/
            InvalidSpecName: AugmentedError<ApiType>;
            /**
             * Suicide called when the account has non-default composite data.
             **/
            NonDefaultComposite: AugmentedError<ApiType>;
            /**
             * There is a non-zero reference count preventing the account from being purged.
             **/
            NonZeroRefCount: AugmentedError<ApiType>;
            /**
             * The specification version is not allowed to decrease between the current runtime
             * and the new runtime.
             **/
            SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        tokens: {
            /**
             * Cannot convert Amount into Balance type
             **/
            AmountIntoBalanceFailed: AugmentedError<ApiType>;
            /**
             * The balance is too low
             **/
            BalanceTooLow: AugmentedError<ApiType>;
            /**
             * Beneficiary account must pre-exist
             **/
            DeadAccount: AugmentedError<ApiType>;
            /**
             * Value too low to create account due to existential deposit
             **/
            ExistentialDeposit: AugmentedError<ApiType>;
            /**
             * Transfer/payment would kill account
             **/
            KeepAlive: AugmentedError<ApiType>;
            /**
             * Failed because liquidity restrictions due to locking
             **/
            LiquidityRestrictions: AugmentedError<ApiType>;
            /**
             * Failed because the maximum locks was exceeded
             **/
            MaxLocksExceeded: AugmentedError<ApiType>;
            TooManyReserves: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        treasury: {
            /**
             * The spend origin is valid but the amount it is allowed to spend is lower than the
             * amount to be spent.
             **/
            InsufficientPermission: AugmentedError<ApiType>;
            /**
             * Proposer's balance is too low.
             **/
            InsufficientProposersBalance: AugmentedError<ApiType>;
            /**
             * No proposal or bounty at that index.
             **/
            InvalidIndex: AugmentedError<ApiType>;
            /**
             * Proposal has not been approved.
             **/
            ProposalNotApproved: AugmentedError<ApiType>;
            /**
             * Too many approvals in the queue.
             **/
            TooManyApprovals: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        txPause: {
            /**
             * The call is paused.
             **/
            IsPaused: AugmentedError<ApiType>;
            /**
             * The call is unpaused.
             **/
            IsUnpaused: AugmentedError<ApiType>;
            NotFound: AugmentedError<ApiType>;
            /**
             * The call is whitelisted and cannot be paused.
             **/
            Unpausable: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        unknownTokens: {
            /**
             * The operation will cause balance to overflow.
             **/
            BalanceOverflow: AugmentedError<ApiType>;
            /**
             * The balance is too low.
             **/
            BalanceTooLow: AugmentedError<ApiType>;
            /**
             * Unhandled asset.
             **/
            UnhandledAsset: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        utility: {
            /**
             * Too many calls batched.
             **/
            TooManyCalls: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        vesting: {
            /**
             * Amount being transferred is too low to create a vesting schedule.
             **/
            AmountLow: AugmentedError<ApiType>;
            /**
             * The account already has `MaxVestingSchedules` count of schedules and thus
             * cannot add another one. Consider merging existing schedules in order to add another.
             **/
            AtMaxVestingSchedules: AugmentedError<ApiType>;
            /**
             * Failed to create a new schedule because some parameter was invalid.
             **/
            InvalidScheduleParams: AugmentedError<ApiType>;
            /**
             * The account given is not vesting.
             **/
            NotVesting: AugmentedError<ApiType>;
            /**
             * An index was out of bounds of the vesting schedules.
             **/
            ScheduleIndexOutOfBounds: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        whitelistFrame: {
            /**
             * The call was already whitelisted; No-Op.
             **/
            CallAlreadyWhitelisted: AugmentedError<ApiType>;
            /**
             * The call was not whitelisted.
             **/
            CallIsNotWhitelisted: AugmentedError<ApiType>;
            /**
             * The weight of the decoded call was higher than the witness.
             **/
            InvalidCallWeightWitness: AugmentedError<ApiType>;
            /**
             * The preimage of the call hash could not be loaded.
             **/
            UnavailablePreImage: AugmentedError<ApiType>;
            /**
             * The call could not be decoded.
             **/
            UndecodableCall: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        xcmpQueue: {
            /**
             * Bad overweight index.
             **/
            BadOverweightIndex: AugmentedError<ApiType>;
            /**
             * Bad XCM data.
             **/
            BadXcm: AugmentedError<ApiType>;
            /**
             * Bad XCM origin.
             **/
            BadXcmOrigin: AugmentedError<ApiType>;
            /**
             * Failed to send XCM message.
             **/
            FailedToSend: AugmentedError<ApiType>;
            /**
             * Provided weight is possibly not enough to execute the message.
             **/
            WeightOverLimit: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        xTokens: {
            /**
             * Asset has no reserve location.
             **/
            AssetHasNoReserve: AugmentedError<ApiType>;
            /**
             * The specified index does not exist in a MultiAssets struct.
             **/
            AssetIndexNonExistent: AugmentedError<ApiType>;
            /**
             * The version of the `Versioned` value used is not able to be
             * interpreted.
             **/
            BadVersion: AugmentedError<ApiType>;
            /**
             * Could not re-anchor the assets to declare the fees for the
             * destination chain.
             **/
            CannotReanchor: AugmentedError<ApiType>;
            /**
             * The destination `MultiLocation` provided cannot be inverted.
             **/
            DestinationNotInvertible: AugmentedError<ApiType>;
            /**
             * We tried sending distinct asset and fee but they have different
             * reserve chains.
             **/
            DistinctReserveForAssetAndFee: AugmentedError<ApiType>;
            /**
             * Fee is not enough.
             **/
            FeeNotEnough: AugmentedError<ApiType>;
            /**
             * Could not get ancestry of asset reserve location.
             **/
            InvalidAncestry: AugmentedError<ApiType>;
            /**
             * The MultiAsset is invalid.
             **/
            InvalidAsset: AugmentedError<ApiType>;
            /**
             * Invalid transfer destination.
             **/
            InvalidDest: AugmentedError<ApiType>;
            /**
             * MinXcmFee not registered for certain reserve location
             **/
            MinXcmFeeNotDefined: AugmentedError<ApiType>;
            /**
             * Not cross-chain transfer.
             **/
            NotCrossChainTransfer: AugmentedError<ApiType>;
            /**
             * Currency is not cross-chain transferable.
             **/
            NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
            /**
             * Not supported MultiLocation
             **/
            NotSupportedMultiLocation: AugmentedError<ApiType>;
            /**
             * The number of assets to be sent is over the maximum.
             **/
            TooManyAssetsBeingSent: AugmentedError<ApiType>;
            /**
             * The message's weight could not be determined.
             **/
            UnweighableMessage: AugmentedError<ApiType>;
            /**
             * XCM execution failed.
             **/
            XcmExecutionFailed: AugmentedError<ApiType>;
            /**
             * The transfering asset amount is zero.
             **/
            ZeroAmount: AugmentedError<ApiType>;
            /**
             * The fee is zero.
             **/
            ZeroFee: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
    }
}
