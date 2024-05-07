// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
/* eslint-disable sort-keys */
export default {
    /**
     * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: 'u32',
        consumers: 'u32',
        providers: 'u32',
        sufficients: 'u32',
        data: 'PalletBalancesAccountData'
    },
    /**
     * Lookup5: pallet_balances::types::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: 'u128',
        reserved: 'u128',
        frozen: 'u128',
        flags: 'u128'
    },
    /**
     * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
     **/
    FrameSupportDispatchPerDispatchClassWeight: {
        normal: 'SpWeightsWeightV2Weight',
        operational: 'SpWeightsWeightV2Weight',
        mandatory: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup9: sp_weights::weight_v2::Weight
     **/
    SpWeightsWeightV2Weight: {
        refTime: 'Compact<u64>',
        proofSize: 'Compact<u64>'
    },
    /**
     * Lookup14: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: 'Vec<SpRuntimeDigestDigestItem>'
    },
    /**
     * Lookup16: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: 'Bytes',
            __Unused1: 'Null',
            __Unused2: 'Null',
            __Unused3: 'Null',
            Consensus: '([u8;4],Bytes)',
            Seal: '([u8;4],Bytes)',
            PreRuntime: '([u8;4],Bytes)',
            __Unused7: 'Null',
            RuntimeEnvironmentUpdated: 'Null'
        }
    },
    /**
     * Lookup19: frame_system::EventRecord<curio_mainnet_runtime::RuntimeEvent, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: 'FrameSystemPhase',
        event: 'Event',
        topics: 'Vec<H256>'
    },
    /**
     * Lookup21: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: 'FrameSupportDispatchDispatchInfo',
            },
            ExtrinsicFailed: {
                dispatchError: 'SpRuntimeDispatchError',
                dispatchInfo: 'FrameSupportDispatchDispatchInfo',
            },
            CodeUpdated: 'Null',
            NewAccount: {
                account: 'AccountId32',
            },
            KilledAccount: {
                account: 'AccountId32',
            },
            Remarked: {
                _alias: {
                    hash_: 'hash',
                },
                sender: 'AccountId32',
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup22: frame_support::dispatch::DispatchInfo
     **/
    FrameSupportDispatchDispatchInfo: {
        weight: 'SpWeightsWeightV2Weight',
        class: 'FrameSupportDispatchDispatchClass',
        paysFee: 'FrameSupportDispatchPays'
    },
    /**
     * Lookup23: frame_support::dispatch::DispatchClass
     **/
    FrameSupportDispatchDispatchClass: {
        _enum: ['Normal', 'Operational', 'Mandatory']
    },
    /**
     * Lookup24: frame_support::dispatch::Pays
     **/
    FrameSupportDispatchPays: {
        _enum: ['Yes', 'No']
    },
    /**
     * Lookup25: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: 'Null',
            CannotLookup: 'Null',
            BadOrigin: 'Null',
            Module: 'SpRuntimeModuleError',
            ConsumerRemaining: 'Null',
            NoProviders: 'Null',
            TooManyConsumers: 'Null',
            Token: 'SpRuntimeTokenError',
            Arithmetic: 'SpArithmeticArithmeticError',
            Transactional: 'SpRuntimeTransactionalError',
            Exhausted: 'Null',
            Corruption: 'Null',
            Unavailable: 'Null',
            RootNotAllowed: 'Null'
        }
    },
    /**
     * Lookup26: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: 'u8',
        error: '[u8;4]'
    },
    /**
     * Lookup27: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
    },
    /**
     * Lookup28: sp_arithmetic::ArithmeticError
     **/
    SpArithmeticArithmeticError: {
        _enum: ['Underflow', 'Overflow', 'DivisionByZero']
    },
    /**
     * Lookup29: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: ['LimitReached', 'NoLayer']
    },
    /**
     * Lookup30: pallet_indices::pallet::Event<T>
     **/
    PalletIndicesEvent: {
        _enum: {
            IndexAssigned: {
                who: 'AccountId32',
                index: 'u32',
            },
            IndexFreed: {
                index: 'u32',
            },
            IndexFrozen: {
                index: 'u32',
                who: 'AccountId32'
            }
        }
    },
    /**
     * Lookup31: cumulus_pallet_parachain_system::pallet::Event<T>
     **/
    CumulusPalletParachainSystemEvent: {
        _enum: {
            ValidationFunctionStored: 'Null',
            ValidationFunctionApplied: {
                relayChainBlockNum: 'u32',
            },
            ValidationFunctionDiscarded: 'Null',
            UpgradeAuthorized: {
                codeHash: 'H256',
            },
            DownwardMessagesReceived: {
                count: 'u32',
            },
            DownwardMessagesProcessed: {
                weightUsed: 'SpWeightsWeightV2Weight',
                dmqHead: 'H256',
            },
            UpwardMessageSent: {
                messageHash: 'Option<[u8;32]>'
            }
        }
    },
    /**
     * Lookup33: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: 'AccountId32',
                freeBalance: 'u128',
            },
            DustLost: {
                account: 'AccountId32',
                amount: 'u128',
            },
            Transfer: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            BalanceSet: {
                who: 'AccountId32',
                free: 'u128',
            },
            Reserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Unreserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            ReserveRepatriated: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
            },
            Deposit: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Withdraw: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Slashed: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Minted: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Burned: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Suspended: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Restored: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Upgraded: {
                who: 'AccountId32',
            },
            Issued: {
                amount: 'u128',
            },
            Rescinded: {
                amount: 'u128',
            },
            Locked: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Unlocked: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Frozen: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Thawed: {
                who: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup34: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: ['Free', 'Reserved']
    },
    /**
     * Lookup35: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: 'AccountId32',
                actualFee: 'u128',
                tip: 'u128'
            }
        }
    },
    /**
     * Lookup36: pallet_session::pallet::Event
     **/
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: 'u32'
            }
        }
    },
    /**
     * Lookup37: parachain_staking::pallet::Event<T>
     **/
    ParachainStakingEvent: {
        _enum: {
            NewRound: '(u64,u32)',
            EnteredTopCandidates: 'AccountId32',
            LeftTopCandidates: 'AccountId32',
            JoinedCollatorCandidates: '(AccountId32,u128)',
            CollatorStakedMore: '(AccountId32,u128,u128)',
            CollatorStakedLess: '(AccountId32,u128,u128)',
            CollatorScheduledExit: '(u32,AccountId32,u32)',
            CollatorCanceledExit: 'AccountId32',
            CandidateLeft: '(AccountId32,u128)',
            CollatorRemoved: '(AccountId32,u128)',
            MaxCandidateStakeChanged: 'u128',
            DelegatorStakedMore: '(AccountId32,AccountId32,u128,u128)',
            DelegatorStakedLess: '(AccountId32,AccountId32,u128,u128)',
            DelegatorLeft: '(AccountId32,u128)',
            Delegation: '(AccountId32,u128,AccountId32,u128)',
            DelegationReplaced: '(AccountId32,u128,AccountId32,u128,AccountId32,u128)',
            DelegatorLeftCollator: '(AccountId32,AccountId32,u128,u128)',
            Rewarded: '(AccountId32,u128)',
            RoundInflationSet: '(Perquintill,Perquintill,Perquintill,Perquintill)',
            MaxSelectedCandidatesSet: '(u32,u32)',
            BlocksPerRoundSet: '(u32,u64,u64,u64)'
        }
    },
    /**
     * Lookup39: pallet_conviction_voting::pallet::Event<T, I>
     **/
    PalletConvictionVotingEvent: {
        _enum: {
            Delegated: '(AccountId32,AccountId32)',
            Undelegated: 'AccountId32'
        }
    },
    /**
     * Lookup40: pallet_referenda::pallet::Event<T, I>
     **/
    PalletReferendaEvent: {
        _enum: {
            Submitted: {
                index: 'u32',
                track: 'u16',
                proposal: 'FrameSupportPreimagesBounded',
            },
            DecisionDepositPlaced: {
                index: 'u32',
                who: 'AccountId32',
                amount: 'u128',
            },
            DecisionDepositRefunded: {
                index: 'u32',
                who: 'AccountId32',
                amount: 'u128',
            },
            DepositSlashed: {
                who: 'AccountId32',
                amount: 'u128',
            },
            DecisionStarted: {
                index: 'u32',
                track: 'u16',
                proposal: 'FrameSupportPreimagesBounded',
                tally: 'PalletConvictionVotingTally',
            },
            ConfirmStarted: {
                index: 'u32',
            },
            ConfirmAborted: {
                index: 'u32',
            },
            Confirmed: {
                index: 'u32',
                tally: 'PalletConvictionVotingTally',
            },
            Approved: {
                index: 'u32',
            },
            Rejected: {
                index: 'u32',
                tally: 'PalletConvictionVotingTally',
            },
            TimedOut: {
                index: 'u32',
                tally: 'PalletConvictionVotingTally',
            },
            Cancelled: {
                index: 'u32',
                tally: 'PalletConvictionVotingTally',
            },
            Killed: {
                index: 'u32',
                tally: 'PalletConvictionVotingTally',
            },
            SubmissionDepositRefunded: {
                index: 'u32',
                who: 'AccountId32',
                amount: 'u128',
            },
            MetadataSet: {
                _alias: {
                    hash_: 'hash',
                },
                index: 'u32',
                hash_: 'H256',
            },
            MetadataCleared: {
                _alias: {
                    hash_: 'hash',
                },
                index: 'u32',
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup42: frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>
     **/
    FrameSupportPreimagesBounded: {
        _enum: {
            Legacy: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            Inline: 'Bytes',
            Lookup: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
                len: 'u32'
            }
        }
    },
    /**
     * Lookup44: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            remark: {
                remark: 'Bytes',
            },
            set_heap_pages: {
                pages: 'u64',
            },
            set_code: {
                code: 'Bytes',
            },
            set_code_without_checks: {
                code: 'Bytes',
            },
            set_storage: {
                items: 'Vec<(Bytes,Bytes)>',
            },
            kill_storage: {
                _alias: {
                    keys_: 'keys',
                },
                keys_: 'Vec<Bytes>',
            },
            kill_prefix: {
                prefix: 'Bytes',
                subkeys: 'u32',
            },
            remark_with_event: {
                remark: 'Bytes'
            }
        }
    },
    /**
     * Lookup48: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: 'Compact<u64>'
            }
        }
    },
    /**
     * Lookup49: pallet_indices::pallet::Call<T>
     **/
    PalletIndicesCall: {
        _enum: {
            claim: {
                index: 'u32',
            },
            transfer: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
                index: 'u32',
            },
            free: {
                index: 'u32',
            },
            force_transfer: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
                index: 'u32',
                freeze: 'bool',
            },
            freeze: {
                index: 'u32'
            }
        }
    },
    /**
     * Lookup55: cumulus_pallet_parachain_system::pallet::Call<T>
     **/
    CumulusPalletParachainSystemCall: {
        _enum: {
            set_validation_data: {
                data: 'CumulusPrimitivesParachainInherentParachainInherentData',
            },
            sudo_send_upward_message: {
                message: 'Bytes',
            },
            authorize_upgrade: {
                codeHash: 'H256',
                checkVersion: 'bool',
            },
            enact_authorized_upgrade: {
                code: 'Bytes'
            }
        }
    },
    /**
     * Lookup56: cumulus_primitives_parachain_inherent::ParachainInherentData
     **/
    CumulusPrimitivesParachainInherentParachainInherentData: {
        validationData: 'PolkadotPrimitivesV5PersistedValidationData',
        relayChainState: 'SpTrieStorageProof',
        downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
        horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
    },
    /**
     * Lookup57: polkadot_primitives::v5::PersistedValidationData<primitive_types::H256, N>
     **/
    PolkadotPrimitivesV5PersistedValidationData: {
        parentHead: 'Bytes',
        relayParentNumber: 'u32',
        relayParentStorageRoot: 'H256',
        maxPovSize: 'u32'
    },
    /**
     * Lookup59: sp_trie::storage_proof::StorageProof
     **/
    SpTrieStorageProof: {
        trieNodes: 'BTreeSet<Bytes>'
    },
    /**
     * Lookup62: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: 'u32',
        msg: 'Bytes'
    },
    /**
     * Lookup66: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: 'u32',
        data: 'Bytes'
    },
    /**
     * Lookup69: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer_allow_death: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            set_balance_deprecated: {
                who: 'MultiAddress',
                newFree: 'Compact<u128>',
                oldReserved: 'Compact<u128>',
            },
            force_transfer: {
                source: 'MultiAddress',
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_keep_alive: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_all: {
                dest: 'MultiAddress',
                keepAlive: 'bool',
            },
            force_unreserve: {
                who: 'MultiAddress',
                amount: 'u128',
            },
            upgrade_accounts: {
                who: 'Vec<AccountId32>',
            },
            transfer: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            force_set_balance: {
                who: 'MultiAddress',
                newFree: 'Compact<u128>'
            }
        }
    },
    /**
     * Lookup72: pallet_session::pallet::Call<T>
     **/
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: 'keys',
                },
                keys_: 'CurioMainnetRuntimeConsensusSessionKeys',
                proof: 'Bytes',
            },
            purge_keys: 'Null'
        }
    },
    /**
     * Lookup73: curio_mainnet_runtime::consensus::SessionKeys
     **/
    CurioMainnetRuntimeConsensusSessionKeys: {
        aura: 'SpConsensusAuraSr25519AppSr25519Public'
    },
    /**
     * Lookup74: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
    /**
     * Lookup75: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: '[u8;32]',
    /**
     * Lookup76: parachain_staking::pallet::Call<T>
     **/
    ParachainStakingCall: {
        _enum: {
            force_new_round: 'Null',
            set_inflation: {
                collatorMaxRatePercentage: 'Perquintill',
                collatorAnnualRewardRatePercentage: 'Perquintill',
                delegatorMaxRatePercentage: 'Perquintill',
                delegatorAnnualRewardRatePercentage: 'Perquintill',
            },
            set_max_selected_candidates: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_blocks_per_round: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u64',
            },
            set_max_candidate_stake: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u128',
            },
            force_remove_candidate: {
                collator: 'MultiAddress',
            },
            join_candidates: {
                stake: 'u128',
            },
            init_leave_candidates: 'Null',
            execute_leave_candidates: {
                collator: 'MultiAddress',
            },
            cancel_leave_candidates: 'Null',
            candidate_stake_more: {
                more: 'u128',
            },
            candidate_stake_less: {
                less: 'u128',
            },
            join_delegators: {
                collator: 'MultiAddress',
                amount: 'u128',
            },
            leave_delegators: 'Null',
            delegator_stake_more: {
                more: 'u128',
            },
            delegator_stake_less: {
                less: 'u128',
            },
            unlock_unstaked: {
                target: 'MultiAddress',
            },
            claim_rewards: 'Null',
            increment_collator_rewards: 'Null',
            increment_delegator_rewards: 'Null',
            execute_scheduled_reward_change: 'Null'
        }
    },
    /**
     * Lookup77: pallet_conviction_voting::pallet::Call<T, I>
     **/
    PalletConvictionVotingCall: {
        _enum: {
            vote: {
                pollIndex: 'Compact<u32>',
                vote: 'PalletConvictionVotingVoteAccountVote',
            },
            delegate: {
                class: 'u16',
                to: 'MultiAddress',
                conviction: 'PalletConvictionVotingConviction',
                balance: 'u128',
            },
            undelegate: {
                class: 'u16',
            },
            unlock: {
                class: 'u16',
                target: 'MultiAddress',
            },
            remove_vote: {
                class: 'Option<u16>',
                index: 'u32',
            },
            remove_other_vote: {
                target: 'MultiAddress',
                class: 'u16',
                index: 'u32'
            }
        }
    },
    /**
     * Lookup79: pallet_conviction_voting::vote::AccountVote<Balance>
     **/
    PalletConvictionVotingVoteAccountVote: {
        _enum: {
            Standard: {
                vote: 'Vote',
                balance: 'u128',
            },
            Split: {
                aye: 'u128',
                nay: 'u128',
            },
            SplitAbstain: {
                aye: 'u128',
                nay: 'u128',
                abstain: 'u128'
            }
        }
    },
    /**
     * Lookup81: pallet_conviction_voting::conviction::Conviction
     **/
    PalletConvictionVotingConviction: {
        _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
    },
    /**
     * Lookup83: pallet_referenda::pallet::Call<T, I>
     **/
    PalletReferendaCall: {
        _enum: {
            submit: {
                proposalOrigin: 'CurioMainnetRuntimeOriginCaller',
                proposal: 'FrameSupportPreimagesBounded',
                enactmentMoment: 'FrameSupportScheduleDispatchTime',
            },
            place_decision_deposit: {
                index: 'u32',
            },
            refund_decision_deposit: {
                index: 'u32',
            },
            cancel: {
                index: 'u32',
            },
            kill: {
                index: 'u32',
            },
            nudge_referendum: {
                index: 'u32',
            },
            one_fewer_deciding: {
                track: 'u16',
            },
            refund_submission_deposit: {
                index: 'u32',
            },
            set_metadata: {
                index: 'u32',
                maybeHash: 'Option<H256>'
            }
        }
    },
    /**
     * Lookup84: curio_mainnet_runtime::OriginCaller
     **/
    CurioMainnetRuntimeOriginCaller: {
        _enum: {
            system: 'FrameSupportDispatchRawOrigin',
            __Unused1: 'Null',
            __Unused2: 'Null',
            __Unused3: 'Null',
            Void: 'SpCoreVoid',
            __Unused5: 'Null',
            __Unused6: 'Null',
            __Unused7: 'Null',
            __Unused8: 'Null',
            __Unused9: 'Null',
            __Unused10: 'Null',
            __Unused11: 'Null',
            __Unused12: 'Null',
            __Unused13: 'Null',
            __Unused14: 'Null',
            __Unused15: 'Null',
            __Unused16: 'Null',
            __Unused17: 'Null',
            __Unused18: 'Null',
            __Unused19: 'Null',
            __Unused20: 'Null',
            __Unused21: 'Null',
            __Unused22: 'Null',
            __Unused23: 'Null',
            __Unused24: 'Null',
            __Unused25: 'Null',
            __Unused26: 'Null',
            __Unused27: 'Null',
            __Unused28: 'Null',
            __Unused29: 'Null',
            __Unused30: 'Null',
            __Unused31: 'Null',
            __Unused32: 'Null',
            __Unused33: 'Null',
            Origins: 'CurioMainnetRuntimeGovernanceOriginsPalletCustomOriginsOrigin',
            __Unused35: 'Null',
            __Unused36: 'Null',
            __Unused37: 'Null',
            __Unused38: 'Null',
            __Unused39: 'Null',
            __Unused40: 'Null',
            PolkadotXcm: 'PalletXcmOrigin',
            CumulusXcm: 'CumulusPalletXcmOrigin'
        }
    },
    /**
     * Lookup85: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: 'Null',
            Signed: 'AccountId32',
            None: 'Null'
        }
    },
    /**
     * Lookup86: curio_mainnet_runtime::governance::origins::pallet_custom_origins::Origin
     **/
    CurioMainnetRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
        _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'WhitelistedCaller', 'FellowshipProspects', 'FellowshipMembers', 'FellowshipExperts', 'Fellowship1Dan', 'Fellowship2Dan']
    },
    /**
     * Lookup87: pallet_xcm::pallet::Origin
     **/
    PalletXcmOrigin: {
        _enum: {
            Xcm: 'StagingXcmV3MultiLocation',
            Response: 'StagingXcmV3MultiLocation'
        }
    },
    /**
     * Lookup88: staging_xcm::v3::multilocation::MultiLocation
     **/
    StagingXcmV3MultiLocation: {
        parents: 'u8',
        interior: 'StagingXcmV3Junctions'
    },
    /**
     * Lookup89: staging_xcm::v3::junctions::Junctions
     **/
    StagingXcmV3Junctions: {
        _enum: {
            Here: 'Null',
            X1: 'StagingXcmV3Junction',
            X2: '(StagingXcmV3Junction,StagingXcmV3Junction)',
            X3: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
            X4: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
            X5: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
            X6: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
            X7: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
            X8: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)'
        }
    },
    /**
     * Lookup90: staging_xcm::v3::junction::Junction
     **/
    StagingXcmV3Junction: {
        _enum: {
            Parachain: 'Compact<u32>',
            AccountId32: {
                network: 'Option<StagingXcmV3JunctionNetworkId>',
                id: '[u8;32]',
            },
            AccountIndex64: {
                network: 'Option<StagingXcmV3JunctionNetworkId>',
                index: 'Compact<u64>',
            },
            AccountKey20: {
                network: 'Option<StagingXcmV3JunctionNetworkId>',
                key: '[u8;20]',
            },
            PalletInstance: 'u8',
            GeneralIndex: 'Compact<u128>',
            GeneralKey: {
                length: 'u8',
                data: '[u8;32]',
            },
            OnlyChild: 'Null',
            Plurality: {
                id: 'StagingXcmV3JunctionBodyId',
                part: 'StagingXcmV3JunctionBodyPart',
            },
            GlobalConsensus: 'StagingXcmV3JunctionNetworkId'
        }
    },
    /**
     * Lookup92: staging_xcm::v3::junction::NetworkId
     **/
    StagingXcmV3JunctionNetworkId: {
        _enum: {
            ByGenesis: '[u8;32]',
            ByFork: {
                blockNumber: 'u64',
                blockHash: '[u8;32]',
            },
            Polkadot: 'Null',
            Kusama: 'Null',
            Westend: 'Null',
            Rococo: 'Null',
            Wococo: 'Null',
            Ethereum: {
                chainId: 'Compact<u64>',
            },
            BitcoinCore: 'Null',
            BitcoinCash: 'Null'
        }
    },
    /**
     * Lookup93: staging_xcm::v3::junction::BodyId
     **/
    StagingXcmV3JunctionBodyId: {
        _enum: {
            Unit: 'Null',
            Moniker: '[u8;4]',
            Index: 'Compact<u32>',
            Executive: 'Null',
            Technical: 'Null',
            Legislative: 'Null',
            Judicial: 'Null',
            Defense: 'Null',
            Administration: 'Null',
            Treasury: 'Null'
        }
    },
    /**
     * Lookup94: staging_xcm::v3::junction::BodyPart
     **/
    StagingXcmV3JunctionBodyPart: {
        _enum: {
            Voice: 'Null',
            Members: {
                count: 'Compact<u32>',
            },
            Fraction: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            AtLeastProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            MoreThanProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup95: cumulus_pallet_xcm::pallet::Origin
     **/
    CumulusPalletXcmOrigin: {
        _enum: {
            Relay: 'Null',
            SiblingParachain: 'u32'
        }
    },
    /**
     * Lookup96: sp_core::Void
     **/
    SpCoreVoid: 'Null',
    /**
     * Lookup97: frame_support::traits::schedule::DispatchTime<BlockNumber>
     **/
    FrameSupportScheduleDispatchTime: {
        _enum: {
            At: 'u64',
            After: 'u64'
        }
    },
    /**
     * Lookup99: pallet_ranked_collective::pallet::Call<T, I>
     **/
    PalletRankedCollectiveCall: {
        _enum: {
            add_member: {
                who: 'MultiAddress',
            },
            promote_member: {
                who: 'MultiAddress',
            },
            demote_member: {
                who: 'MultiAddress',
            },
            remove_member: {
                who: 'MultiAddress',
                minRank: 'u16',
            },
            vote: {
                poll: 'u32',
                aye: 'bool',
            },
            cleanup_poll: {
                pollIndex: 'u32',
                max: 'u32'
            }
        }
    },
    /**
     * Lookup101: pallet_whitelist::pallet::Call<T>
     **/
    PalletWhitelistCall: {
        _enum: {
            whitelist_call: {
                callHash: 'H256',
            },
            remove_whitelisted_call: {
                callHash: 'H256',
            },
            dispatch_whitelisted_call: {
                callHash: 'H256',
                callEncodedLen: 'u32',
                callWeightWitness: 'SpWeightsWeightV2Weight',
            },
            dispatch_whitelisted_call_with_preimage: {
                call: 'Call'
            }
        }
    },
    /**
     * Lookup102: cumulus_pallet_xcmp_queue::pallet::Call<T>
     **/
    CumulusPalletXcmpQueueCall: {
        _enum: {
            service_overweight: {
                index: 'u64',
                weightLimit: 'SpWeightsWeightV2Weight',
            },
            suspend_xcm_execution: 'Null',
            resume_xcm_execution: 'Null',
            update_suspend_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_drop_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_resume_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_threshold_weight: {
                _alias: {
                    new_: 'new',
                },
                new_: 'SpWeightsWeightV2Weight',
            },
            update_weight_restrict_decay: {
                _alias: {
                    new_: 'new',
                },
                new_: 'SpWeightsWeightV2Weight',
            },
            update_xcmp_max_individual_weight: {
                _alias: {
                    new_: 'new',
                },
                new_: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup103: pallet_xcm::pallet::Call<T>
     **/
    PalletXcmCall: {
        _enum: {
            send: {
                dest: 'StagingXcmVersionedMultiLocation',
                message: 'StagingXcmVersionedXcm',
            },
            teleport_assets: {
                dest: 'StagingXcmVersionedMultiLocation',
                beneficiary: 'StagingXcmVersionedMultiLocation',
                assets: 'StagingXcmVersionedMultiAssets',
                feeAssetItem: 'u32',
            },
            reserve_transfer_assets: {
                dest: 'StagingXcmVersionedMultiLocation',
                beneficiary: 'StagingXcmVersionedMultiLocation',
                assets: 'StagingXcmVersionedMultiAssets',
                feeAssetItem: 'u32',
            },
            execute: {
                message: 'StagingXcmVersionedXcm',
                maxWeight: 'SpWeightsWeightV2Weight',
            },
            force_xcm_version: {
                location: 'StagingXcmV3MultiLocation',
                version: 'u32',
            },
            force_default_xcm_version: {
                maybeXcmVersion: 'Option<u32>',
            },
            force_subscribe_version_notify: {
                location: 'StagingXcmVersionedMultiLocation',
            },
            force_unsubscribe_version_notify: {
                location: 'StagingXcmVersionedMultiLocation',
            },
            limited_reserve_transfer_assets: {
                dest: 'StagingXcmVersionedMultiLocation',
                beneficiary: 'StagingXcmVersionedMultiLocation',
                assets: 'StagingXcmVersionedMultiAssets',
                feeAssetItem: 'u32',
                weightLimit: 'StagingXcmV3WeightLimit',
            },
            limited_teleport_assets: {
                dest: 'StagingXcmVersionedMultiLocation',
                beneficiary: 'StagingXcmVersionedMultiLocation',
                assets: 'StagingXcmVersionedMultiAssets',
                feeAssetItem: 'u32',
                weightLimit: 'StagingXcmV3WeightLimit',
            },
            force_suspension: {
                suspended: 'bool'
            }
        }
    },
    /**
     * Lookup104: staging_xcm::VersionedMultiLocation
     **/
    StagingXcmVersionedMultiLocation: {
        _enum: {
            __Unused0: 'Null',
            V2: 'StagingXcmV2MultiLocation',
            __Unused2: 'Null',
            V3: 'StagingXcmV3MultiLocation'
        }
    },
    /**
     * Lookup105: staging_xcm::v2::multilocation::MultiLocation
     **/
    StagingXcmV2MultiLocation: {
        parents: 'u8',
        interior: 'StagingXcmV2MultilocationJunctions'
    },
    /**
     * Lookup106: staging_xcm::v2::multilocation::Junctions
     **/
    StagingXcmV2MultilocationJunctions: {
        _enum: {
            Here: 'Null',
            X1: 'StagingXcmV2Junction',
            X2: '(StagingXcmV2Junction,StagingXcmV2Junction)',
            X3: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
            X4: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
            X5: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
            X6: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
            X7: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
            X8: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)'
        }
    },
    /**
     * Lookup107: staging_xcm::v2::junction::Junction
     **/
    StagingXcmV2Junction: {
        _enum: {
            Parachain: 'Compact<u32>',
            AccountId32: {
                network: 'StagingXcmV2NetworkId',
                id: '[u8;32]',
            },
            AccountIndex64: {
                network: 'StagingXcmV2NetworkId',
                index: 'Compact<u64>',
            },
            AccountKey20: {
                network: 'StagingXcmV2NetworkId',
                key: '[u8;20]',
            },
            PalletInstance: 'u8',
            GeneralIndex: 'Compact<u128>',
            GeneralKey: 'Bytes',
            OnlyChild: 'Null',
            Plurality: {
                id: 'StagingXcmV2BodyId',
                part: 'StagingXcmV2BodyPart'
            }
        }
    },
    /**
     * Lookup108: staging_xcm::v2::NetworkId
     **/
    StagingXcmV2NetworkId: {
        _enum: {
            Any: 'Null',
            Named: 'Bytes',
            Polkadot: 'Null',
            Kusama: 'Null'
        }
    },
    /**
     * Lookup110: staging_xcm::v2::BodyId
     **/
    StagingXcmV2BodyId: {
        _enum: {
            Unit: 'Null',
            Named: 'Bytes',
            Index: 'Compact<u32>',
            Executive: 'Null',
            Technical: 'Null',
            Legislative: 'Null',
            Judicial: 'Null',
            Defense: 'Null',
            Administration: 'Null',
            Treasury: 'Null'
        }
    },
    /**
     * Lookup111: staging_xcm::v2::BodyPart
     **/
    StagingXcmV2BodyPart: {
        _enum: {
            Voice: 'Null',
            Members: {
                count: 'Compact<u32>',
            },
            Fraction: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            AtLeastProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            MoreThanProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup112: staging_xcm::VersionedXcm<RuntimeCall>
     **/
    StagingXcmVersionedXcm: {
        _enum: {
            __Unused0: 'Null',
            __Unused1: 'Null',
            V2: 'StagingXcmV2Xcm',
            V3: 'StagingXcmV3Xcm'
        }
    },
    /**
     * Lookup113: staging_xcm::v2::Xcm<RuntimeCall>
     **/
    StagingXcmV2Xcm: 'Vec<StagingXcmV2Instruction>',
    /**
     * Lookup115: staging_xcm::v2::Instruction<RuntimeCall>
     **/
    StagingXcmV2Instruction: {
        _enum: {
            WithdrawAsset: 'StagingXcmV2MultiassetMultiAssets',
            ReserveAssetDeposited: 'StagingXcmV2MultiassetMultiAssets',
            ReceiveTeleportedAsset: 'StagingXcmV2MultiassetMultiAssets',
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'StagingXcmV2Response',
                maxWeight: 'Compact<u64>',
            },
            TransferAsset: {
                assets: 'StagingXcmV2MultiassetMultiAssets',
                beneficiary: 'StagingXcmV2MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'StagingXcmV2MultiassetMultiAssets',
                dest: 'StagingXcmV2MultiLocation',
                xcm: 'StagingXcmV2Xcm',
            },
            Transact: {
                originType: 'StagingXcmV2OriginKind',
                requireWeightAtMost: 'Compact<u64>',
                call: 'StagingXcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            ClearOrigin: 'Null',
            DescendOrigin: 'StagingXcmV2MultilocationJunctions',
            ReportError: {
                queryId: 'Compact<u64>',
                dest: 'StagingXcmV2MultiLocation',
                maxResponseWeight: 'Compact<u64>',
            },
            DepositAsset: {
                assets: 'StagingXcmV2MultiassetMultiAssetFilter',
                maxAssets: 'Compact<u32>',
                beneficiary: 'StagingXcmV2MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'StagingXcmV2MultiassetMultiAssetFilter',
                maxAssets: 'Compact<u32>',
                dest: 'StagingXcmV2MultiLocation',
                xcm: 'StagingXcmV2Xcm',
            },
            ExchangeAsset: {
                give: 'StagingXcmV2MultiassetMultiAssetFilter',
                receive: 'StagingXcmV2MultiassetMultiAssets',
            },
            InitiateReserveWithdraw: {
                assets: 'StagingXcmV2MultiassetMultiAssetFilter',
                reserve: 'StagingXcmV2MultiLocation',
                xcm: 'StagingXcmV2Xcm',
            },
            InitiateTeleport: {
                assets: 'StagingXcmV2MultiassetMultiAssetFilter',
                dest: 'StagingXcmV2MultiLocation',
                xcm: 'StagingXcmV2Xcm',
            },
            QueryHolding: {
                queryId: 'Compact<u64>',
                dest: 'StagingXcmV2MultiLocation',
                assets: 'StagingXcmV2MultiassetMultiAssetFilter',
                maxResponseWeight: 'Compact<u64>',
            },
            BuyExecution: {
                fees: 'StagingXcmV2MultiAsset',
                weightLimit: 'StagingXcmV2WeightLimit',
            },
            RefundSurplus: 'Null',
            SetErrorHandler: 'StagingXcmV2Xcm',
            SetAppendix: 'StagingXcmV2Xcm',
            ClearError: 'Null',
            ClaimAsset: {
                assets: 'StagingXcmV2MultiassetMultiAssets',
                ticket: 'StagingXcmV2MultiLocation',
            },
            Trap: 'Compact<u64>',
            SubscribeVersion: {
                queryId: 'Compact<u64>',
                maxResponseWeight: 'Compact<u64>',
            },
            UnsubscribeVersion: 'Null'
        }
    },
    /**
     * Lookup116: staging_xcm::v2::multiasset::MultiAssets
     **/
    StagingXcmV2MultiassetMultiAssets: 'Vec<StagingXcmV2MultiAsset>',
    /**
     * Lookup118: staging_xcm::v2::multiasset::MultiAsset
     **/
    StagingXcmV2MultiAsset: {
        id: 'StagingXcmV2MultiassetAssetId',
        fun: 'StagingXcmV2MultiassetFungibility'
    },
    /**
     * Lookup119: staging_xcm::v2::multiasset::AssetId
     **/
    StagingXcmV2MultiassetAssetId: {
        _enum: {
            Concrete: 'StagingXcmV2MultiLocation',
            Abstract: 'Bytes'
        }
    },
    /**
     * Lookup120: staging_xcm::v2::multiasset::Fungibility
     **/
    StagingXcmV2MultiassetFungibility: {
        _enum: {
            Fungible: 'Compact<u128>',
            NonFungible: 'StagingXcmV2MultiassetAssetInstance'
        }
    },
    /**
     * Lookup121: staging_xcm::v2::multiasset::AssetInstance
     **/
    StagingXcmV2MultiassetAssetInstance: {
        _enum: {
            Undefined: 'Null',
            Index: 'Compact<u128>',
            Array4: '[u8;4]',
            Array8: '[u8;8]',
            Array16: '[u8;16]',
            Array32: '[u8;32]',
            Blob: 'Bytes'
        }
    },
    /**
     * Lookup124: staging_xcm::v2::Response
     **/
    StagingXcmV2Response: {
        _enum: {
            Null: 'Null',
            Assets: 'StagingXcmV2MultiassetMultiAssets',
            ExecutionResult: 'Option<(u32,StagingXcmV2TraitsError)>',
            Version: 'u32'
        }
    },
    /**
     * Lookup127: staging_xcm::v2::traits::Error
     **/
    StagingXcmV2TraitsError: {
        _enum: {
            Overflow: 'Null',
            Unimplemented: 'Null',
            UntrustedReserveLocation: 'Null',
            UntrustedTeleportLocation: 'Null',
            MultiLocationFull: 'Null',
            MultiLocationNotInvertible: 'Null',
            BadOrigin: 'Null',
            InvalidLocation: 'Null',
            AssetNotFound: 'Null',
            FailedToTransactAsset: 'Null',
            NotWithdrawable: 'Null',
            LocationCannotHold: 'Null',
            ExceedsMaxMessageSize: 'Null',
            DestinationUnsupported: 'Null',
            Transport: 'Null',
            Unroutable: 'Null',
            UnknownClaim: 'Null',
            FailedToDecode: 'Null',
            MaxWeightInvalid: 'Null',
            NotHoldingFees: 'Null',
            TooExpensive: 'Null',
            Trap: 'u64',
            UnhandledXcmVersion: 'Null',
            WeightLimitReached: 'u64',
            Barrier: 'Null',
            WeightNotComputable: 'Null'
        }
    },
    /**
     * Lookup128: staging_xcm::v2::OriginKind
     **/
    StagingXcmV2OriginKind: {
        _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
    },
    /**
     * Lookup129: staging_xcm::double_encoded::DoubleEncoded<T>
     **/
    StagingXcmDoubleEncoded: {
        encoded: 'Bytes'
    },
    /**
     * Lookup130: staging_xcm::v2::multiasset::MultiAssetFilter
     **/
    StagingXcmV2MultiassetMultiAssetFilter: {
        _enum: {
            Definite: 'StagingXcmV2MultiassetMultiAssets',
            Wild: 'StagingXcmV2MultiassetWildMultiAsset'
        }
    },
    /**
     * Lookup131: staging_xcm::v2::multiasset::WildMultiAsset
     **/
    StagingXcmV2MultiassetWildMultiAsset: {
        _enum: {
            All: 'Null',
            AllOf: {
                id: 'StagingXcmV2MultiassetAssetId',
                fun: 'StagingXcmV2MultiassetWildFungibility'
            }
        }
    },
    /**
     * Lookup132: staging_xcm::v2::multiasset::WildFungibility
     **/
    StagingXcmV2MultiassetWildFungibility: {
        _enum: ['Fungible', 'NonFungible']
    },
    /**
     * Lookup133: staging_xcm::v2::WeightLimit
     **/
    StagingXcmV2WeightLimit: {
        _enum: {
            Unlimited: 'Null',
            Limited: 'Compact<u64>'
        }
    },
    /**
     * Lookup134: staging_xcm::v3::Xcm<Call>
     **/
    StagingXcmV3Xcm: 'Vec<StagingXcmV3Instruction>',
    /**
     * Lookup136: staging_xcm::v3::Instruction<Call>
     **/
    StagingXcmV3Instruction: {
        _enum: {
            WithdrawAsset: 'StagingXcmV3MultiassetMultiAssets',
            ReserveAssetDeposited: 'StagingXcmV3MultiassetMultiAssets',
            ReceiveTeleportedAsset: 'StagingXcmV3MultiassetMultiAssets',
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'StagingXcmV3Response',
                maxWeight: 'SpWeightsWeightV2Weight',
                querier: 'Option<StagingXcmV3MultiLocation>',
            },
            TransferAsset: {
                assets: 'StagingXcmV3MultiassetMultiAssets',
                beneficiary: 'StagingXcmV3MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'StagingXcmV3MultiassetMultiAssets',
                dest: 'StagingXcmV3MultiLocation',
                xcm: 'StagingXcmV3Xcm',
            },
            Transact: {
                originKind: 'StagingXcmV2OriginKind',
                requireWeightAtMost: 'SpWeightsWeightV2Weight',
                call: 'StagingXcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            ClearOrigin: 'Null',
            DescendOrigin: 'StagingXcmV3Junctions',
            ReportError: 'StagingXcmV3QueryResponseInfo',
            DepositAsset: {
                assets: 'StagingXcmV3MultiassetMultiAssetFilter',
                beneficiary: 'StagingXcmV3MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'StagingXcmV3MultiassetMultiAssetFilter',
                dest: 'StagingXcmV3MultiLocation',
                xcm: 'StagingXcmV3Xcm',
            },
            ExchangeAsset: {
                give: 'StagingXcmV3MultiassetMultiAssetFilter',
                want: 'StagingXcmV3MultiassetMultiAssets',
                maximal: 'bool',
            },
            InitiateReserveWithdraw: {
                assets: 'StagingXcmV3MultiassetMultiAssetFilter',
                reserve: 'StagingXcmV3MultiLocation',
                xcm: 'StagingXcmV3Xcm',
            },
            InitiateTeleport: {
                assets: 'StagingXcmV3MultiassetMultiAssetFilter',
                dest: 'StagingXcmV3MultiLocation',
                xcm: 'StagingXcmV3Xcm',
            },
            ReportHolding: {
                responseInfo: 'StagingXcmV3QueryResponseInfo',
                assets: 'StagingXcmV3MultiassetMultiAssetFilter',
            },
            BuyExecution: {
                fees: 'StagingXcmV3MultiAsset',
                weightLimit: 'StagingXcmV3WeightLimit',
            },
            RefundSurplus: 'Null',
            SetErrorHandler: 'StagingXcmV3Xcm',
            SetAppendix: 'StagingXcmV3Xcm',
            ClearError: 'Null',
            ClaimAsset: {
                assets: 'StagingXcmV3MultiassetMultiAssets',
                ticket: 'StagingXcmV3MultiLocation',
            },
            Trap: 'Compact<u64>',
            SubscribeVersion: {
                queryId: 'Compact<u64>',
                maxResponseWeight: 'SpWeightsWeightV2Weight',
            },
            UnsubscribeVersion: 'Null',
            BurnAsset: 'StagingXcmV3MultiassetMultiAssets',
            ExpectAsset: 'StagingXcmV3MultiassetMultiAssets',
            ExpectOrigin: 'Option<StagingXcmV3MultiLocation>',
            ExpectError: 'Option<(u32,StagingXcmV3TraitsError)>',
            ExpectTransactStatus: 'StagingXcmV3MaybeErrorCode',
            QueryPallet: {
                moduleName: 'Bytes',
                responseInfo: 'StagingXcmV3QueryResponseInfo',
            },
            ExpectPallet: {
                index: 'Compact<u32>',
                name: 'Bytes',
                moduleName: 'Bytes',
                crateMajor: 'Compact<u32>',
                minCrateMinor: 'Compact<u32>',
            },
            ReportTransactStatus: 'StagingXcmV3QueryResponseInfo',
            ClearTransactStatus: 'Null',
            UniversalOrigin: 'StagingXcmV3Junction',
            ExportMessage: {
                network: 'StagingXcmV3JunctionNetworkId',
                destination: 'StagingXcmV3Junctions',
                xcm: 'StagingXcmV3Xcm',
            },
            LockAsset: {
                asset: 'StagingXcmV3MultiAsset',
                unlocker: 'StagingXcmV3MultiLocation',
            },
            UnlockAsset: {
                asset: 'StagingXcmV3MultiAsset',
                target: 'StagingXcmV3MultiLocation',
            },
            NoteUnlockable: {
                asset: 'StagingXcmV3MultiAsset',
                owner: 'StagingXcmV3MultiLocation',
            },
            RequestUnlock: {
                asset: 'StagingXcmV3MultiAsset',
                locker: 'StagingXcmV3MultiLocation',
            },
            SetFeesMode: {
                jitWithdraw: 'bool',
            },
            SetTopic: '[u8;32]',
            ClearTopic: 'Null',
            AliasOrigin: 'StagingXcmV3MultiLocation',
            UnpaidExecution: {
                weightLimit: 'StagingXcmV3WeightLimit',
                checkOrigin: 'Option<StagingXcmV3MultiLocation>'
            }
        }
    },
    /**
     * Lookup137: staging_xcm::v3::multiasset::MultiAssets
     **/
    StagingXcmV3MultiassetMultiAssets: 'Vec<StagingXcmV3MultiAsset>',
    /**
     * Lookup139: staging_xcm::v3::multiasset::MultiAsset
     **/
    StagingXcmV3MultiAsset: {
        id: 'StagingXcmV3MultiassetAssetId',
        fun: 'StagingXcmV3MultiassetFungibility'
    },
    /**
     * Lookup140: staging_xcm::v3::multiasset::AssetId
     **/
    StagingXcmV3MultiassetAssetId: {
        _enum: {
            Concrete: 'StagingXcmV3MultiLocation',
            Abstract: '[u8;32]'
        }
    },
    /**
     * Lookup141: staging_xcm::v3::multiasset::Fungibility
     **/
    StagingXcmV3MultiassetFungibility: {
        _enum: {
            Fungible: 'Compact<u128>',
            NonFungible: 'StagingXcmV3MultiassetAssetInstance'
        }
    },
    /**
     * Lookup142: staging_xcm::v3::multiasset::AssetInstance
     **/
    StagingXcmV3MultiassetAssetInstance: {
        _enum: {
            Undefined: 'Null',
            Index: 'Compact<u128>',
            Array4: '[u8;4]',
            Array8: '[u8;8]',
            Array16: '[u8;16]',
            Array32: '[u8;32]'
        }
    },
    /**
     * Lookup143: staging_xcm::v3::Response
     **/
    StagingXcmV3Response: {
        _enum: {
            Null: 'Null',
            Assets: 'StagingXcmV3MultiassetMultiAssets',
            ExecutionResult: 'Option<(u32,StagingXcmV3TraitsError)>',
            Version: 'u32',
            PalletsInfo: 'Vec<StagingXcmV3PalletInfo>',
            DispatchResult: 'StagingXcmV3MaybeErrorCode'
        }
    },
    /**
     * Lookup146: staging_xcm::v3::traits::Error
     **/
    StagingXcmV3TraitsError: {
        _enum: {
            Overflow: 'Null',
            Unimplemented: 'Null',
            UntrustedReserveLocation: 'Null',
            UntrustedTeleportLocation: 'Null',
            LocationFull: 'Null',
            LocationNotInvertible: 'Null',
            BadOrigin: 'Null',
            InvalidLocation: 'Null',
            AssetNotFound: 'Null',
            FailedToTransactAsset: 'Null',
            NotWithdrawable: 'Null',
            LocationCannotHold: 'Null',
            ExceedsMaxMessageSize: 'Null',
            DestinationUnsupported: 'Null',
            Transport: 'Null',
            Unroutable: 'Null',
            UnknownClaim: 'Null',
            FailedToDecode: 'Null',
            MaxWeightInvalid: 'Null',
            NotHoldingFees: 'Null',
            TooExpensive: 'Null',
            Trap: 'u64',
            ExpectationFalse: 'Null',
            PalletNotFound: 'Null',
            NameMismatch: 'Null',
            VersionIncompatible: 'Null',
            HoldingWouldOverflow: 'Null',
            ExportError: 'Null',
            ReanchorFailed: 'Null',
            NoDeal: 'Null',
            FeesNotMet: 'Null',
            LockError: 'Null',
            NoPermission: 'Null',
            Unanchored: 'Null',
            NotDepositable: 'Null',
            UnhandledXcmVersion: 'Null',
            WeightLimitReached: 'SpWeightsWeightV2Weight',
            Barrier: 'Null',
            WeightNotComputable: 'Null',
            ExceedsStackLimit: 'Null'
        }
    },
    /**
     * Lookup148: staging_xcm::v3::PalletInfo
     **/
    StagingXcmV3PalletInfo: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        major: 'Compact<u32>',
        minor: 'Compact<u32>',
        patch: 'Compact<u32>'
    },
    /**
     * Lookup151: staging_xcm::v3::MaybeErrorCode
     **/
    StagingXcmV3MaybeErrorCode: {
        _enum: {
            Success: 'Null',
            Error: 'Bytes',
            TruncatedError: 'Bytes'
        }
    },
    /**
     * Lookup154: staging_xcm::v3::QueryResponseInfo
     **/
    StagingXcmV3QueryResponseInfo: {
        destination: 'StagingXcmV3MultiLocation',
        queryId: 'Compact<u64>',
        maxWeight: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup155: staging_xcm::v3::multiasset::MultiAssetFilter
     **/
    StagingXcmV3MultiassetMultiAssetFilter: {
        _enum: {
            Definite: 'StagingXcmV3MultiassetMultiAssets',
            Wild: 'StagingXcmV3MultiassetWildMultiAsset'
        }
    },
    /**
     * Lookup156: staging_xcm::v3::multiasset::WildMultiAsset
     **/
    StagingXcmV3MultiassetWildMultiAsset: {
        _enum: {
            All: 'Null',
            AllOf: {
                id: 'StagingXcmV3MultiassetAssetId',
                fun: 'StagingXcmV3MultiassetWildFungibility',
            },
            AllCounted: 'Compact<u32>',
            AllOfCounted: {
                id: 'StagingXcmV3MultiassetAssetId',
                fun: 'StagingXcmV3MultiassetWildFungibility',
                count: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup157: staging_xcm::v3::multiasset::WildFungibility
     **/
    StagingXcmV3MultiassetWildFungibility: {
        _enum: ['Fungible', 'NonFungible']
    },
    /**
     * Lookup158: staging_xcm::v3::WeightLimit
     **/
    StagingXcmV3WeightLimit: {
        _enum: {
            Unlimited: 'Null',
            Limited: 'SpWeightsWeightV2Weight'
        }
    },
    /**
     * Lookup159: staging_xcm::VersionedMultiAssets
     **/
    StagingXcmVersionedMultiAssets: {
        _enum: {
            __Unused0: 'Null',
            V2: 'StagingXcmV2MultiassetMultiAssets',
            __Unused2: 'Null',
            V3: 'StagingXcmV3MultiassetMultiAssets'
        }
    },
    /**
     * Lookup169: cumulus_pallet_dmp_queue::pallet::Call<T>
     **/
    CumulusPalletDmpQueueCall: {
        _enum: {
            service_overweight: {
                index: 'u64',
                weightLimit: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup170: pallet_utility::pallet::Call<T>
     **/
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: 'Vec<Call>',
            },
            as_derivative: {
                index: 'u16',
                call: 'Call',
            },
            batch_all: {
                calls: 'Vec<Call>',
            },
            dispatch_as: {
                asOrigin: 'CurioMainnetRuntimeOriginCaller',
                call: 'Call',
            },
            force_batch: {
                calls: 'Vec<Call>',
            },
            with_weight: {
                call: 'Call',
                weight: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup172: pallet_scheduler::pallet::Call<T>
     **/
    PalletSchedulerCall: {
        _enum: {
            schedule: {
                when: 'u64',
                maybePeriodic: 'Option<(u64,u32)>',
                priority: 'u8',
                call: 'Call',
            },
            cancel: {
                when: 'u64',
                index: 'u32',
            },
            schedule_named: {
                id: '[u8;32]',
                when: 'u64',
                maybePeriodic: 'Option<(u64,u32)>',
                priority: 'u8',
                call: 'Call',
            },
            cancel_named: {
                id: '[u8;32]',
            },
            schedule_after: {
                after: 'u64',
                maybePeriodic: 'Option<(u64,u32)>',
                priority: 'u8',
                call: 'Call',
            },
            schedule_named_after: {
                id: '[u8;32]',
                after: 'u64',
                maybePeriodic: 'Option<(u64,u32)>',
                priority: 'u8',
                call: 'Call'
            }
        }
    },
    /**
     * Lookup175: pallet_proxy::pallet::Call<T>
     **/
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: 'MultiAddress',
                forceProxyType: 'Option<CurioMainnetRuntimeUtilitiesProxyType>',
                call: 'Call',
            },
            add_proxy: {
                delegate: 'MultiAddress',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                delay: 'u64',
            },
            remove_proxy: {
                delegate: 'MultiAddress',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                delay: 'u64',
            },
            remove_proxies: 'Null',
            create_pure: {
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                delay: 'u64',
                index: 'u16',
            },
            kill_pure: {
                spawner: 'MultiAddress',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                index: 'u16',
                height: 'Compact<u64>',
                extIndex: 'Compact<u32>',
            },
            announce: {
                real: 'MultiAddress',
                callHash: 'H256',
            },
            remove_announcement: {
                real: 'MultiAddress',
                callHash: 'H256',
            },
            reject_announcement: {
                delegate: 'MultiAddress',
                callHash: 'H256',
            },
            proxy_announced: {
                delegate: 'MultiAddress',
                real: 'MultiAddress',
                forceProxyType: 'Option<CurioMainnetRuntimeUtilitiesProxyType>',
                call: 'Call'
            }
        }
    },
    /**
     * Lookup177: curio_mainnet_runtime::utilities::ProxyType
     **/
    CurioMainnetRuntimeUtilitiesProxyType: {
        _enum: ['Any', 'NonTransfer', 'Governance', 'Staking']
    },
    /**
     * Lookup178: pallet_multisig::pallet::Call<T>
     **/
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: 'Vec<AccountId32>',
                call: 'Call',
            },
            as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                maybeTimepoint: 'Option<PalletMultisigTimepoint>',
                call: 'Call',
                maxWeight: 'SpWeightsWeightV2Weight',
            },
            approve_as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                maybeTimepoint: 'Option<PalletMultisigTimepoint>',
                callHash: '[u8;32]',
                maxWeight: 'SpWeightsWeightV2Weight',
            },
            cancel_as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                timepoint: 'PalletMultisigTimepoint',
                callHash: '[u8;32]'
            }
        }
    },
    /**
     * Lookup180: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepoint: {
        height: 'u64',
        index: 'u32'
    },
    /**
     * Lookup181: pallet_identity::pallet::Call<T>
     **/
    PalletIdentityCall: {
        _enum: {
            add_registrar: {
                account: 'MultiAddress',
            },
            set_identity: {
                info: 'PalletIdentityIdentityInfo',
            },
            set_subs: {
                subs: 'Vec<(AccountId32,Data)>',
            },
            clear_identity: 'Null',
            request_judgement: {
                regIndex: 'Compact<u32>',
                maxFee: 'Compact<u128>',
            },
            cancel_request: {
                regIndex: 'u32',
            },
            set_fee: {
                index: 'Compact<u32>',
                fee: 'Compact<u128>',
            },
            set_account_id: {
                _alias: {
                    new_: 'new',
                },
                index: 'Compact<u32>',
                new_: 'MultiAddress',
            },
            set_fields: {
                index: 'Compact<u32>',
                fields: 'PalletIdentityBitFlags',
            },
            provide_judgement: {
                regIndex: 'Compact<u32>',
                target: 'MultiAddress',
                judgement: 'PalletIdentityJudgement',
                identity: 'H256',
            },
            kill_identity: {
                target: 'MultiAddress',
            },
            add_sub: {
                sub: 'MultiAddress',
                data: 'Data',
            },
            rename_sub: {
                sub: 'MultiAddress',
                data: 'Data',
            },
            remove_sub: {
                sub: 'MultiAddress',
            },
            quit_sub: 'Null'
        }
    },
    /**
     * Lookup182: pallet_identity::types::IdentityInfo<FieldLimit>
     **/
    PalletIdentityIdentityInfo: {
        additional: 'Vec<(Data,Data)>',
        display: 'Data',
        legal: 'Data',
        web: 'Data',
        riot: 'Data',
        email: 'Data',
        pgpFingerprint: 'Option<[u8;20]>',
        image: 'Data',
        twitter: 'Data'
    },
    /**
     * Lookup218: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
     **/
    PalletIdentityBitFlags: {
        _bitLength: 64,
        Display: 1,
        Legal: 2,
        Web: 4,
        Riot: 8,
        Email: 16,
        PgpFingerprint: 32,
        Image: 64,
        Twitter: 128
    },
    /**
     * Lookup219: pallet_identity::types::IdentityField
     **/
    PalletIdentityIdentityField: {
        _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
    },
    /**
     * Lookup220: pallet_identity::types::Judgement<Balance>
     **/
    PalletIdentityJudgement: {
        _enum: {
            Unknown: 'Null',
            FeePaid: 'u128',
            Reasonable: 'Null',
            KnownGood: 'Null',
            OutOfDate: 'Null',
            LowQuality: 'Null',
            Erroneous: 'Null'
        }
    },
    /**
     * Lookup221: pallet_tx_pause::pallet::Call<T>
     **/
    PalletTxPauseCall: {
        _enum: {
            pause: {
                fullName: '(Bytes,Bytes)',
            },
            unpause: {
                ident: '(Bytes,Bytes)'
            }
        }
    },
    /**
     * Lookup224: pallet_vesting::pallet::Call<T>
     **/
    PalletVestingCall: {
        _enum: {
            vest: 'Null',
            vest_other: {
                target: 'MultiAddress',
            },
            vested_transfer: {
                target: 'MultiAddress',
                schedule: 'PalletVestingVestingInfo',
            },
            force_vested_transfer: {
                source: 'MultiAddress',
                target: 'MultiAddress',
                schedule: 'PalletVestingVestingInfo',
            },
            merge_schedules: {
                schedule1Index: 'u32',
                schedule2Index: 'u32'
            }
        }
    },
    /**
     * Lookup225: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
     **/
    PalletVestingVestingInfo: {
        locked: 'u128',
        perBlock: 'u128',
        startingBlock: 'u64'
    },
    /**
     * Lookup226: pallet_treasury::pallet::Call<T, I>
     **/
    PalletTreasuryCall: {
        _enum: {
            propose_spend: {
                value: 'Compact<u128>',
                beneficiary: 'MultiAddress',
            },
            reject_proposal: {
                proposalId: 'Compact<u32>',
            },
            approve_proposal: {
                proposalId: 'Compact<u32>',
            },
            spend: {
                amount: 'Compact<u128>',
                beneficiary: 'MultiAddress',
            },
            remove_approval: {
                proposalId: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup227: pallet_bounties::pallet::Call<T, I>
     **/
    PalletBountiesCall: {
        _enum: {
            propose_bounty: {
                value: 'Compact<u128>',
                description: 'Bytes',
            },
            approve_bounty: {
                bountyId: 'Compact<u32>',
            },
            propose_curator: {
                bountyId: 'Compact<u32>',
                curator: 'MultiAddress',
                fee: 'Compact<u128>',
            },
            unassign_curator: {
                bountyId: 'Compact<u32>',
            },
            accept_curator: {
                bountyId: 'Compact<u32>',
            },
            award_bounty: {
                bountyId: 'Compact<u32>',
                beneficiary: 'MultiAddress',
            },
            claim_bounty: {
                bountyId: 'Compact<u32>',
            },
            close_bounty: {
                bountyId: 'Compact<u32>',
            },
            extend_bounty_expiry: {
                bountyId: 'Compact<u32>',
                remark: 'Bytes'
            }
        }
    },
    /**
     * Lookup228: pallet_preimage::pallet::Call<T>
     **/
    PalletPreimageCall: {
        _enum: {
            note_preimage: {
                bytes: 'Bytes',
            },
            unnote_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            request_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            unrequest_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup229: pallet_dex::module::Call<T>
     **/
    PalletDexModuleCall: {
        _enum: {
            swap_with_exact_supply: {
                path: 'Vec<CurioMainnetRuntimeCurrencyId>',
                supplyAmount: 'Compact<u128>',
                minTargetAmount: 'Compact<u128>',
            },
            swap_with_exact_target: {
                path: 'Vec<CurioMainnetRuntimeCurrencyId>',
                targetAmount: 'Compact<u128>',
                maxSupplyAmount: 'Compact<u128>',
            },
            add_liquidity: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
                maxAmountA: 'Compact<u128>',
                maxAmountB: 'Compact<u128>',
                minShareIncrement: 'Compact<u128>',
                stakeIncrementShare: 'bool',
            },
            add_provision: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
                amountA: 'Compact<u128>',
                amountB: 'Compact<u128>',
            },
            claim_dex_share: {
                owner: 'AccountId32',
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
            },
            remove_liquidity: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
                removeShare: 'Compact<u128>',
                minWithdrawnA: 'Compact<u128>',
                minWithdrawnB: 'Compact<u128>',
                byUnstake: 'bool',
            },
            list_provisioning: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
                minContributionA: 'Compact<u128>',
                minContributionB: 'Compact<u128>',
                targetProvisionA: 'Compact<u128>',
                targetProvisionB: 'Compact<u128>',
                notBefore: 'Compact<u64>',
            },
            update_provisioning_parameters: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
                minContributionA: 'Compact<u128>',
                minContributionB: 'Compact<u128>',
                targetProvisionA: 'Compact<u128>',
                targetProvisionB: 'Compact<u128>',
                notBefore: 'Compact<u64>',
            },
            end_provisioning: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
            },
            enable_trading_pair: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
            },
            disable_trading_pair: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
            },
            refund_provision: {
                owner: 'AccountId32',
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
            },
            abort_provisioning: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId'
            }
        }
    },
    /**
     * Lookup231: curio_mainnet_runtime::currency_id::CurrencyId
     **/
    CurioMainnetRuntimeCurrencyId: {
        _enum: {
            Token: 'CurioMainnetRuntimeCurrencyIdTokenSymbol',
            ForeignAsset: 'u32',
            DexShare: '(CurioMainnetRuntimeCurrencyIdDexShare,CurioMainnetRuntimeCurrencyIdDexShare)'
        }
    },
    /**
     * Lookup232: curio_mainnet_runtime::currency_id::TokenSymbol
     **/
    CurioMainnetRuntimeCurrencyIdTokenSymbol: {
        _enum: ['CGT', '__Unused1', 'KSM', '__Unused3', '__Unused4', '__Unused5', '__Unused6', '__Unused7', '__Unused8', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', '__Unused16', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', 'DAI', '__Unused32', 'USDC']
    },
    /**
     * Lookup233: curio_mainnet_runtime::currency_id::DexShare
     **/
    CurioMainnetRuntimeCurrencyIdDexShare: {
        _enum: {
            Token: 'CurioMainnetRuntimeCurrencyIdTokenSymbol',
            ForeignAsset: 'u32'
        }
    },
    /**
     * Lookup234: pallet_currencies::module::Call<T>
     **/
    PalletCurrenciesModuleCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'Compact<u128>',
            },
            transfer_native_currency: {
                dest: 'MultiAddress',
                amount: 'Compact<u128>',
            },
            update_balance: {
                who: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'i128',
            },
            sweep_dust: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                accounts: 'Vec<AccountId32>'
            }
        }
    },
    /**
     * Lookup236: orml_tokens::module::Call<T>
     **/
    OrmlTokensModuleCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'Compact<u128>',
            },
            transfer_all: {
                dest: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                keepAlive: 'bool',
            },
            transfer_keep_alive: {
                dest: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'Compact<u128>',
            },
            force_transfer: {
                source: 'MultiAddress',
                dest: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'Compact<u128>',
            },
            set_balance: {
                who: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                newFree: 'Compact<u128>',
                newReserved: 'Compact<u128>'
            }
        }
    },
    /**
     * Lookup237: pallet_bridge::pallet::Call<T>
     **/
    PalletBridgeCall: {
        _enum: {
            mint: {
                requestId: 'u128',
                to: 'AccountId32',
                token: 'H160',
                amount: 'u128',
            },
            batch_mint: {
                data: 'Vec<PalletBridgeMintData>',
            },
            burn: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                to: 'H160',
                amount: 'u128',
            },
            set_full_pause: {
                pause: 'bool',
            },
            set_currency_pause: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                pause: 'bool',
            },
            set_eth_blacklist: {
                account: 'H160',
                blacklisted: 'bool',
            },
            set_sub_blacklist: {
                account: 'AccountId32',
                blacklisted: 'bool',
            },
            set_manager: {
                manager: 'AccountId32',
                isManager: 'bool',
            },
            add_supported_currency: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                token: 'H160',
                pause: 'bool',
            },
            remove_supported_currency: {
                currencyId: 'CurioMainnetRuntimeCurrencyId'
            }
        }
    },
    /**
     * Lookup240: pallet_bridge::MintData<sp_core::crypto::AccountId32, Balance>
     **/
    PalletBridgeMintData: {
        requestId: 'u128',
        to: 'AccountId32',
        token: 'H160',
        amount: 'u128'
    },
    /**
     * Lookup241: orml_xtokens::module::Call<T>
     **/
    OrmlXtokensModuleCall: {
        _enum: {
            transfer: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'u128',
                dest: 'StagingXcmVersionedMultiLocation',
                destWeightLimit: 'StagingXcmV3WeightLimit',
            },
            transfer_multiasset: {
                asset: 'StagingXcmVersionedMultiAsset',
                dest: 'StagingXcmVersionedMultiLocation',
                destWeightLimit: 'StagingXcmV3WeightLimit',
            },
            transfer_with_fee: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'u128',
                fee: 'u128',
                dest: 'StagingXcmVersionedMultiLocation',
                destWeightLimit: 'StagingXcmV3WeightLimit',
            },
            transfer_multiasset_with_fee: {
                asset: 'StagingXcmVersionedMultiAsset',
                fee: 'StagingXcmVersionedMultiAsset',
                dest: 'StagingXcmVersionedMultiLocation',
                destWeightLimit: 'StagingXcmV3WeightLimit',
            },
            transfer_multicurrencies: {
                currencies: 'Vec<(CurioMainnetRuntimeCurrencyId,u128)>',
                feeItem: 'u32',
                dest: 'StagingXcmVersionedMultiLocation',
                destWeightLimit: 'StagingXcmV3WeightLimit',
            },
            transfer_multiassets: {
                assets: 'StagingXcmVersionedMultiAssets',
                feeItem: 'u32',
                dest: 'StagingXcmVersionedMultiLocation',
                destWeightLimit: 'StagingXcmV3WeightLimit'
            }
        }
    },
    /**
     * Lookup242: staging_xcm::VersionedMultiAsset
     **/
    StagingXcmVersionedMultiAsset: {
        _enum: {
            __Unused0: 'Null',
            V2: 'StagingXcmV2MultiAsset',
            __Unused2: 'Null',
            V3: 'StagingXcmV3MultiAsset'
        }
    },
    /**
     * Lookup245: orml_asset_registry::module::Call<T>
     **/
    OrmlAssetRegistryModuleCall: {
        _enum: {
            register_asset: {
                metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
                assetId: 'Option<CurioMainnetRuntimeCurrencyId>',
            },
            update_asset: {
                assetId: 'CurioMainnetRuntimeCurrencyId',
                decimals: 'Option<u32>',
                name: 'Option<Bytes>',
                symbol: 'Option<Bytes>',
                existentialDeposit: 'Option<u128>',
                location: 'Option<Option<StagingXcmVersionedMultiLocation>>',
                additional: 'Option<CurioCommonRuntimeXcmConfigCustomMetadata>'
            }
        }
    },
    /**
     * Lookup246: orml_traits::asset_registry::AssetMetadata<Balance, curio_common_runtime::xcm_config::CustomMetadata, StringLimit>
     **/
    OrmlTraitsAssetRegistryAssetMetadata: {
        decimals: 'u32',
        name: 'Bytes',
        symbol: 'Bytes',
        existentialDeposit: 'u128',
        location: 'Option<StagingXcmVersionedMultiLocation>',
        additional: 'CurioCommonRuntimeXcmConfigCustomMetadata'
    },
    /**
     * Lookup247: curio_common_runtime::xcm_config::CustomMetadata
     **/
    CurioCommonRuntimeXcmConfigCustomMetadata: {
        feePerSecond: 'Option<u128>'
    },
    /**
     * Lookup255: pallet_incentives::module::Call<T>
     **/
    PalletIncentivesModuleCall: {
        _enum: {
            deposit_dex_share: {
                lpCurrencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'Compact<u128>',
            },
            withdraw_dex_share: {
                lpCurrencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'Compact<u128>',
            },
            claim_rewards: {
                poolId: 'PalletIncentivesPoolId',
            },
            update_incentive_rewards: {
                updates: 'Vec<(PalletIncentivesPoolId,Vec<(CurioMainnetRuntimeCurrencyId,u128)>)>',
            },
            update_claim_reward_deduction_rates: {
                updates: 'Vec<(PalletIncentivesPoolId,u128)>'
            }
        }
    },
    /**
     * Lookup256: pallet_incentives::types::PoolId<curio_mainnet_runtime::currency_id::CurrencyId>
     **/
    PalletIncentivesPoolId: {
        _enum: {
            Dex: 'CurioMainnetRuntimeCurrencyId'
        }
    },
    /**
     * Lookup262: pallet_sudo::pallet::Call<T>
     **/
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: 'Call',
            },
            sudo_unchecked_weight: {
                call: 'Call',
                weight: 'SpWeightsWeightV2Weight',
            },
            set_key: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
            },
            sudo_as: {
                who: 'MultiAddress',
                call: 'Call'
            }
        }
    },
    /**
     * Lookup264: pallet_conviction_voting::types::Tally<Votes, Total>
     **/
    PalletConvictionVotingTally: {
        ayes: 'u128',
        nays: 'u128',
        support: 'u128'
    },
    /**
     * Lookup265: pallet_ranked_collective::pallet::Event<T, I>
     **/
    PalletRankedCollectiveEvent: {
        _enum: {
            MemberAdded: {
                who: 'AccountId32',
            },
            RankChanged: {
                who: 'AccountId32',
                rank: 'u16',
            },
            MemberRemoved: {
                who: 'AccountId32',
                rank: 'u16',
            },
            Voted: {
                who: 'AccountId32',
                poll: 'u32',
                vote: 'PalletRankedCollectiveVoteRecord',
                tally: 'PalletRankedCollectiveTally'
            }
        }
    },
    /**
     * Lookup266: pallet_ranked_collective::VoteRecord
     **/
    PalletRankedCollectiveVoteRecord: {
        _enum: {
            Aye: 'u32',
            Nay: 'u32'
        }
    },
    /**
     * Lookup267: pallet_ranked_collective::Tally<T, I, M>
     **/
    PalletRankedCollectiveTally: {
        bareAyes: 'u32',
        ayes: 'u32',
        nays: 'u32'
    },
    /**
     * Lookup269: pallet_whitelist::pallet::Event<T>
     **/
    PalletWhitelistEvent: {
        _enum: {
            CallWhitelisted: {
                callHash: 'H256',
            },
            WhitelistedCallRemoved: {
                callHash: 'H256',
            },
            WhitelistedCallDispatched: {
                callHash: 'H256',
                result: 'Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>'
            }
        }
    },
    /**
     * Lookup271: frame_support::dispatch::PostDispatchInfo
     **/
    FrameSupportDispatchPostDispatchInfo: {
        actualWeight: 'Option<SpWeightsWeightV2Weight>',
        paysFee: 'FrameSupportDispatchPays'
    },
    /**
     * Lookup273: sp_runtime::DispatchErrorWithPostInfo<frame_support::dispatch::PostDispatchInfo>
     **/
    SpRuntimeDispatchErrorWithPostInfo: {
        postInfo: 'FrameSupportDispatchPostDispatchInfo',
        error: 'SpRuntimeDispatchError'
    },
    /**
     * Lookup274: cumulus_pallet_xcmp_queue::pallet::Event<T>
     **/
    CumulusPalletXcmpQueueEvent: {
        _enum: {
            Success: {
                messageHash: '[u8;32]',
                messageId: '[u8;32]',
                weight: 'SpWeightsWeightV2Weight',
            },
            Fail: {
                messageHash: '[u8;32]',
                messageId: '[u8;32]',
                error: 'StagingXcmV3TraitsError',
                weight: 'SpWeightsWeightV2Weight',
            },
            BadVersion: {
                messageHash: '[u8;32]',
            },
            BadFormat: {
                messageHash: '[u8;32]',
            },
            XcmpMessageSent: {
                messageHash: '[u8;32]',
            },
            OverweightEnqueued: {
                sender: 'u32',
                sentAt: 'u32',
                index: 'u64',
                required: 'SpWeightsWeightV2Weight',
            },
            OverweightServiced: {
                index: 'u64',
                used: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup275: pallet_xcm::pallet::Event<T>
     **/
    PalletXcmEvent: {
        _enum: {
            Attempted: {
                outcome: 'StagingXcmV3TraitsOutcome',
            },
            Sent: {
                origin: 'StagingXcmV3MultiLocation',
                destination: 'StagingXcmV3MultiLocation',
                message: 'StagingXcmV3Xcm',
                messageId: '[u8;32]',
            },
            UnexpectedResponse: {
                origin: 'StagingXcmV3MultiLocation',
                queryId: 'u64',
            },
            ResponseReady: {
                queryId: 'u64',
                response: 'StagingXcmV3Response',
            },
            Notified: {
                queryId: 'u64',
                palletIndex: 'u8',
                callIndex: 'u8',
            },
            NotifyOverweight: {
                queryId: 'u64',
                palletIndex: 'u8',
                callIndex: 'u8',
                actualWeight: 'SpWeightsWeightV2Weight',
                maxBudgetedWeight: 'SpWeightsWeightV2Weight',
            },
            NotifyDispatchError: {
                queryId: 'u64',
                palletIndex: 'u8',
                callIndex: 'u8',
            },
            NotifyDecodeFailed: {
                queryId: 'u64',
                palletIndex: 'u8',
                callIndex: 'u8',
            },
            InvalidResponder: {
                origin: 'StagingXcmV3MultiLocation',
                queryId: 'u64',
                expectedLocation: 'Option<StagingXcmV3MultiLocation>',
            },
            InvalidResponderVersion: {
                origin: 'StagingXcmV3MultiLocation',
                queryId: 'u64',
            },
            ResponseTaken: {
                queryId: 'u64',
            },
            AssetsTrapped: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
                origin: 'StagingXcmV3MultiLocation',
                assets: 'StagingXcmVersionedMultiAssets',
            },
            VersionChangeNotified: {
                destination: 'StagingXcmV3MultiLocation',
                result: 'u32',
                cost: 'StagingXcmV3MultiassetMultiAssets',
                messageId: '[u8;32]',
            },
            SupportedVersionChanged: {
                location: 'StagingXcmV3MultiLocation',
                version: 'u32',
            },
            NotifyTargetSendFail: {
                location: 'StagingXcmV3MultiLocation',
                queryId: 'u64',
                error: 'StagingXcmV3TraitsError',
            },
            NotifyTargetMigrationFail: {
                location: 'StagingXcmVersionedMultiLocation',
                queryId: 'u64',
            },
            InvalidQuerierVersion: {
                origin: 'StagingXcmV3MultiLocation',
                queryId: 'u64',
            },
            InvalidQuerier: {
                origin: 'StagingXcmV3MultiLocation',
                queryId: 'u64',
                expectedQuerier: 'StagingXcmV3MultiLocation',
                maybeActualQuerier: 'Option<StagingXcmV3MultiLocation>',
            },
            VersionNotifyStarted: {
                destination: 'StagingXcmV3MultiLocation',
                cost: 'StagingXcmV3MultiassetMultiAssets',
                messageId: '[u8;32]',
            },
            VersionNotifyRequested: {
                destination: 'StagingXcmV3MultiLocation',
                cost: 'StagingXcmV3MultiassetMultiAssets',
                messageId: '[u8;32]',
            },
            VersionNotifyUnrequested: {
                destination: 'StagingXcmV3MultiLocation',
                cost: 'StagingXcmV3MultiassetMultiAssets',
                messageId: '[u8;32]',
            },
            FeesPaid: {
                paying: 'StagingXcmV3MultiLocation',
                fees: 'StagingXcmV3MultiassetMultiAssets',
            },
            AssetsClaimed: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
                origin: 'StagingXcmV3MultiLocation',
                assets: 'StagingXcmVersionedMultiAssets'
            }
        }
    },
    /**
     * Lookup276: staging_xcm::v3::traits::Outcome
     **/
    StagingXcmV3TraitsOutcome: {
        _enum: {
            Complete: 'SpWeightsWeightV2Weight',
            Incomplete: '(SpWeightsWeightV2Weight,StagingXcmV3TraitsError)',
            Error: 'StagingXcmV3TraitsError'
        }
    },
    /**
     * Lookup277: cumulus_pallet_xcm::pallet::Event<T>
     **/
    CumulusPalletXcmEvent: {
        _enum: {
            InvalidFormat: '[u8;32]',
            UnsupportedVersion: '[u8;32]',
            ExecutedDownward: '([u8;32],StagingXcmV3TraitsOutcome)'
        }
    },
    /**
     * Lookup278: cumulus_pallet_dmp_queue::pallet::Event<T>
     **/
    CumulusPalletDmpQueueEvent: {
        _enum: {
            InvalidFormat: {
                messageHash: '[u8;32]',
            },
            UnsupportedVersion: {
                messageHash: '[u8;32]',
            },
            ExecutedDownward: {
                messageHash: '[u8;32]',
                messageId: '[u8;32]',
                outcome: 'StagingXcmV3TraitsOutcome',
            },
            WeightExhausted: {
                messageHash: '[u8;32]',
                messageId: '[u8;32]',
                remainingWeight: 'SpWeightsWeightV2Weight',
                requiredWeight: 'SpWeightsWeightV2Weight',
            },
            OverweightEnqueued: {
                messageHash: '[u8;32]',
                messageId: '[u8;32]',
                overweightIndex: 'u64',
                requiredWeight: 'SpWeightsWeightV2Weight',
            },
            OverweightServiced: {
                overweightIndex: 'u64',
                weightUsed: 'SpWeightsWeightV2Weight',
            },
            MaxMessagesExhausted: {
                messageHash: '[u8;32]'
            }
        }
    },
    /**
     * Lookup279: pallet_utility::pallet::Event
     **/
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: 'u32',
                error: 'SpRuntimeDispatchError',
            },
            BatchCompleted: 'Null',
            BatchCompletedWithErrors: 'Null',
            ItemCompleted: 'Null',
            ItemFailed: {
                error: 'SpRuntimeDispatchError',
            },
            DispatchedAs: {
                result: 'Result<Null, SpRuntimeDispatchError>'
            }
        }
    },
    /**
     * Lookup281: pallet_scheduler::pallet::Event<T>
     **/
    PalletSchedulerEvent: {
        _enum: {
            Scheduled: {
                when: 'u64',
                index: 'u32',
            },
            Canceled: {
                when: 'u64',
                index: 'u32',
            },
            Dispatched: {
                task: '(u64,u32)',
                id: 'Option<[u8;32]>',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            CallUnavailable: {
                task: '(u64,u32)',
                id: 'Option<[u8;32]>',
            },
            PeriodicFailed: {
                task: '(u64,u32)',
                id: 'Option<[u8;32]>',
            },
            PermanentlyOverweight: {
                task: '(u64,u32)',
                id: 'Option<[u8;32]>'
            }
        }
    },
    /**
     * Lookup282: pallet_proxy::pallet::Event<T>
     **/
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            PureCreated: {
                pure: 'AccountId32',
                who: 'AccountId32',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                disambiguationIndex: 'u16',
            },
            Announced: {
                real: 'AccountId32',
                proxy: 'AccountId32',
                callHash: 'H256',
            },
            ProxyAdded: {
                delegator: 'AccountId32',
                delegatee: 'AccountId32',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                delay: 'u64',
            },
            ProxyRemoved: {
                delegator: 'AccountId32',
                delegatee: 'AccountId32',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                delay: 'u64'
            }
        }
    },
    /**
     * Lookup283: pallet_multisig::pallet::Event<T>
     **/
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: 'AccountId32',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
            },
            MultisigApproval: {
                approving: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
            },
            MultisigExecuted: {
                approving: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            MultisigCancelled: {
                cancelling: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]'
            }
        }
    },
    /**
     * Lookup284: pallet_identity::pallet::Event<T>
     **/
    PalletIdentityEvent: {
        _enum: {
            IdentitySet: {
                who: 'AccountId32',
            },
            IdentityCleared: {
                who: 'AccountId32',
                deposit: 'u128',
            },
            IdentityKilled: {
                who: 'AccountId32',
                deposit: 'u128',
            },
            JudgementRequested: {
                who: 'AccountId32',
                registrarIndex: 'u32',
            },
            JudgementUnrequested: {
                who: 'AccountId32',
                registrarIndex: 'u32',
            },
            JudgementGiven: {
                target: 'AccountId32',
                registrarIndex: 'u32',
            },
            RegistrarAdded: {
                registrarIndex: 'u32',
            },
            SubIdentityAdded: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128',
            },
            SubIdentityRemoved: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128',
            },
            SubIdentityRevoked: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128'
            }
        }
    },
    /**
     * Lookup285: pallet_tx_pause::pallet::Event<T>
     **/
    PalletTxPauseEvent: {
        _enum: {
            CallPaused: {
                fullName: '(Bytes,Bytes)',
            },
            CallUnpaused: {
                fullName: '(Bytes,Bytes)'
            }
        }
    },
    /**
     * Lookup286: pallet_vesting::pallet::Event<T>
     **/
    PalletVestingEvent: {
        _enum: {
            VestingUpdated: {
                account: 'AccountId32',
                unvested: 'u128',
            },
            VestingCompleted: {
                account: 'AccountId32'
            }
        }
    },
    /**
     * Lookup287: pallet_treasury::pallet::Event<T, I>
     **/
    PalletTreasuryEvent: {
        _enum: {
            Proposed: {
                proposalIndex: 'u32',
            },
            Spending: {
                budgetRemaining: 'u128',
            },
            Awarded: {
                proposalIndex: 'u32',
                award: 'u128',
                account: 'AccountId32',
            },
            Rejected: {
                proposalIndex: 'u32',
                slashed: 'u128',
            },
            Burnt: {
                burntFunds: 'u128',
            },
            Rollover: {
                rolloverBalance: 'u128',
            },
            Deposit: {
                value: 'u128',
            },
            SpendApproved: {
                proposalIndex: 'u32',
                amount: 'u128',
                beneficiary: 'AccountId32',
            },
            UpdatedInactive: {
                reactivated: 'u128',
                deactivated: 'u128'
            }
        }
    },
    /**
     * Lookup288: pallet_bounties::pallet::Event<T, I>
     **/
    PalletBountiesEvent: {
        _enum: {
            BountyProposed: {
                index: 'u32',
            },
            BountyRejected: {
                index: 'u32',
                bond: 'u128',
            },
            BountyBecameActive: {
                index: 'u32',
            },
            BountyAwarded: {
                index: 'u32',
                beneficiary: 'AccountId32',
            },
            BountyClaimed: {
                index: 'u32',
                payout: 'u128',
                beneficiary: 'AccountId32',
            },
            BountyCanceled: {
                index: 'u32',
            },
            BountyExtended: {
                index: 'u32'
            }
        }
    },
    /**
     * Lookup289: pallet_preimage::pallet::Event<T>
     **/
    PalletPreimageEvent: {
        _enum: {
            Noted: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            Requested: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            Cleared: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup290: pallet_dex::module::Event<T>
     **/
    PalletDexModuleEvent: {
        _enum: {
            AddProvision: {
                who: 'AccountId32',
                currency0: 'CurioMainnetRuntimeCurrencyId',
                contribution0: 'u128',
                currency1: 'CurioMainnetRuntimeCurrencyId',
                contribution1: 'u128',
            },
            AddLiquidity: {
                who: 'AccountId32',
                currency0: 'CurioMainnetRuntimeCurrencyId',
                pool0: 'u128',
                currency1: 'CurioMainnetRuntimeCurrencyId',
                pool1: 'u128',
                shareIncrement: 'u128',
            },
            RemoveLiquidity: {
                who: 'AccountId32',
                currency0: 'CurioMainnetRuntimeCurrencyId',
                pool0: 'u128',
                currency1: 'CurioMainnetRuntimeCurrencyId',
                pool1: 'u128',
                shareDecrement: 'u128',
            },
            Swap: {
                trader: 'AccountId32',
                path: 'Vec<CurioMainnetRuntimeCurrencyId>',
                liquidityChanges: 'Vec<u128>',
            },
            EnableTradingPair: {
                tradingPair: 'PalletDexTradingPair',
            },
            ListProvisioning: {
                tradingPair: 'PalletDexTradingPair',
            },
            DisableTradingPair: {
                tradingPair: 'PalletDexTradingPair',
            },
            ProvisioningToEnabled: {
                tradingPair: 'PalletDexTradingPair',
                pool0: 'u128',
                pool1: 'u128',
                shareAmount: 'u128',
            },
            RefundProvision: {
                who: 'AccountId32',
                currency0: 'CurioMainnetRuntimeCurrencyId',
                contribution0: 'u128',
                currency1: 'CurioMainnetRuntimeCurrencyId',
                contribution1: 'u128',
            },
            ProvisioningAborted: {
                tradingPair: 'PalletDexTradingPair',
                accumulatedProvision0: 'u128',
                accumulatedProvision1: 'u128'
            }
        }
    },
    /**
     * Lookup292: pallet_dex::types::TradingPair<curio_mainnet_runtime::currency_id::CurrencyId>
     **/
    PalletDexTradingPair: '(CurioMainnetRuntimeCurrencyId,CurioMainnetRuntimeCurrencyId)',
    /**
     * Lookup293: pallet_currencies::module::Event<T>
     **/
    PalletCurrenciesModuleEvent: {
        _enum: {
            Transferred: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            Withdrawn: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Deposited: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            DustSwept: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup294: orml_tokens::module::Event<T>
     **/
    OrmlTokensModuleEvent: {
        _enum: {
            Endowed: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            DustLost: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Transfer: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            Reserved: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Unreserved: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            ReserveRepatriated: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                status: 'FrameSupportTokensMiscBalanceStatus',
            },
            BalanceSet: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                free: 'u128',
                reserved: 'u128',
            },
            TotalIssuanceSet: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'u128',
            },
            Withdrawn: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Slashed: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                freeAmount: 'u128',
                reservedAmount: 'u128',
            },
            Deposited: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            LockSet: {
                lockId: '[u8;8]',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            LockRemoved: {
                lockId: '[u8;8]',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
            },
            Locked: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Unlocked: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Issued: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'u128',
            },
            Rescinded: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup295: pallet_bridge::pallet::Event<T>
     **/
    PalletBridgeEvent: {
        _enum: {
            Paused: 'Null',
            Unpaused: 'Null',
            Mint: {
                requestId: 'u128',
                to: 'AccountId32',
                token: 'H160',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'u128',
            },
            Burn: {
                requestId: 'u128',
                from: 'AccountId32',
                to: 'H160',
                token: 'H160',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'u128',
            },
            ManagerAdded: {
                manager: 'AccountId32',
            },
            ManagerRemoved: {
                manager: 'AccountId32',
            },
            CurrencyPaused: {
                id: 'CurioMainnetRuntimeCurrencyId',
            },
            CurrencyUnpaused: {
                id: 'CurioMainnetRuntimeCurrencyId',
            },
            CurrencyAdded: {
                id: 'CurioMainnetRuntimeCurrencyId',
            },
            CurrencyRemoved: {
                id: 'CurioMainnetRuntimeCurrencyId',
            },
            BlacklistedSub: {
                account: 'AccountId32',
            },
            RemovedFromBlacklistSub: {
                account: 'AccountId32',
            },
            BlacklistedEth: {
                account: 'H160',
            },
            RemovedFromBlacklistEth: {
                account: 'H160'
            }
        }
    },
    /**
     * Lookup296: orml_xtokens::module::Event<T>
     **/
    OrmlXtokensModuleEvent: {
        _enum: {
            TransferredMultiAssets: {
                sender: 'AccountId32',
                assets: 'StagingXcmV3MultiassetMultiAssets',
                fee: 'StagingXcmV3MultiAsset',
                dest: 'StagingXcmV3MultiLocation'
            }
        }
    },
    /**
     * Lookup297: orml_unknown_tokens::module::Event
     **/
    OrmlUnknownTokensModuleEvent: {
        _enum: {
            Deposited: {
                asset: 'StagingXcmV3MultiAsset',
                who: 'StagingXcmV3MultiLocation',
            },
            Withdrawn: {
                asset: 'StagingXcmV3MultiAsset',
                who: 'StagingXcmV3MultiLocation'
            }
        }
    },
    /**
     * Lookup298: orml_asset_registry::module::Event<T>
     **/
    OrmlAssetRegistryModuleEvent: {
        _enum: {
            RegisteredAsset: {
                assetId: 'CurioMainnetRuntimeCurrencyId',
                metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
            },
            UpdatedAsset: {
                assetId: 'CurioMainnetRuntimeCurrencyId',
                metadata: 'OrmlTraitsAssetRegistryAssetMetadata'
            }
        }
    },
    /**
     * Lookup299: pallet_incentives::module::Event<T>
     **/
    PalletIncentivesModuleEvent: {
        _enum: {
            DepositDexShare: {
                who: 'AccountId32',
                dexShareType: 'CurioMainnetRuntimeCurrencyId',
                deposit: 'u128',
            },
            WithdrawDexShare: {
                who: 'AccountId32',
                dexShareType: 'CurioMainnetRuntimeCurrencyId',
                withdraw: 'u128',
            },
            ClaimRewards: {
                who: 'AccountId32',
                pool: 'PalletIncentivesPoolId',
                rewardCurrencyId: 'CurioMainnetRuntimeCurrencyId',
                actualAmount: 'u128',
                deductionAmount: 'u128',
            },
            IncentiveRewardAmountUpdated: {
                pool: 'PalletIncentivesPoolId',
                rewardCurrencyId: 'CurioMainnetRuntimeCurrencyId',
                rewardAmountPerPeriod: 'u128',
            },
            ClaimRewardDeductionRateUpdated: {
                pool: 'PalletIncentivesPoolId',
                deductionRate: 'u128'
            }
        }
    },
    /**
     * Lookup300: pallet_sudo::pallet::Event<T>
     **/
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: 'Result<Null, SpRuntimeDispatchError>',
            },
            KeyChanged: {
                oldSudoer: 'Option<AccountId32>',
            },
            SudoAsDone: {
                sudoResult: 'Result<Null, SpRuntimeDispatchError>'
            }
        }
    },
    /**
     * Lookup302: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: 'u32',
            Finalization: 'Null',
            Initialization: 'Null'
        }
    },
    /**
     * Lookup305: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: 'Compact<u32>',
        specName: 'Text'
    },
    /**
     * Lookup307: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: 'SpWeightsWeightV2Weight',
        maxBlock: 'SpWeightsWeightV2Weight',
        perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
    },
    /**
     * Lookup308: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: 'FrameSystemLimitsWeightsPerClass',
        operational: 'FrameSystemLimitsWeightsPerClass',
        mandatory: 'FrameSystemLimitsWeightsPerClass'
    },
    /**
     * Lookup309: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: 'SpWeightsWeightV2Weight',
        maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
        maxTotal: 'Option<SpWeightsWeightV2Weight>',
        reserved: 'Option<SpWeightsWeightV2Weight>'
    },
    /**
     * Lookup310: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: 'FrameSupportDispatchPerDispatchClassU32'
    },
    /**
     * Lookup311: frame_support::dispatch::PerDispatchClass<T>
     **/
    FrameSupportDispatchPerDispatchClassU32: {
        normal: 'u32',
        operational: 'u32',
        mandatory: 'u32'
    },
    /**
     * Lookup312: sp_weights::RuntimeDbWeight
     **/
    SpWeightsRuntimeDbWeight: {
        read: 'u64',
        write: 'u64'
    },
    /**
     * Lookup313: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: 'Text',
        implName: 'Text',
        authoringVersion: 'u32',
        specVersion: 'u32',
        implVersion: 'u32',
        apis: 'Vec<([u8;8],u32)>',
        transactionVersion: 'u32',
        stateVersion: 'u8'
    },
    /**
     * Lookup317: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
    },
    /**
     * Lookup319: pallet_indices::pallet::Error<T>
     **/
    PalletIndicesError: {
        _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
    },
    /**
     * Lookup321: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
     **/
    CumulusPalletParachainSystemUnincludedSegmentAncestor: {
        usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
        paraHeadHash: 'Option<H256>',
        consumedGoAheadSignal: 'Option<PolkadotPrimitivesV5UpgradeGoAhead>'
    },
    /**
     * Lookup322: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
     **/
    CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
        umpMsgCount: 'u32',
        umpTotalBytes: 'u32',
        hrmpOutgoing: 'BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>'
    },
    /**
     * Lookup324: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
     **/
    CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
        msgCount: 'u32',
        totalBytes: 'u32'
    },
    /**
     * Lookup328: polkadot_primitives::v5::UpgradeGoAhead
     **/
    PolkadotPrimitivesV5UpgradeGoAhead: {
        _enum: ['Abort', 'GoAhead']
    },
    /**
     * Lookup329: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
     **/
    CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
        usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
        hrmpWatermark: 'Option<u32>',
        consumedGoAheadSignal: 'Option<PolkadotPrimitivesV5UpgradeGoAhead>'
    },
    /**
     * Lookup331: polkadot_primitives::v5::UpgradeRestriction
     **/
    PolkadotPrimitivesV5UpgradeRestriction: {
        _enum: ['Present']
    },
    /**
     * Lookup332: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
     **/
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
        dmqMqcHead: 'H256',
        relayDispatchQueueRemainingCapacity: 'CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity',
        ingressChannels: 'Vec<(u32,PolkadotPrimitivesV5AbridgedHrmpChannel)>',
        egressChannels: 'Vec<(u32,PolkadotPrimitivesV5AbridgedHrmpChannel)>'
    },
    /**
     * Lookup333: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
     **/
    CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
        remainingCount: 'u32',
        remainingSize: 'u32'
    },
    /**
     * Lookup336: polkadot_primitives::v5::AbridgedHrmpChannel
     **/
    PolkadotPrimitivesV5AbridgedHrmpChannel: {
        maxCapacity: 'u32',
        maxTotalSize: 'u32',
        maxMessageSize: 'u32',
        msgCount: 'u32',
        totalSize: 'u32',
        mqcHead: 'Option<H256>'
    },
    /**
     * Lookup337: polkadot_primitives::v5::AbridgedHostConfiguration
     **/
    PolkadotPrimitivesV5AbridgedHostConfiguration: {
        maxCodeSize: 'u32',
        maxHeadDataSize: 'u32',
        maxUpwardQueueCount: 'u32',
        maxUpwardQueueSize: 'u32',
        maxUpwardMessageSize: 'u32',
        maxUpwardMessageNumPerCandidate: 'u32',
        hrmpMaxMessageNumPerCandidate: 'u32',
        validationUpgradeCooldown: 'u32',
        validationUpgradeDelay: 'u32',
        asyncBackingParams: 'PolkadotPrimitivesVstagingAsyncBackingParams'
    },
    /**
     * Lookup338: polkadot_primitives::vstaging::AsyncBackingParams
     **/
    PolkadotPrimitivesVstagingAsyncBackingParams: {
        maxCandidateDepth: 'u32',
        allowedAncestryLen: 'u32'
    },
    /**
     * Lookup344: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
     **/
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: 'u32',
        data: 'Bytes'
    },
    /**
     * Lookup345: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
     **/
    CumulusPalletParachainSystemCodeUpgradeAuthorization: {
        codeHash: 'H256',
        checkVersion: 'bool'
    },
    /**
     * Lookup346: cumulus_pallet_parachain_system::pallet::Error<T>
     **/
    CumulusPalletParachainSystemError: {
        _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
    },
    /**
     * Lookup348: pallet_balances::types::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: '[u8;8]',
        amount: 'u128',
        reasons: 'PalletBalancesReasons'
    },
    /**
     * Lookup349: pallet_balances::types::Reasons
     **/
    PalletBalancesReasons: {
        _enum: ['Fee', 'Misc', 'All']
    },
    /**
     * Lookup352: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup355: pallet_balances::types::IdAmount<curio_mainnet_runtime::RuntimeHoldReason, Balance>
     **/
    PalletBalancesIdAmountRuntimeHoldReason: {
        id: 'CurioMainnetRuntimeRuntimeHoldReason',
        amount: 'u128'
    },
    /**
     * Lookup356: curio_mainnet_runtime::RuntimeHoldReason
     **/
    CurioMainnetRuntimeRuntimeHoldReason: 'Null',
    /**
     * Lookup359: pallet_balances::types::IdAmount<curio_mainnet_runtime::RuntimeFreezeReason, Balance>
     **/
    PalletBalancesIdAmountRuntimeFreezeReason: {
        id: 'CurioMainnetRuntimeRuntimeFreezeReason',
        amount: 'u128'
    },
    /**
     * Lookup360: curio_mainnet_runtime::RuntimeFreezeReason
     **/
    CurioMainnetRuntimeRuntimeFreezeReason: 'Null',
    /**
     * Lookup362: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes']
    },
    /**
     * Lookup363: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: ['V1Ancient', 'V2']
    },
    /**
     * Lookup371: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: '[u8;4]',
    /**
     * Lookup372: pallet_session::pallet::Error<T>
     **/
    PalletSessionError: {
        _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
    },
    /**
     * Lookup373: parachain_staking::types::RoundInfo<BlockNumber>
     **/
    ParachainStakingRoundInfo: {
        current: 'u32',
        first: 'u64',
        length: 'u64'
    },
    /**
     * Lookup374: parachain_staking::types::DelegationCounter
     **/
    ParachainStakingDelegationCounter: {
        round: 'u32',
        counter: 'u32'
    },
    /**
     * Lookup375: parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingStake: {
        owner: 'AccountId32',
        amount: 'u128'
    },
    /**
     * Lookup376: parachain_staking::types::Candidate<sp_core::crypto::AccountId32, Balance, MaxDelegatorsPerCandidate>
     **/
    ParachainStakingCandidate: {
        id: 'AccountId32',
        stake: 'u128',
        delegators: 'ParachainStakingSetOrderedSet',
        total: 'u128',
        status: 'ParachainStakingCandidateStatus'
    },
    /**
     * Lookup377: parachain_staking::set::OrderedSet<parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>, S>
     **/
    ParachainStakingSetOrderedSet: 'Vec<ParachainStakingStake>',
    /**
     * Lookup380: parachain_staking::types::CandidateStatus
     **/
    ParachainStakingCandidateStatus: {
        _enum: {
            Active: 'Null',
            Leaving: 'u32'
        }
    },
    /**
     * Lookup381: parachain_staking::types::TotalStake<Balance>
     **/
    ParachainStakingTotalStake: {
        collators: 'u128',
        delegators: 'u128'
    },
    /**
     * Lookup384: parachain_staking::inflation::InflationInfo
     **/
    ParachainStakingInflationInflationInfo: {
        collator: 'ParachainStakingInflationStakingInfo',
        delegator: 'ParachainStakingInflationStakingInfo'
    },
    /**
     * Lookup385: parachain_staking::inflation::StakingInfo
     **/
    ParachainStakingInflationStakingInfo: {
        maxRate: 'Perquintill',
        rewardRate: 'ParachainStakingInflationRewardRate'
    },
    /**
     * Lookup386: parachain_staking::inflation::RewardRate
     **/
    ParachainStakingInflationRewardRate: {
        annual: 'Perquintill',
        perBlock: 'Perquintill'
    },
    /**
     * Lookup391: parachain_staking::pallet::Error<T>
     **/
    ParachainStakingError: {
        _enum: ['DelegatorNotFound', 'CandidateNotFound', 'DelegatorExists', 'CandidateExists', 'ValStakeZero', 'ValStakeBelowMin', 'ValStakeAboveMax', 'DelegationBelowMin', 'AlreadyLeaving', 'NotLeaving', 'CannotLeaveYet', 'CannotJoinBeforeUnlocking', 'AlreadyDelegating', 'NotYetDelegating', 'DelegationsPerRoundExceeded', 'TooManyDelegators', 'TooFewCollatorCandidates', 'CannotStakeIfLeaving', 'CannotDelegateIfLeaving', 'MaxCollatorsPerDelegatorExceeded', 'AlreadyDelegatedCollator', 'DelegationNotFound', 'Underflow', 'CannotSetAboveMax', 'CannotSetBelowMin', 'InvalidSchedule', 'NoMoreUnstaking', 'TooEarly', 'StakeNotFound', 'UnstakingIsEmpty', 'RewardsNotFound']
    },
    /**
     * Lookup394: pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
     **/
    PalletConvictionVotingVoteVoting: {
        _enum: {
            Casting: 'PalletConvictionVotingVoteCasting',
            Delegating: 'PalletConvictionVotingVoteDelegating'
        }
    },
    /**
     * Lookup395: pallet_conviction_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
     **/
    PalletConvictionVotingVoteCasting: {
        votes: 'Vec<(u32,PalletConvictionVotingVoteAccountVote)>',
        delegations: 'PalletConvictionVotingDelegations',
        prior: 'PalletConvictionVotingVotePriorLock'
    },
    /**
     * Lookup399: pallet_conviction_voting::types::Delegations<Balance>
     **/
    PalletConvictionVotingDelegations: {
        votes: 'u128',
        capital: 'u128'
    },
    /**
     * Lookup400: pallet_conviction_voting::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletConvictionVotingVotePriorLock: '(u64,u128)',
    /**
     * Lookup401: pallet_conviction_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletConvictionVotingVoteDelegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletConvictionVotingConviction',
        delegations: 'PalletConvictionVotingDelegations',
        prior: 'PalletConvictionVotingVotePriorLock'
    },
    /**
     * Lookup405: pallet_conviction_voting::pallet::Error<T, I>
     **/
    PalletConvictionVotingError: {
        _enum: ['NotOngoing', 'NotVoter', 'NoPermission', 'NoPermissionYet', 'AlreadyDelegating', 'AlreadyVoting', 'InsufficientFunds', 'NotDelegating', 'Nonsense', 'MaxVotesReached', 'ClassNeeded', 'BadClass']
    },
    /**
     * Lookup406: pallet_referenda::types::ReferendumInfo<TrackId, curio_mainnet_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumInfoConvictionVotingTally: {
        _enum: {
            Ongoing: 'PalletReferendaReferendumStatusConvictionVotingTally',
            Approved: '(u64,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
            Rejected: '(u64,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
            Cancelled: '(u64,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
            TimedOut: '(u64,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
            Killed: 'u64'
        }
    },
    /**
     * Lookup407: pallet_referenda::types::ReferendumStatus<TrackId, curio_mainnet_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumStatusConvictionVotingTally: {
        track: 'u16',
        origin: 'CurioMainnetRuntimeOriginCaller',
        proposal: 'FrameSupportPreimagesBounded',
        enactment: 'FrameSupportScheduleDispatchTime',
        submitted: 'u64',
        submissionDeposit: 'PalletReferendaDeposit',
        decisionDeposit: 'Option<PalletReferendaDeposit>',
        deciding: 'Option<PalletReferendaDecidingStatus>',
        tally: 'PalletConvictionVotingTally',
        inQueue: 'bool',
        alarm: 'Option<(u64,(u64,u32))>'
    },
    /**
     * Lookup408: pallet_referenda::types::Deposit<sp_core::crypto::AccountId32, Balance>
     **/
    PalletReferendaDeposit: {
        who: 'AccountId32',
        amount: 'u128'
    },
    /**
     * Lookup411: pallet_referenda::types::DecidingStatus<BlockNumber>
     **/
    PalletReferendaDecidingStatus: {
        since: 'u64',
        confirming: 'Option<u64>'
    },
    /**
     * Lookup420: pallet_referenda::types::TrackInfo<Balance, Moment>
     **/
    PalletReferendaTrackInfo: {
        name: 'Text',
        maxDeciding: 'u32',
        decisionDeposit: 'u128',
        preparePeriod: 'u64',
        decisionPeriod: 'u64',
        confirmPeriod: 'u64',
        minEnactmentPeriod: 'u64',
        minApproval: 'PalletReferendaCurve',
        minSupport: 'PalletReferendaCurve'
    },
    /**
     * Lookup421: pallet_referenda::types::Curve
     **/
    PalletReferendaCurve: {
        _enum: {
            LinearDecreasing: {
                length: 'Perbill',
                floor: 'Perbill',
                ceil: 'Perbill',
            },
            SteppedDecreasing: {
                begin: 'Perbill',
                end: 'Perbill',
                step: 'Perbill',
                period: 'Perbill',
            },
            Reciprocal: {
                factor: 'i64',
                xOffset: 'i64',
                yOffset: 'i64'
            }
        }
    },
    /**
     * Lookup425: pallet_referenda::pallet::Error<T, I>
     **/
    PalletReferendaError: {
        _enum: ['NotOngoing', 'HasDeposit', 'BadTrack', 'Full', 'QueueEmpty', 'BadReferendum', 'NothingToDo', 'NoTrack', 'Unfinished', 'NoPermission', 'NoDeposit', 'BadStatus', 'PreimageNotExist']
    },
    /**
     * Lookup426: pallet_ranked_collective::MemberRecord
     **/
    PalletRankedCollectiveMemberRecord: {
        rank: 'u16'
    },
    /**
     * Lookup431: pallet_ranked_collective::pallet::Error<T, I>
     **/
    PalletRankedCollectiveError: {
        _enum: ['AlreadyMember', 'NotMember', 'NotPolling', 'Ongoing', 'NoneRemaining', 'Corruption', 'RankTooLow', 'InvalidWitness', 'NoPermission']
    },
    /**
     * Lookup432: pallet_referenda::types::ReferendumInfo<TrackId, curio_mainnet_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumInfoRankedCollectiveTally: {
        _enum: {
            Ongoing: 'PalletReferendaReferendumStatusRankedCollectiveTally',
            Approved: '(u64,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
            Rejected: '(u64,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
            Cancelled: '(u64,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
            TimedOut: '(u64,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
            Killed: 'u64'
        }
    },
    /**
     * Lookup433: pallet_referenda::types::ReferendumStatus<TrackId, curio_mainnet_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumStatusRankedCollectiveTally: {
        track: 'u16',
        origin: 'CurioMainnetRuntimeOriginCaller',
        proposal: 'FrameSupportPreimagesBounded',
        enactment: 'FrameSupportScheduleDispatchTime',
        submitted: 'u64',
        submissionDeposit: 'PalletReferendaDeposit',
        decisionDeposit: 'Option<PalletReferendaDeposit>',
        deciding: 'Option<PalletReferendaDecidingStatus>',
        tally: 'PalletRankedCollectiveTally',
        inQueue: 'bool',
        alarm: 'Option<(u64,(u64,u32))>'
    },
    /**
     * Lookup438: pallet_whitelist::pallet::Error<T>
     **/
    PalletWhitelistError: {
        _enum: ['UnavailablePreImage', 'UndecodableCall', 'InvalidCallWeightWitness', 'CallIsNotWhitelisted', 'CallAlreadyWhitelisted']
    },
    /**
     * Lookup440: cumulus_pallet_xcmp_queue::InboundChannelDetails
     **/
    CumulusPalletXcmpQueueInboundChannelDetails: {
        sender: 'u32',
        state: 'CumulusPalletXcmpQueueInboundState',
        messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat)>'
    },
    /**
     * Lookup441: cumulus_pallet_xcmp_queue::InboundState
     **/
    CumulusPalletXcmpQueueInboundState: {
        _enum: ['Ok', 'Suspended']
    },
    /**
     * Lookup444: polkadot_parachain_primitives::primitives::XcmpMessageFormat
     **/
    PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat: {
        _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
    },
    /**
     * Lookup447: cumulus_pallet_xcmp_queue::OutboundChannelDetails
     **/
    CumulusPalletXcmpQueueOutboundChannelDetails: {
        recipient: 'u32',
        state: 'CumulusPalletXcmpQueueOutboundState',
        signalsExist: 'bool',
        firstIndex: 'u16',
        lastIndex: 'u16'
    },
    /**
     * Lookup448: cumulus_pallet_xcmp_queue::OutboundState
     **/
    CumulusPalletXcmpQueueOutboundState: {
        _enum: ['Ok', 'Suspended']
    },
    /**
     * Lookup450: cumulus_pallet_xcmp_queue::QueueConfigData
     **/
    CumulusPalletXcmpQueueQueueConfigData: {
        suspendThreshold: 'u32',
        dropThreshold: 'u32',
        resumeThreshold: 'u32',
        thresholdWeight: 'SpWeightsWeightV2Weight',
        weightRestrictDecay: 'SpWeightsWeightV2Weight',
        xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup452: cumulus_pallet_xcmp_queue::pallet::Error<T>
     **/
    CumulusPalletXcmpQueueError: {
        _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
    },
    /**
     * Lookup453: pallet_xcm::pallet::QueryStatus<BlockNumber>
     **/
    PalletXcmQueryStatus: {
        _enum: {
            Pending: {
                responder: 'StagingXcmVersionedMultiLocation',
                maybeMatchQuerier: 'Option<StagingXcmVersionedMultiLocation>',
                maybeNotify: 'Option<(u8,u8)>',
                timeout: 'u64',
            },
            VersionNotifier: {
                origin: 'StagingXcmVersionedMultiLocation',
                isActive: 'bool',
            },
            Ready: {
                response: 'StagingXcmVersionedResponse',
                at: 'u64'
            }
        }
    },
    /**
     * Lookup456: staging_xcm::VersionedResponse
     **/
    StagingXcmVersionedResponse: {
        _enum: {
            __Unused0: 'Null',
            __Unused1: 'Null',
            V2: 'StagingXcmV2Response',
            V3: 'StagingXcmV3Response'
        }
    },
    /**
     * Lookup462: pallet_xcm::pallet::VersionMigrationStage
     **/
    PalletXcmVersionMigrationStage: {
        _enum: {
            MigrateSupportedVersion: 'Null',
            MigrateVersionNotifiers: 'Null',
            NotifyCurrentTargets: 'Option<Bytes>',
            MigrateAndNotifyOldTargets: 'Null'
        }
    },
    /**
     * Lookup465: staging_xcm::VersionedAssetId
     **/
    StagingXcmVersionedAssetId: {
        _enum: {
            __Unused0: 'Null',
            __Unused1: 'Null',
            __Unused2: 'Null',
            V3: 'StagingXcmV3MultiassetAssetId'
        }
    },
    /**
     * Lookup466: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
     **/
    PalletXcmRemoteLockedFungibleRecord: {
        amount: 'u128',
        owner: 'StagingXcmVersionedMultiLocation',
        locker: 'StagingXcmVersionedMultiLocation',
        consumers: 'Vec<(Null,u128)>'
    },
    /**
     * Lookup473: pallet_xcm::pallet::Error<T>
     **/
    PalletXcmError: {
        _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'InvalidAsset', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse']
    },
    /**
     * Lookup474: cumulus_pallet_xcm::pallet::Error<T>
     **/
    CumulusPalletXcmError: 'Null',
    /**
     * Lookup475: cumulus_pallet_dmp_queue::ConfigData
     **/
    CumulusPalletDmpQueueConfigData: {
        maxIndividual: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup476: cumulus_pallet_dmp_queue::PageIndexData
     **/
    CumulusPalletDmpQueuePageIndexData: {
        beginUsed: 'u32',
        endUsed: 'u32',
        overweightCount: 'u64'
    },
    /**
     * Lookup479: cumulus_pallet_dmp_queue::pallet::Error<T>
     **/
    CumulusPalletDmpQueueError: {
        _enum: ['Unknown', 'OverLimit']
    },
    /**
     * Lookup480: pallet_utility::pallet::Error<T>
     **/
    PalletUtilityError: {
        _enum: ['TooManyCalls']
    },
    /**
     * Lookup483: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, BlockNumber, curio_mainnet_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduled: {
        maybeId: 'Option<[u8;32]>',
        priority: 'u8',
        call: 'FrameSupportPreimagesBounded',
        maybePeriodic: 'Option<(u64,u32)>',
        origin: 'CurioMainnetRuntimeOriginCaller'
    },
    /**
     * Lookup485: pallet_scheduler::pallet::Error<T>
     **/
    PalletSchedulerError: {
        _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
    },
    /**
     * Lookup488: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, curio_mainnet_runtime::utilities::ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
        delegate: 'AccountId32',
        proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
        delay: 'u64'
    },
    /**
     * Lookup492: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
        real: 'AccountId32',
        callHash: 'H256',
        height: 'u64'
    },
    /**
     * Lookup494: pallet_proxy::pallet::Error<T>
     **/
    PalletProxyError: {
        _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
    },
    /**
     * Lookup496: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
     **/
    PalletMultisigMultisig: {
        when: 'PalletMultisigTimepoint',
        deposit: 'u128',
        depositor: 'AccountId32',
        approvals: 'Vec<AccountId32>'
    },
    /**
     * Lookup498: pallet_multisig::pallet::Error<T>
     **/
    PalletMultisigError: {
        _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
    },
    /**
     * Lookup499: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityRegistration: {
        judgements: 'Vec<(u32,PalletIdentityJudgement)>',
        deposit: 'u128',
        info: 'PalletIdentityIdentityInfo'
    },
    /**
     * Lookup507: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
     **/
    PalletIdentityRegistrarInfo: {
        account: 'AccountId32',
        fee: 'u128',
        fields: 'PalletIdentityBitFlags'
    },
    /**
     * Lookup509: pallet_identity::pallet::Error<T>
     **/
    PalletIdentityError: {
        _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
    },
    /**
     * Lookup510: pallet_tx_pause::pallet::Error<T>
     **/
    PalletTxPauseError: {
        _enum: ['IsPaused', 'IsUnpaused', 'Unpausable', 'NotFound']
    },
    /**
     * Lookup513: pallet_vesting::Releases
     **/
    PalletVestingReleases: {
        _enum: ['V0', 'V1']
    },
    /**
     * Lookup514: pallet_vesting::pallet::Error<T>
     **/
    PalletVestingError: {
        _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
    },
    /**
     * Lookup515: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
        proposer: 'AccountId32',
        value: 'u128',
        beneficiary: 'AccountId32',
        bond: 'u128'
    },
    /**
     * Lookup518: frame_support::PalletId
     **/
    FrameSupportPalletId: '[u8;8]',
    /**
     * Lookup519: pallet_treasury::pallet::Error<T, I>
     **/
    PalletTreasuryError: {
        _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
    },
    /**
     * Lookup520: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletBountiesBounty: {
        proposer: 'AccountId32',
        value: 'u128',
        fee: 'u128',
        curatorDeposit: 'u128',
        bond: 'u128',
        status: 'PalletBountiesBountyStatus'
    },
    /**
     * Lookup521: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletBountiesBountyStatus: {
        _enum: {
            Proposed: 'Null',
            Approved: 'Null',
            Funded: 'Null',
            CuratorProposed: {
                curator: 'AccountId32',
            },
            Active: {
                curator: 'AccountId32',
                updateDue: 'u64',
            },
            PendingPayout: {
                curator: 'AccountId32',
                beneficiary: 'AccountId32',
                unlockAt: 'u64'
            }
        }
    },
    /**
     * Lookup523: pallet_bounties::pallet::Error<T, I>
     **/
    PalletBountiesError: {
        _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
    },
    /**
     * Lookup524: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
     **/
    PalletPreimageRequestStatus: {
        _enum: {
            Unrequested: {
                deposit: '(AccountId32,u128)',
                len: 'u32',
            },
            Requested: {
                deposit: 'Option<(AccountId32,u128)>',
                count: 'u32',
                len: 'Option<u32>'
            }
        }
    },
    /**
     * Lookup529: pallet_preimage::pallet::Error<T>
     **/
    PalletPreimageError: {
        _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
    },
    /**
     * Lookup531: pallet_dex::types::TradingPairStatus<Balance, BlockNumber>
     **/
    PalletDexTradingPairStatus: {
        _enum: {
            Disabled: 'Null',
            Provisioning: 'PalletDexProvisioningParameters',
            Enabled: 'Null'
        }
    },
    /**
     * Lookup532: pallet_dex::types::ProvisioningParameters<Balance, BlockNumber>
     **/
    PalletDexProvisioningParameters: {
        minContribution: '(u128,u128)',
        targetProvision: '(u128,u128)',
        accumulatedProvision: '(u128,u128)',
        notBefore: 'u64'
    },
    /**
     * Lookup535: pallet_dex::module::Error<T>
     **/
    PalletDexModuleError: {
        _enum: ['AlreadyEnabled', 'MustBeEnabled', 'MustBeProvisioning', 'MustBeDisabled', 'NotAllowedList', 'InvalidContributionIncrement', 'InvalidLiquidityIncrement', 'InvalidCurrencyId', 'InvalidTradingPathLength', 'InsufficientTargetAmount', 'ExcessiveSupplyAmount', 'InsufficientLiquidity', 'ZeroSupplyAmount', 'ZeroTargetAmount', 'UnacceptableShareIncrement', 'UnacceptableLiquidityWithdrawn', 'InvariantCheckFailed', 'UnqualifiedProvision', 'StillProvisioning', 'InvalidTradingPath', 'NotAllowedRefund', 'CannotSwap']
    },
    /**
     * Lookup536: pallet_currencies::module::Error<T>
     **/
    PalletCurrenciesModuleError: {
        _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
    },
    /**
     * Lookup539: orml_tokens::BalanceLock<Balance>
     **/
    OrmlTokensBalanceLock: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup541: orml_tokens::AccountData<Balance>
     **/
    OrmlTokensAccountData: {
        free: 'u128',
        reserved: 'u128',
        frozen: 'u128'
    },
    /**
     * Lookup543: orml_tokens::ReserveData<ReserveIdentifier, Balance>
     **/
    OrmlTokensReserveData: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup545: orml_tokens::module::Error<T>
     **/
    OrmlTokensModuleError: {
        _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
    },
    /**
     * Lookup547: pallet_bridge::pallet::Error<T>
     **/
    PalletBridgeError: {
        _enum: ['BridgePaused', 'SenderNotBridgeManager', 'AlreadyPaused', 'AlreadyNotPaused', 'AlreadyManager', 'AlreadyNotManager', 'CurrencyAlreadyPaused', 'CurrencyAlreadyNotPaused', 'CurrencyAlreadySupported', 'CurrencyNotSupported', 'CurrencyNotActive', 'CurrencyNotPaused', 'SubAccountBlacklisted', 'EthAccountBlacklisted', 'AlreadyBlacklistedSub', 'AlreadyNotBlacklistedSub', 'AlreadyBlacklistedEth', 'AlreadyNotBlacklistedEth', 'RequestAlreadyProcessed', 'InsufficientNativeBridged', 'MaxBatchSizeExceeded']
    },
    /**
     * Lookup548: orml_xtokens::module::Error<T>
     **/
    OrmlXtokensModuleError: {
        _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
    },
    /**
     * Lookup551: orml_unknown_tokens::module::Error<T>
     **/
    OrmlUnknownTokensModuleError: {
        _enum: ['BalanceTooLow', 'BalanceOverflow', 'UnhandledAsset']
    },
    /**
     * Lookup552: orml_asset_registry::module::Error<T>
     **/
    OrmlAssetRegistryModuleError: {
        _enum: ['AssetNotFound', 'BadVersion', 'InvalidAssetId', 'ConflictingLocation', 'ConflictingAssetId', 'InvalidAssetString']
    },
    /**
     * Lookup553: orml_rewards::PoolInfo<Share, Balance, curio_mainnet_runtime::currency_id::CurrencyId>
     **/
    OrmlRewardsPoolInfo: {
        totalShares: 'u128',
        rewards: 'BTreeMap<CurioMainnetRuntimeCurrencyId, (u128,u128)>'
    },
    /**
     * Lookup560: orml_rewards::module::Error<T>
     **/
    OrmlRewardsModuleError: {
        _enum: ['PoolDoesNotExist', 'ShareDoesNotExist', 'CanSplitOnlyLessThanShare']
    },
    /**
     * Lookup563: pallet_incentives::module::Error<T>
     **/
    PalletIncentivesModuleError: {
        _enum: ['NotEnough', 'InvalidCurrencyId', 'InvalidPoolId', 'InvalidRate']
    },
    /**
     * Lookup564: pallet_sudo::pallet::Error<T>
     **/
    PalletSudoError: {
        _enum: ['RequireSudo']
    },
    /**
     * Lookup566: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: 'SpCoreEd25519Signature',
            Sr25519: 'SpCoreSr25519Signature',
            Ecdsa: 'SpCoreEcdsaSignature'
        }
    },
    /**
     * Lookup567: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: '[u8;64]',
    /**
     * Lookup569: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: '[u8;64]',
    /**
     * Lookup570: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: '[u8;65]',
    /**
     * Lookup573: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
     **/
    FrameSystemExtensionsCheckNonZeroSender: 'Null',
    /**
     * Lookup574: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: 'Null',
    /**
     * Lookup575: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: 'Null',
    /**
     * Lookup576: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: 'Null',
    /**
     * Lookup579: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: 'Compact<u32>',
    /**
     * Lookup580: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: 'Null',
    /**
     * Lookup581: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
    /**
     * Lookup582: curio_mainnet_runtime::Runtime
     **/
    CurioMainnetRuntimeRuntime: 'Null'
};
