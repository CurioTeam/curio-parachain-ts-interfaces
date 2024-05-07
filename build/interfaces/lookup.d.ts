declare const _default: {
    /**
     * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: string;
        consumers: string;
        providers: string;
        sufficients: string;
        data: string;
    };
    /**
     * Lookup5: pallet_balances::types::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: string;
        reserved: string;
        frozen: string;
        flags: string;
    };
    /**
     * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
     **/
    FrameSupportDispatchPerDispatchClassWeight: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup9: sp_weights::weight_v2::Weight
     **/
    SpWeightsWeightV2Weight: {
        refTime: string;
        proofSize: string;
    };
    /**
     * Lookup14: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: string;
    };
    /**
     * Lookup16: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            Consensus: string;
            Seal: string;
            PreRuntime: string;
            __Unused7: string;
            RuntimeEnvironmentUpdated: string;
        };
    };
    /**
     * Lookup19: frame_system::EventRecord<curio_mainnet_runtime::RuntimeEvent, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: string;
        event: string;
        topics: string;
    };
    /**
     * Lookup21: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: string;
            };
            ExtrinsicFailed: {
                dispatchError: string;
                dispatchInfo: string;
            };
            CodeUpdated: string;
            NewAccount: {
                account: string;
            };
            KilledAccount: {
                account: string;
            };
            Remarked: {
                _alias: {
                    hash_: string;
                };
                sender: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup22: frame_support::dispatch::DispatchInfo
     **/
    FrameSupportDispatchDispatchInfo: {
        weight: string;
        class: string;
        paysFee: string;
    };
    /**
     * Lookup23: frame_support::dispatch::DispatchClass
     **/
    FrameSupportDispatchDispatchClass: {
        _enum: string[];
    };
    /**
     * Lookup24: frame_support::dispatch::Pays
     **/
    FrameSupportDispatchPays: {
        _enum: string[];
    };
    /**
     * Lookup25: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: string;
            CannotLookup: string;
            BadOrigin: string;
            Module: string;
            ConsumerRemaining: string;
            NoProviders: string;
            TooManyConsumers: string;
            Token: string;
            Arithmetic: string;
            Transactional: string;
            Exhausted: string;
            Corruption: string;
            Unavailable: string;
            RootNotAllowed: string;
        };
    };
    /**
     * Lookup26: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: string;
        error: string;
    };
    /**
     * Lookup27: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: string[];
    };
    /**
     * Lookup28: sp_arithmetic::ArithmeticError
     **/
    SpArithmeticArithmeticError: {
        _enum: string[];
    };
    /**
     * Lookup29: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: string[];
    };
    /**
     * Lookup30: pallet_indices::pallet::Event<T>
     **/
    PalletIndicesEvent: {
        _enum: {
            IndexAssigned: {
                who: string;
                index: string;
            };
            IndexFreed: {
                index: string;
            };
            IndexFrozen: {
                index: string;
                who: string;
            };
        };
    };
    /**
     * Lookup31: cumulus_pallet_parachain_system::pallet::Event<T>
     **/
    CumulusPalletParachainSystemEvent: {
        _enum: {
            ValidationFunctionStored: string;
            ValidationFunctionApplied: {
                relayChainBlockNum: string;
            };
            ValidationFunctionDiscarded: string;
            UpgradeAuthorized: {
                codeHash: string;
            };
            DownwardMessagesReceived: {
                count: string;
            };
            DownwardMessagesProcessed: {
                weightUsed: string;
                dmqHead: string;
            };
            UpwardMessageSent: {
                messageHash: string;
            };
        };
    };
    /**
     * Lookup33: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: string;
                freeBalance: string;
            };
            DustLost: {
                account: string;
                amount: string;
            };
            Transfer: {
                from: string;
                to: string;
                amount: string;
            };
            BalanceSet: {
                who: string;
                free: string;
            };
            Reserved: {
                who: string;
                amount: string;
            };
            Unreserved: {
                who: string;
                amount: string;
            };
            ReserveRepatriated: {
                from: string;
                to: string;
                amount: string;
                destinationStatus: string;
            };
            Deposit: {
                who: string;
                amount: string;
            };
            Withdraw: {
                who: string;
                amount: string;
            };
            Slashed: {
                who: string;
                amount: string;
            };
            Minted: {
                who: string;
                amount: string;
            };
            Burned: {
                who: string;
                amount: string;
            };
            Suspended: {
                who: string;
                amount: string;
            };
            Restored: {
                who: string;
                amount: string;
            };
            Upgraded: {
                who: string;
            };
            Issued: {
                amount: string;
            };
            Rescinded: {
                amount: string;
            };
            Locked: {
                who: string;
                amount: string;
            };
            Unlocked: {
                who: string;
                amount: string;
            };
            Frozen: {
                who: string;
                amount: string;
            };
            Thawed: {
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup34: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: string[];
    };
    /**
     * Lookup35: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: string;
                actualFee: string;
                tip: string;
            };
        };
    };
    /**
     * Lookup36: pallet_session::pallet::Event
     **/
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: string;
            };
        };
    };
    /**
     * Lookup37: parachain_staking::pallet::Event<T>
     **/
    ParachainStakingEvent: {
        _enum: {
            NewRound: string;
            EnteredTopCandidates: string;
            LeftTopCandidates: string;
            JoinedCollatorCandidates: string;
            CollatorStakedMore: string;
            CollatorStakedLess: string;
            CollatorScheduledExit: string;
            CollatorCanceledExit: string;
            CandidateLeft: string;
            CollatorRemoved: string;
            MaxCandidateStakeChanged: string;
            DelegatorStakedMore: string;
            DelegatorStakedLess: string;
            DelegatorLeft: string;
            Delegation: string;
            DelegationReplaced: string;
            DelegatorLeftCollator: string;
            Rewarded: string;
            RoundInflationSet: string;
            MaxSelectedCandidatesSet: string;
            BlocksPerRoundSet: string;
        };
    };
    /**
     * Lookup39: pallet_conviction_voting::pallet::Event<T, I>
     **/
    PalletConvictionVotingEvent: {
        _enum: {
            Delegated: string;
            Undelegated: string;
        };
    };
    /**
     * Lookup40: pallet_referenda::pallet::Event<T, I>
     **/
    PalletReferendaEvent: {
        _enum: {
            Submitted: {
                index: string;
                track: string;
                proposal: string;
            };
            DecisionDepositPlaced: {
                index: string;
                who: string;
                amount: string;
            };
            DecisionDepositRefunded: {
                index: string;
                who: string;
                amount: string;
            };
            DepositSlashed: {
                who: string;
                amount: string;
            };
            DecisionStarted: {
                index: string;
                track: string;
                proposal: string;
                tally: string;
            };
            ConfirmStarted: {
                index: string;
            };
            ConfirmAborted: {
                index: string;
            };
            Confirmed: {
                index: string;
                tally: string;
            };
            Approved: {
                index: string;
            };
            Rejected: {
                index: string;
                tally: string;
            };
            TimedOut: {
                index: string;
                tally: string;
            };
            Cancelled: {
                index: string;
                tally: string;
            };
            Killed: {
                index: string;
                tally: string;
            };
            SubmissionDepositRefunded: {
                index: string;
                who: string;
                amount: string;
            };
            MetadataSet: {
                _alias: {
                    hash_: string;
                };
                index: string;
                hash_: string;
            };
            MetadataCleared: {
                _alias: {
                    hash_: string;
                };
                index: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup42: frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>
     **/
    FrameSupportPreimagesBounded: {
        _enum: {
            Legacy: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Inline: string;
            Lookup: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                len: string;
            };
        };
    };
    /**
     * Lookup44: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            remark: {
                remark: string;
            };
            set_heap_pages: {
                pages: string;
            };
            set_code: {
                code: string;
            };
            set_code_without_checks: {
                code: string;
            };
            set_storage: {
                items: string;
            };
            kill_storage: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
            };
            kill_prefix: {
                prefix: string;
                subkeys: string;
            };
            remark_with_event: {
                remark: string;
            };
        };
    };
    /**
     * Lookup48: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: string;
            };
        };
    };
    /**
     * Lookup49: pallet_indices::pallet::Call<T>
     **/
    PalletIndicesCall: {
        _enum: {
            claim: {
                index: string;
            };
            transfer: {
                _alias: {
                    new_: string;
                };
                new_: string;
                index: string;
            };
            free: {
                index: string;
            };
            force_transfer: {
                _alias: {
                    new_: string;
                };
                new_: string;
                index: string;
                freeze: string;
            };
            freeze: {
                index: string;
            };
        };
    };
    /**
     * Lookup55: cumulus_pallet_parachain_system::pallet::Call<T>
     **/
    CumulusPalletParachainSystemCall: {
        _enum: {
            set_validation_data: {
                data: string;
            };
            sudo_send_upward_message: {
                message: string;
            };
            authorize_upgrade: {
                codeHash: string;
                checkVersion: string;
            };
            enact_authorized_upgrade: {
                code: string;
            };
        };
    };
    /**
     * Lookup56: cumulus_primitives_parachain_inherent::ParachainInherentData
     **/
    CumulusPrimitivesParachainInherentParachainInherentData: {
        validationData: string;
        relayChainState: string;
        downwardMessages: string;
        horizontalMessages: string;
    };
    /**
     * Lookup57: polkadot_primitives::v5::PersistedValidationData<primitive_types::H256, N>
     **/
    PolkadotPrimitivesV5PersistedValidationData: {
        parentHead: string;
        relayParentNumber: string;
        relayParentStorageRoot: string;
        maxPovSize: string;
    };
    /**
     * Lookup59: sp_trie::storage_proof::StorageProof
     **/
    SpTrieStorageProof: {
        trieNodes: string;
    };
    /**
     * Lookup62: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: string;
        msg: string;
    };
    /**
     * Lookup66: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: string;
        data: string;
    };
    /**
     * Lookup69: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer_allow_death: {
                dest: string;
                value: string;
            };
            set_balance_deprecated: {
                who: string;
                newFree: string;
                oldReserved: string;
            };
            force_transfer: {
                source: string;
                dest: string;
                value: string;
            };
            transfer_keep_alive: {
                dest: string;
                value: string;
            };
            transfer_all: {
                dest: string;
                keepAlive: string;
            };
            force_unreserve: {
                who: string;
                amount: string;
            };
            upgrade_accounts: {
                who: string;
            };
            transfer: {
                dest: string;
                value: string;
            };
            force_set_balance: {
                who: string;
                newFree: string;
            };
        };
    };
    /**
     * Lookup72: pallet_session::pallet::Call<T>
     **/
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
                proof: string;
            };
            purge_keys: string;
        };
    };
    /**
     * Lookup73: curio_mainnet_runtime::consensus::SessionKeys
     **/
    CurioMainnetRuntimeConsensusSessionKeys: {
        aura: string;
    };
    /**
     * Lookup74: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: string;
    /**
     * Lookup75: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: string;
    /**
     * Lookup76: parachain_staking::pallet::Call<T>
     **/
    ParachainStakingCall: {
        _enum: {
            force_new_round: string;
            set_inflation: {
                collatorMaxRatePercentage: string;
                collatorAnnualRewardRatePercentage: string;
                delegatorMaxRatePercentage: string;
                delegatorAnnualRewardRatePercentage: string;
            };
            set_max_selected_candidates: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_blocks_per_round: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_candidate_stake: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            force_remove_candidate: {
                collator: string;
            };
            join_candidates: {
                stake: string;
            };
            init_leave_candidates: string;
            execute_leave_candidates: {
                collator: string;
            };
            cancel_leave_candidates: string;
            candidate_stake_more: {
                more: string;
            };
            candidate_stake_less: {
                less: string;
            };
            join_delegators: {
                collator: string;
                amount: string;
            };
            leave_delegators: string;
            delegator_stake_more: {
                more: string;
            };
            delegator_stake_less: {
                less: string;
            };
            unlock_unstaked: {
                target: string;
            };
            claim_rewards: string;
            increment_collator_rewards: string;
            increment_delegator_rewards: string;
            execute_scheduled_reward_change: string;
        };
    };
    /**
     * Lookup77: pallet_conviction_voting::pallet::Call<T, I>
     **/
    PalletConvictionVotingCall: {
        _enum: {
            vote: {
                pollIndex: string;
                vote: string;
            };
            delegate: {
                class: string;
                to: string;
                conviction: string;
                balance: string;
            };
            undelegate: {
                class: string;
            };
            unlock: {
                class: string;
                target: string;
            };
            remove_vote: {
                class: string;
                index: string;
            };
            remove_other_vote: {
                target: string;
                class: string;
                index: string;
            };
        };
    };
    /**
     * Lookup79: pallet_conviction_voting::vote::AccountVote<Balance>
     **/
    PalletConvictionVotingVoteAccountVote: {
        _enum: {
            Standard: {
                vote: string;
                balance: string;
            };
            Split: {
                aye: string;
                nay: string;
            };
            SplitAbstain: {
                aye: string;
                nay: string;
                abstain: string;
            };
        };
    };
    /**
     * Lookup81: pallet_conviction_voting::conviction::Conviction
     **/
    PalletConvictionVotingConviction: {
        _enum: string[];
    };
    /**
     * Lookup83: pallet_referenda::pallet::Call<T, I>
     **/
    PalletReferendaCall: {
        _enum: {
            submit: {
                proposalOrigin: string;
                proposal: string;
                enactmentMoment: string;
            };
            place_decision_deposit: {
                index: string;
            };
            refund_decision_deposit: {
                index: string;
            };
            cancel: {
                index: string;
            };
            kill: {
                index: string;
            };
            nudge_referendum: {
                index: string;
            };
            one_fewer_deciding: {
                track: string;
            };
            refund_submission_deposit: {
                index: string;
            };
            set_metadata: {
                index: string;
                maybeHash: string;
            };
        };
    };
    /**
     * Lookup84: curio_mainnet_runtime::OriginCaller
     **/
    CurioMainnetRuntimeOriginCaller: {
        _enum: {
            system: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            Void: string;
            __Unused5: string;
            __Unused6: string;
            __Unused7: string;
            __Unused8: string;
            __Unused9: string;
            __Unused10: string;
            __Unused11: string;
            __Unused12: string;
            __Unused13: string;
            __Unused14: string;
            __Unused15: string;
            __Unused16: string;
            __Unused17: string;
            __Unused18: string;
            __Unused19: string;
            __Unused20: string;
            __Unused21: string;
            __Unused22: string;
            __Unused23: string;
            __Unused24: string;
            __Unused25: string;
            __Unused26: string;
            __Unused27: string;
            __Unused28: string;
            __Unused29: string;
            __Unused30: string;
            __Unused31: string;
            __Unused32: string;
            __Unused33: string;
            Origins: string;
            __Unused35: string;
            __Unused36: string;
            __Unused37: string;
            __Unused38: string;
            __Unused39: string;
            __Unused40: string;
            PolkadotXcm: string;
            CumulusXcm: string;
        };
    };
    /**
     * Lookup85: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: string;
            Signed: string;
            None: string;
        };
    };
    /**
     * Lookup86: curio_mainnet_runtime::governance::origins::pallet_custom_origins::Origin
     **/
    CurioMainnetRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
        _enum: string[];
    };
    /**
     * Lookup87: pallet_xcm::pallet::Origin
     **/
    PalletXcmOrigin: {
        _enum: {
            Xcm: string;
            Response: string;
        };
    };
    /**
     * Lookup88: staging_xcm::v3::multilocation::MultiLocation
     **/
    StagingXcmV3MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup89: staging_xcm::v3::junctions::Junctions
     **/
    StagingXcmV3Junctions: {
        _enum: {
            Here: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    /**
     * Lookup90: staging_xcm::v3::junction::Junction
     **/
    StagingXcmV3Junction: {
        _enum: {
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: {
                length: string;
                data: string;
            };
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
            GlobalConsensus: string;
        };
    };
    /**
     * Lookup92: staging_xcm::v3::junction::NetworkId
     **/
    StagingXcmV3JunctionNetworkId: {
        _enum: {
            ByGenesis: string;
            ByFork: {
                blockNumber: string;
                blockHash: string;
            };
            Polkadot: string;
            Kusama: string;
            Westend: string;
            Rococo: string;
            Wococo: string;
            Ethereum: {
                chainId: string;
            };
            BitcoinCore: string;
            BitcoinCash: string;
        };
    };
    /**
     * Lookup93: staging_xcm::v3::junction::BodyId
     **/
    StagingXcmV3JunctionBodyId: {
        _enum: {
            Unit: string;
            Moniker: string;
            Index: string;
            Executive: string;
            Technical: string;
            Legislative: string;
            Judicial: string;
            Defense: string;
            Administration: string;
            Treasury: string;
        };
    };
    /**
     * Lookup94: staging_xcm::v3::junction::BodyPart
     **/
    StagingXcmV3JunctionBodyPart: {
        _enum: {
            Voice: string;
            Members: {
                count: string;
            };
            Fraction: {
                nom: string;
                denom: string;
            };
            AtLeastProportion: {
                nom: string;
                denom: string;
            };
            MoreThanProportion: {
                nom: string;
                denom: string;
            };
        };
    };
    /**
     * Lookup95: cumulus_pallet_xcm::pallet::Origin
     **/
    CumulusPalletXcmOrigin: {
        _enum: {
            Relay: string;
            SiblingParachain: string;
        };
    };
    /**
     * Lookup96: sp_core::Void
     **/
    SpCoreVoid: string;
    /**
     * Lookup97: frame_support::traits::schedule::DispatchTime<BlockNumber>
     **/
    FrameSupportScheduleDispatchTime: {
        _enum: {
            At: string;
            After: string;
        };
    };
    /**
     * Lookup99: pallet_ranked_collective::pallet::Call<T, I>
     **/
    PalletRankedCollectiveCall: {
        _enum: {
            add_member: {
                who: string;
            };
            promote_member: {
                who: string;
            };
            demote_member: {
                who: string;
            };
            remove_member: {
                who: string;
                minRank: string;
            };
            vote: {
                poll: string;
                aye: string;
            };
            cleanup_poll: {
                pollIndex: string;
                max: string;
            };
        };
    };
    /**
     * Lookup101: pallet_whitelist::pallet::Call<T>
     **/
    PalletWhitelistCall: {
        _enum: {
            whitelist_call: {
                callHash: string;
            };
            remove_whitelisted_call: {
                callHash: string;
            };
            dispatch_whitelisted_call: {
                callHash: string;
                callEncodedLen: string;
                callWeightWitness: string;
            };
            dispatch_whitelisted_call_with_preimage: {
                call: string;
            };
        };
    };
    /**
     * Lookup102: cumulus_pallet_xcmp_queue::pallet::Call<T>
     **/
    CumulusPalletXcmpQueueCall: {
        _enum: {
            service_overweight: {
                index: string;
                weightLimit: string;
            };
            suspend_xcm_execution: string;
            resume_xcm_execution: string;
            update_suspend_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_drop_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_resume_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_threshold_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_weight_restrict_decay: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_xcmp_max_individual_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
        };
    };
    /**
     * Lookup103: pallet_xcm::pallet::Call<T>
     **/
    PalletXcmCall: {
        _enum: {
            send: {
                dest: string;
                message: string;
            };
            teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            execute: {
                message: string;
                maxWeight: string;
            };
            force_xcm_version: {
                location: string;
                version: string;
            };
            force_default_xcm_version: {
                maybeXcmVersion: string;
            };
            force_subscribe_version_notify: {
                location: string;
            };
            force_unsubscribe_version_notify: {
                location: string;
            };
            limited_reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
            limited_teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
            force_suspension: {
                suspended: string;
            };
        };
    };
    /**
     * Lookup104: staging_xcm::VersionedMultiLocation
     **/
    StagingXcmVersionedMultiLocation: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup105: staging_xcm::v2::multilocation::MultiLocation
     **/
    StagingXcmV2MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup106: staging_xcm::v2::multilocation::Junctions
     **/
    StagingXcmV2MultilocationJunctions: {
        _enum: {
            Here: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    /**
     * Lookup107: staging_xcm::v2::junction::Junction
     **/
    StagingXcmV2Junction: {
        _enum: {
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: string;
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
        };
    };
    /**
     * Lookup108: staging_xcm::v2::NetworkId
     **/
    StagingXcmV2NetworkId: {
        _enum: {
            Any: string;
            Named: string;
            Polkadot: string;
            Kusama: string;
        };
    };
    /**
     * Lookup110: staging_xcm::v2::BodyId
     **/
    StagingXcmV2BodyId: {
        _enum: {
            Unit: string;
            Named: string;
            Index: string;
            Executive: string;
            Technical: string;
            Legislative: string;
            Judicial: string;
            Defense: string;
            Administration: string;
            Treasury: string;
        };
    };
    /**
     * Lookup111: staging_xcm::v2::BodyPart
     **/
    StagingXcmV2BodyPart: {
        _enum: {
            Voice: string;
            Members: {
                count: string;
            };
            Fraction: {
                nom: string;
                denom: string;
            };
            AtLeastProportion: {
                nom: string;
                denom: string;
            };
            MoreThanProportion: {
                nom: string;
                denom: string;
            };
        };
    };
    /**
     * Lookup112: staging_xcm::VersionedXcm<RuntimeCall>
     **/
    StagingXcmVersionedXcm: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            V2: string;
            V3: string;
        };
    };
    /**
     * Lookup113: staging_xcm::v2::Xcm<RuntimeCall>
     **/
    StagingXcmV2Xcm: string;
    /**
     * Lookup115: staging_xcm::v2::Instruction<RuntimeCall>
     **/
    StagingXcmV2Instruction: {
        _enum: {
            WithdrawAsset: string;
            ReserveAssetDeposited: string;
            ReceiveTeleportedAsset: string;
            QueryResponse: {
                queryId: string;
                response: string;
                maxWeight: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            Transact: {
                originType: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            ClearOrigin: string;
            DescendOrigin: string;
            ReportError: {
                queryId: string;
                dest: string;
                maxResponseWeight: string;
            };
            DepositAsset: {
                assets: string;
                maxAssets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                maxAssets: string;
                dest: string;
                xcm: string;
            };
            ExchangeAsset: {
                give: string;
                receive: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                xcm: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                xcm: string;
            };
            QueryHolding: {
                queryId: string;
                dest: string;
                assets: string;
                maxResponseWeight: string;
            };
            BuyExecution: {
                fees: string;
                weightLimit: string;
            };
            RefundSurplus: string;
            SetErrorHandler: string;
            SetAppendix: string;
            ClearError: string;
            ClaimAsset: {
                assets: string;
                ticket: string;
            };
            Trap: string;
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
        };
    };
    /**
     * Lookup116: staging_xcm::v2::multiasset::MultiAssets
     **/
    StagingXcmV2MultiassetMultiAssets: string;
    /**
     * Lookup118: staging_xcm::v2::multiasset::MultiAsset
     **/
    StagingXcmV2MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup119: staging_xcm::v2::multiasset::AssetId
     **/
    StagingXcmV2MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup120: staging_xcm::v2::multiasset::Fungibility
     **/
    StagingXcmV2MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup121: staging_xcm::v2::multiasset::AssetInstance
     **/
    StagingXcmV2MultiassetAssetInstance: {
        _enum: {
            Undefined: string;
            Index: string;
            Array4: string;
            Array8: string;
            Array16: string;
            Array32: string;
            Blob: string;
        };
    };
    /**
     * Lookup124: staging_xcm::v2::Response
     **/
    StagingXcmV2Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
        };
    };
    /**
     * Lookup127: staging_xcm::v2::traits::Error
     **/
    StagingXcmV2TraitsError: {
        _enum: {
            Overflow: string;
            Unimplemented: string;
            UntrustedReserveLocation: string;
            UntrustedTeleportLocation: string;
            MultiLocationFull: string;
            MultiLocationNotInvertible: string;
            BadOrigin: string;
            InvalidLocation: string;
            AssetNotFound: string;
            FailedToTransactAsset: string;
            NotWithdrawable: string;
            LocationCannotHold: string;
            ExceedsMaxMessageSize: string;
            DestinationUnsupported: string;
            Transport: string;
            Unroutable: string;
            UnknownClaim: string;
            FailedToDecode: string;
            MaxWeightInvalid: string;
            NotHoldingFees: string;
            TooExpensive: string;
            Trap: string;
            UnhandledXcmVersion: string;
            WeightLimitReached: string;
            Barrier: string;
            WeightNotComputable: string;
        };
    };
    /**
     * Lookup128: staging_xcm::v2::OriginKind
     **/
    StagingXcmV2OriginKind: {
        _enum: string[];
    };
    /**
     * Lookup129: staging_xcm::double_encoded::DoubleEncoded<T>
     **/
    StagingXcmDoubleEncoded: {
        encoded: string;
    };
    /**
     * Lookup130: staging_xcm::v2::multiasset::MultiAssetFilter
     **/
    StagingXcmV2MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup131: staging_xcm::v2::multiasset::WildMultiAsset
     **/
    StagingXcmV2MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
        };
    };
    /**
     * Lookup132: staging_xcm::v2::multiasset::WildFungibility
     **/
    StagingXcmV2MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup133: staging_xcm::v2::WeightLimit
     **/
    StagingXcmV2WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup134: staging_xcm::v3::Xcm<Call>
     **/
    StagingXcmV3Xcm: string;
    /**
     * Lookup136: staging_xcm::v3::Instruction<Call>
     **/
    StagingXcmV3Instruction: {
        _enum: {
            WithdrawAsset: string;
            ReserveAssetDeposited: string;
            ReceiveTeleportedAsset: string;
            QueryResponse: {
                queryId: string;
                response: string;
                maxWeight: string;
                querier: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            Transact: {
                originKind: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            ClearOrigin: string;
            DescendOrigin: string;
            ReportError: string;
            DepositAsset: {
                assets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            ExchangeAsset: {
                give: string;
                want: string;
                maximal: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                xcm: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                xcm: string;
            };
            ReportHolding: {
                responseInfo: string;
                assets: string;
            };
            BuyExecution: {
                fees: string;
                weightLimit: string;
            };
            RefundSurplus: string;
            SetErrorHandler: string;
            SetAppendix: string;
            ClearError: string;
            ClaimAsset: {
                assets: string;
                ticket: string;
            };
            Trap: string;
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
            BurnAsset: string;
            ExpectAsset: string;
            ExpectOrigin: string;
            ExpectError: string;
            ExpectTransactStatus: string;
            QueryPallet: {
                moduleName: string;
                responseInfo: string;
            };
            ExpectPallet: {
                index: string;
                name: string;
                moduleName: string;
                crateMajor: string;
                minCrateMinor: string;
            };
            ReportTransactStatus: string;
            ClearTransactStatus: string;
            UniversalOrigin: string;
            ExportMessage: {
                network: string;
                destination: string;
                xcm: string;
            };
            LockAsset: {
                asset: string;
                unlocker: string;
            };
            UnlockAsset: {
                asset: string;
                target: string;
            };
            NoteUnlockable: {
                asset: string;
                owner: string;
            };
            RequestUnlock: {
                asset: string;
                locker: string;
            };
            SetFeesMode: {
                jitWithdraw: string;
            };
            SetTopic: string;
            ClearTopic: string;
            AliasOrigin: string;
            UnpaidExecution: {
                weightLimit: string;
                checkOrigin: string;
            };
        };
    };
    /**
     * Lookup137: staging_xcm::v3::multiasset::MultiAssets
     **/
    StagingXcmV3MultiassetMultiAssets: string;
    /**
     * Lookup139: staging_xcm::v3::multiasset::MultiAsset
     **/
    StagingXcmV3MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup140: staging_xcm::v3::multiasset::AssetId
     **/
    StagingXcmV3MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup141: staging_xcm::v3::multiasset::Fungibility
     **/
    StagingXcmV3MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup142: staging_xcm::v3::multiasset::AssetInstance
     **/
    StagingXcmV3MultiassetAssetInstance: {
        _enum: {
            Undefined: string;
            Index: string;
            Array4: string;
            Array8: string;
            Array16: string;
            Array32: string;
        };
    };
    /**
     * Lookup143: staging_xcm::v3::Response
     **/
    StagingXcmV3Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
            PalletsInfo: string;
            DispatchResult: string;
        };
    };
    /**
     * Lookup146: staging_xcm::v3::traits::Error
     **/
    StagingXcmV3TraitsError: {
        _enum: {
            Overflow: string;
            Unimplemented: string;
            UntrustedReserveLocation: string;
            UntrustedTeleportLocation: string;
            LocationFull: string;
            LocationNotInvertible: string;
            BadOrigin: string;
            InvalidLocation: string;
            AssetNotFound: string;
            FailedToTransactAsset: string;
            NotWithdrawable: string;
            LocationCannotHold: string;
            ExceedsMaxMessageSize: string;
            DestinationUnsupported: string;
            Transport: string;
            Unroutable: string;
            UnknownClaim: string;
            FailedToDecode: string;
            MaxWeightInvalid: string;
            NotHoldingFees: string;
            TooExpensive: string;
            Trap: string;
            ExpectationFalse: string;
            PalletNotFound: string;
            NameMismatch: string;
            VersionIncompatible: string;
            HoldingWouldOverflow: string;
            ExportError: string;
            ReanchorFailed: string;
            NoDeal: string;
            FeesNotMet: string;
            LockError: string;
            NoPermission: string;
            Unanchored: string;
            NotDepositable: string;
            UnhandledXcmVersion: string;
            WeightLimitReached: string;
            Barrier: string;
            WeightNotComputable: string;
            ExceedsStackLimit: string;
        };
    };
    /**
     * Lookup148: staging_xcm::v3::PalletInfo
     **/
    StagingXcmV3PalletInfo: {
        index: string;
        name: string;
        moduleName: string;
        major: string;
        minor: string;
        patch: string;
    };
    /**
     * Lookup151: staging_xcm::v3::MaybeErrorCode
     **/
    StagingXcmV3MaybeErrorCode: {
        _enum: {
            Success: string;
            Error: string;
            TruncatedError: string;
        };
    };
    /**
     * Lookup154: staging_xcm::v3::QueryResponseInfo
     **/
    StagingXcmV3QueryResponseInfo: {
        destination: string;
        queryId: string;
        maxWeight: string;
    };
    /**
     * Lookup155: staging_xcm::v3::multiasset::MultiAssetFilter
     **/
    StagingXcmV3MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup156: staging_xcm::v3::multiasset::WildMultiAsset
     **/
    StagingXcmV3MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
            AllCounted: string;
            AllOfCounted: {
                id: string;
                fun: string;
                count: string;
            };
        };
    };
    /**
     * Lookup157: staging_xcm::v3::multiasset::WildFungibility
     **/
    StagingXcmV3MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup158: staging_xcm::v3::WeightLimit
     **/
    StagingXcmV3WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup159: staging_xcm::VersionedMultiAssets
     **/
    StagingXcmVersionedMultiAssets: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup169: cumulus_pallet_dmp_queue::pallet::Call<T>
     **/
    CumulusPalletDmpQueueCall: {
        _enum: {
            service_overweight: {
                index: string;
                weightLimit: string;
            };
        };
    };
    /**
     * Lookup170: pallet_utility::pallet::Call<T>
     **/
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: string;
            };
            as_derivative: {
                index: string;
                call: string;
            };
            batch_all: {
                calls: string;
            };
            dispatch_as: {
                asOrigin: string;
                call: string;
            };
            force_batch: {
                calls: string;
            };
            with_weight: {
                call: string;
                weight: string;
            };
        };
    };
    /**
     * Lookup172: pallet_scheduler::pallet::Call<T>
     **/
    PalletSchedulerCall: {
        _enum: {
            schedule: {
                when: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            cancel: {
                when: string;
                index: string;
            };
            schedule_named: {
                id: string;
                when: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            cancel_named: {
                id: string;
            };
            schedule_after: {
                after: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            schedule_named_after: {
                id: string;
                after: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
        };
    };
    /**
     * Lookup175: pallet_proxy::pallet::Call<T>
     **/
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: string;
                forceProxyType: string;
                call: string;
            };
            add_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxies: string;
            create_pure: {
                proxyType: string;
                delay: string;
                index: string;
            };
            kill_pure: {
                spawner: string;
                proxyType: string;
                index: string;
                height: string;
                extIndex: string;
            };
            announce: {
                real: string;
                callHash: string;
            };
            remove_announcement: {
                real: string;
                callHash: string;
            };
            reject_announcement: {
                delegate: string;
                callHash: string;
            };
            proxy_announced: {
                delegate: string;
                real: string;
                forceProxyType: string;
                call: string;
            };
        };
    };
    /**
     * Lookup177: curio_mainnet_runtime::utilities::ProxyType
     **/
    CurioMainnetRuntimeUtilitiesProxyType: {
        _enum: string[];
    };
    /**
     * Lookup178: pallet_multisig::pallet::Call<T>
     **/
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: string;
                call: string;
            };
            as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                call: string;
                maxWeight: string;
            };
            approve_as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                callHash: string;
                maxWeight: string;
            };
            cancel_as_multi: {
                threshold: string;
                otherSignatories: string;
                timepoint: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup180: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepoint: {
        height: string;
        index: string;
    };
    /**
     * Lookup181: pallet_identity::pallet::Call<T>
     **/
    PalletIdentityCall: {
        _enum: {
            add_registrar: {
                account: string;
            };
            set_identity: {
                info: string;
            };
            set_subs: {
                subs: string;
            };
            clear_identity: string;
            request_judgement: {
                regIndex: string;
                maxFee: string;
            };
            cancel_request: {
                regIndex: string;
            };
            set_fee: {
                index: string;
                fee: string;
            };
            set_account_id: {
                _alias: {
                    new_: string;
                };
                index: string;
                new_: string;
            };
            set_fields: {
                index: string;
                fields: string;
            };
            provide_judgement: {
                regIndex: string;
                target: string;
                judgement: string;
                identity: string;
            };
            kill_identity: {
                target: string;
            };
            add_sub: {
                sub: string;
                data: string;
            };
            rename_sub: {
                sub: string;
                data: string;
            };
            remove_sub: {
                sub: string;
            };
            quit_sub: string;
        };
    };
    /**
     * Lookup182: pallet_identity::types::IdentityInfo<FieldLimit>
     **/
    PalletIdentityIdentityInfo: {
        additional: string;
        display: string;
        legal: string;
        web: string;
        riot: string;
        email: string;
        pgpFingerprint: string;
        image: string;
        twitter: string;
    };
    /**
     * Lookup218: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
     **/
    PalletIdentityBitFlags: {
        _bitLength: number;
        Display: number;
        Legal: number;
        Web: number;
        Riot: number;
        Email: number;
        PgpFingerprint: number;
        Image: number;
        Twitter: number;
    };
    /**
     * Lookup219: pallet_identity::types::IdentityField
     **/
    PalletIdentityIdentityField: {
        _enum: string[];
    };
    /**
     * Lookup220: pallet_identity::types::Judgement<Balance>
     **/
    PalletIdentityJudgement: {
        _enum: {
            Unknown: string;
            FeePaid: string;
            Reasonable: string;
            KnownGood: string;
            OutOfDate: string;
            LowQuality: string;
            Erroneous: string;
        };
    };
    /**
     * Lookup221: pallet_tx_pause::pallet::Call<T>
     **/
    PalletTxPauseCall: {
        _enum: {
            pause: {
                fullName: string;
            };
            unpause: {
                ident: string;
            };
        };
    };
    /**
     * Lookup224: pallet_vesting::pallet::Call<T>
     **/
    PalletVestingCall: {
        _enum: {
            vest: string;
            vest_other: {
                target: string;
            };
            vested_transfer: {
                target: string;
                schedule: string;
            };
            force_vested_transfer: {
                source: string;
                target: string;
                schedule: string;
            };
            merge_schedules: {
                schedule1Index: string;
                schedule2Index: string;
            };
        };
    };
    /**
     * Lookup225: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
     **/
    PalletVestingVestingInfo: {
        locked: string;
        perBlock: string;
        startingBlock: string;
    };
    /**
     * Lookup226: pallet_treasury::pallet::Call<T, I>
     **/
    PalletTreasuryCall: {
        _enum: {
            propose_spend: {
                value: string;
                beneficiary: string;
            };
            reject_proposal: {
                proposalId: string;
            };
            approve_proposal: {
                proposalId: string;
            };
            spend: {
                amount: string;
                beneficiary: string;
            };
            remove_approval: {
                proposalId: string;
            };
        };
    };
    /**
     * Lookup227: pallet_bounties::pallet::Call<T, I>
     **/
    PalletBountiesCall: {
        _enum: {
            propose_bounty: {
                value: string;
                description: string;
            };
            approve_bounty: {
                bountyId: string;
            };
            propose_curator: {
                bountyId: string;
                curator: string;
                fee: string;
            };
            unassign_curator: {
                bountyId: string;
            };
            accept_curator: {
                bountyId: string;
            };
            award_bounty: {
                bountyId: string;
                beneficiary: string;
            };
            claim_bounty: {
                bountyId: string;
            };
            close_bounty: {
                bountyId: string;
            };
            extend_bounty_expiry: {
                bountyId: string;
                remark: string;
            };
        };
    };
    /**
     * Lookup228: pallet_preimage::pallet::Call<T>
     **/
    PalletPreimageCall: {
        _enum: {
            note_preimage: {
                bytes: string;
            };
            unnote_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            request_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            unrequest_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup229: pallet_dex::module::Call<T>
     **/
    PalletDexModuleCall: {
        _enum: {
            swap_with_exact_supply: {
                path: string;
                supplyAmount: string;
                minTargetAmount: string;
            };
            swap_with_exact_target: {
                path: string;
                targetAmount: string;
                maxSupplyAmount: string;
            };
            add_liquidity: {
                currencyIdA: string;
                currencyIdB: string;
                maxAmountA: string;
                maxAmountB: string;
                minShareIncrement: string;
                stakeIncrementShare: string;
            };
            add_provision: {
                currencyIdA: string;
                currencyIdB: string;
                amountA: string;
                amountB: string;
            };
            claim_dex_share: {
                owner: string;
                currencyIdA: string;
                currencyIdB: string;
            };
            remove_liquidity: {
                currencyIdA: string;
                currencyIdB: string;
                removeShare: string;
                minWithdrawnA: string;
                minWithdrawnB: string;
                byUnstake: string;
            };
            list_provisioning: {
                currencyIdA: string;
                currencyIdB: string;
                minContributionA: string;
                minContributionB: string;
                targetProvisionA: string;
                targetProvisionB: string;
                notBefore: string;
            };
            update_provisioning_parameters: {
                currencyIdA: string;
                currencyIdB: string;
                minContributionA: string;
                minContributionB: string;
                targetProvisionA: string;
                targetProvisionB: string;
                notBefore: string;
            };
            end_provisioning: {
                currencyIdA: string;
                currencyIdB: string;
            };
            enable_trading_pair: {
                currencyIdA: string;
                currencyIdB: string;
            };
            disable_trading_pair: {
                currencyIdA: string;
                currencyIdB: string;
            };
            refund_provision: {
                owner: string;
                currencyIdA: string;
                currencyIdB: string;
            };
            abort_provisioning: {
                currencyIdA: string;
                currencyIdB: string;
            };
        };
    };
    /**
     * Lookup231: curio_mainnet_runtime::currency_id::CurrencyId
     **/
    CurioMainnetRuntimeCurrencyId: {
        _enum: {
            Token: string;
            ForeignAsset: string;
            DexShare: string;
        };
    };
    /**
     * Lookup232: curio_mainnet_runtime::currency_id::TokenSymbol
     **/
    CurioMainnetRuntimeCurrencyIdTokenSymbol: {
        _enum: string[];
    };
    /**
     * Lookup233: curio_mainnet_runtime::currency_id::DexShare
     **/
    CurioMainnetRuntimeCurrencyIdDexShare: {
        _enum: {
            Token: string;
            ForeignAsset: string;
        };
    };
    /**
     * Lookup234: pallet_currencies::module::Call<T>
     **/
    PalletCurrenciesModuleCall: {
        _enum: {
            transfer: {
                dest: string;
                currencyId: string;
                amount: string;
            };
            transfer_native_currency: {
                dest: string;
                amount: string;
            };
            update_balance: {
                who: string;
                currencyId: string;
                amount: string;
            };
            sweep_dust: {
                currencyId: string;
                accounts: string;
            };
        };
    };
    /**
     * Lookup236: orml_tokens::module::Call<T>
     **/
    OrmlTokensModuleCall: {
        _enum: {
            transfer: {
                dest: string;
                currencyId: string;
                amount: string;
            };
            transfer_all: {
                dest: string;
                currencyId: string;
                keepAlive: string;
            };
            transfer_keep_alive: {
                dest: string;
                currencyId: string;
                amount: string;
            };
            force_transfer: {
                source: string;
                dest: string;
                currencyId: string;
                amount: string;
            };
            set_balance: {
                who: string;
                currencyId: string;
                newFree: string;
                newReserved: string;
            };
        };
    };
    /**
     * Lookup237: pallet_bridge::pallet::Call<T>
     **/
    PalletBridgeCall: {
        _enum: {
            mint: {
                requestId: string;
                to: string;
                token: string;
                amount: string;
            };
            batch_mint: {
                data: string;
            };
            burn: {
                currencyId: string;
                to: string;
                amount: string;
            };
            set_full_pause: {
                pause: string;
            };
            set_currency_pause: {
                currencyId: string;
                pause: string;
            };
            set_eth_blacklist: {
                account: string;
                blacklisted: string;
            };
            set_sub_blacklist: {
                account: string;
                blacklisted: string;
            };
            set_manager: {
                manager: string;
                isManager: string;
            };
            add_supported_currency: {
                currencyId: string;
                token: string;
                pause: string;
            };
            remove_supported_currency: {
                currencyId: string;
            };
        };
    };
    /**
     * Lookup240: pallet_bridge::MintData<sp_core::crypto::AccountId32, Balance>
     **/
    PalletBridgeMintData: {
        requestId: string;
        to: string;
        token: string;
        amount: string;
    };
    /**
     * Lookup241: orml_xtokens::module::Call<T>
     **/
    OrmlXtokensModuleCall: {
        _enum: {
            transfer: {
                currencyId: string;
                amount: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiasset: {
                asset: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_with_fee: {
                currencyId: string;
                amount: string;
                fee: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiasset_with_fee: {
                asset: string;
                fee: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multicurrencies: {
                currencies: string;
                feeItem: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiassets: {
                assets: string;
                feeItem: string;
                dest: string;
                destWeightLimit: string;
            };
        };
    };
    /**
     * Lookup242: staging_xcm::VersionedMultiAsset
     **/
    StagingXcmVersionedMultiAsset: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup245: orml_asset_registry::module::Call<T>
     **/
    OrmlAssetRegistryModuleCall: {
        _enum: {
            register_asset: {
                metadata: string;
                assetId: string;
            };
            update_asset: {
                assetId: string;
                decimals: string;
                name: string;
                symbol: string;
                existentialDeposit: string;
                location: string;
                additional: string;
            };
        };
    };
    /**
     * Lookup246: orml_traits::asset_registry::AssetMetadata<Balance, curio_common_runtime::xcm_config::CustomMetadata, StringLimit>
     **/
    OrmlTraitsAssetRegistryAssetMetadata: {
        decimals: string;
        name: string;
        symbol: string;
        existentialDeposit: string;
        location: string;
        additional: string;
    };
    /**
     * Lookup247: curio_common_runtime::xcm_config::CustomMetadata
     **/
    CurioCommonRuntimeXcmConfigCustomMetadata: {
        feePerSecond: string;
    };
    /**
     * Lookup255: pallet_incentives::module::Call<T>
     **/
    PalletIncentivesModuleCall: {
        _enum: {
            deposit_dex_share: {
                lpCurrencyId: string;
                amount: string;
            };
            withdraw_dex_share: {
                lpCurrencyId: string;
                amount: string;
            };
            claim_rewards: {
                poolId: string;
            };
            update_incentive_rewards: {
                updates: string;
            };
            update_claim_reward_deduction_rates: {
                updates: string;
            };
        };
    };
    /**
     * Lookup256: pallet_incentives::types::PoolId<curio_mainnet_runtime::currency_id::CurrencyId>
     **/
    PalletIncentivesPoolId: {
        _enum: {
            Dex: string;
        };
    };
    /**
     * Lookup262: pallet_sudo::pallet::Call<T>
     **/
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: string;
            };
            sudo_unchecked_weight: {
                call: string;
                weight: string;
            };
            set_key: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            sudo_as: {
                who: string;
                call: string;
            };
        };
    };
    /**
     * Lookup264: pallet_conviction_voting::types::Tally<Votes, Total>
     **/
    PalletConvictionVotingTally: {
        ayes: string;
        nays: string;
        support: string;
    };
    /**
     * Lookup265: pallet_ranked_collective::pallet::Event<T, I>
     **/
    PalletRankedCollectiveEvent: {
        _enum: {
            MemberAdded: {
                who: string;
            };
            RankChanged: {
                who: string;
                rank: string;
            };
            MemberRemoved: {
                who: string;
                rank: string;
            };
            Voted: {
                who: string;
                poll: string;
                vote: string;
                tally: string;
            };
        };
    };
    /**
     * Lookup266: pallet_ranked_collective::VoteRecord
     **/
    PalletRankedCollectiveVoteRecord: {
        _enum: {
            Aye: string;
            Nay: string;
        };
    };
    /**
     * Lookup267: pallet_ranked_collective::Tally<T, I, M>
     **/
    PalletRankedCollectiveTally: {
        bareAyes: string;
        ayes: string;
        nays: string;
    };
    /**
     * Lookup269: pallet_whitelist::pallet::Event<T>
     **/
    PalletWhitelistEvent: {
        _enum: {
            CallWhitelisted: {
                callHash: string;
            };
            WhitelistedCallRemoved: {
                callHash: string;
            };
            WhitelistedCallDispatched: {
                callHash: string;
                result: string;
            };
        };
    };
    /**
     * Lookup271: frame_support::dispatch::PostDispatchInfo
     **/
    FrameSupportDispatchPostDispatchInfo: {
        actualWeight: string;
        paysFee: string;
    };
    /**
     * Lookup273: sp_runtime::DispatchErrorWithPostInfo<frame_support::dispatch::PostDispatchInfo>
     **/
    SpRuntimeDispatchErrorWithPostInfo: {
        postInfo: string;
        error: string;
    };
    /**
     * Lookup274: cumulus_pallet_xcmp_queue::pallet::Event<T>
     **/
    CumulusPalletXcmpQueueEvent: {
        _enum: {
            Success: {
                messageHash: string;
                messageId: string;
                weight: string;
            };
            Fail: {
                messageHash: string;
                messageId: string;
                error: string;
                weight: string;
            };
            BadVersion: {
                messageHash: string;
            };
            BadFormat: {
                messageHash: string;
            };
            XcmpMessageSent: {
                messageHash: string;
            };
            OverweightEnqueued: {
                sender: string;
                sentAt: string;
                index: string;
                required: string;
            };
            OverweightServiced: {
                index: string;
                used: string;
            };
        };
    };
    /**
     * Lookup275: pallet_xcm::pallet::Event<T>
     **/
    PalletXcmEvent: {
        _enum: {
            Attempted: {
                outcome: string;
            };
            Sent: {
                origin: string;
                destination: string;
                message: string;
                messageId: string;
            };
            UnexpectedResponse: {
                origin: string;
                queryId: string;
            };
            ResponseReady: {
                queryId: string;
                response: string;
            };
            Notified: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
            };
            NotifyOverweight: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
                actualWeight: string;
                maxBudgetedWeight: string;
            };
            NotifyDispatchError: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
            };
            NotifyDecodeFailed: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
            };
            InvalidResponder: {
                origin: string;
                queryId: string;
                expectedLocation: string;
            };
            InvalidResponderVersion: {
                origin: string;
                queryId: string;
            };
            ResponseTaken: {
                queryId: string;
            };
            AssetsTrapped: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                origin: string;
                assets: string;
            };
            VersionChangeNotified: {
                destination: string;
                result: string;
                cost: string;
                messageId: string;
            };
            SupportedVersionChanged: {
                location: string;
                version: string;
            };
            NotifyTargetSendFail: {
                location: string;
                queryId: string;
                error: string;
            };
            NotifyTargetMigrationFail: {
                location: string;
                queryId: string;
            };
            InvalidQuerierVersion: {
                origin: string;
                queryId: string;
            };
            InvalidQuerier: {
                origin: string;
                queryId: string;
                expectedQuerier: string;
                maybeActualQuerier: string;
            };
            VersionNotifyStarted: {
                destination: string;
                cost: string;
                messageId: string;
            };
            VersionNotifyRequested: {
                destination: string;
                cost: string;
                messageId: string;
            };
            VersionNotifyUnrequested: {
                destination: string;
                cost: string;
                messageId: string;
            };
            FeesPaid: {
                paying: string;
                fees: string;
            };
            AssetsClaimed: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                origin: string;
                assets: string;
            };
        };
    };
    /**
     * Lookup276: staging_xcm::v3::traits::Outcome
     **/
    StagingXcmV3TraitsOutcome: {
        _enum: {
            Complete: string;
            Incomplete: string;
            Error: string;
        };
    };
    /**
     * Lookup277: cumulus_pallet_xcm::pallet::Event<T>
     **/
    CumulusPalletXcmEvent: {
        _enum: {
            InvalidFormat: string;
            UnsupportedVersion: string;
            ExecutedDownward: string;
        };
    };
    /**
     * Lookup278: cumulus_pallet_dmp_queue::pallet::Event<T>
     **/
    CumulusPalletDmpQueueEvent: {
        _enum: {
            InvalidFormat: {
                messageHash: string;
            };
            UnsupportedVersion: {
                messageHash: string;
            };
            ExecutedDownward: {
                messageHash: string;
                messageId: string;
                outcome: string;
            };
            WeightExhausted: {
                messageHash: string;
                messageId: string;
                remainingWeight: string;
                requiredWeight: string;
            };
            OverweightEnqueued: {
                messageHash: string;
                messageId: string;
                overweightIndex: string;
                requiredWeight: string;
            };
            OverweightServiced: {
                overweightIndex: string;
                weightUsed: string;
            };
            MaxMessagesExhausted: {
                messageHash: string;
            };
        };
    };
    /**
     * Lookup279: pallet_utility::pallet::Event
     **/
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: string;
                error: string;
            };
            BatchCompleted: string;
            BatchCompletedWithErrors: string;
            ItemCompleted: string;
            ItemFailed: {
                error: string;
            };
            DispatchedAs: {
                result: string;
            };
        };
    };
    /**
     * Lookup281: pallet_scheduler::pallet::Event<T>
     **/
    PalletSchedulerEvent: {
        _enum: {
            Scheduled: {
                when: string;
                index: string;
            };
            Canceled: {
                when: string;
                index: string;
            };
            Dispatched: {
                task: string;
                id: string;
                result: string;
            };
            CallUnavailable: {
                task: string;
                id: string;
            };
            PeriodicFailed: {
                task: string;
                id: string;
            };
            PermanentlyOverweight: {
                task: string;
                id: string;
            };
        };
    };
    /**
     * Lookup282: pallet_proxy::pallet::Event<T>
     **/
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: string;
            };
            PureCreated: {
                pure: string;
                who: string;
                proxyType: string;
                disambiguationIndex: string;
            };
            Announced: {
                real: string;
                proxy: string;
                callHash: string;
            };
            ProxyAdded: {
                delegator: string;
                delegatee: string;
                proxyType: string;
                delay: string;
            };
            ProxyRemoved: {
                delegator: string;
                delegatee: string;
                proxyType: string;
                delay: string;
            };
        };
    };
    /**
     * Lookup283: pallet_multisig::pallet::Event<T>
     **/
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: string;
                multisig: string;
                callHash: string;
            };
            MultisigApproval: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
            MultisigExecuted: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
                result: string;
            };
            MultisigCancelled: {
                cancelling: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup284: pallet_identity::pallet::Event<T>
     **/
    PalletIdentityEvent: {
        _enum: {
            IdentitySet: {
                who: string;
            };
            IdentityCleared: {
                who: string;
                deposit: string;
            };
            IdentityKilled: {
                who: string;
                deposit: string;
            };
            JudgementRequested: {
                who: string;
                registrarIndex: string;
            };
            JudgementUnrequested: {
                who: string;
                registrarIndex: string;
            };
            JudgementGiven: {
                target: string;
                registrarIndex: string;
            };
            RegistrarAdded: {
                registrarIndex: string;
            };
            SubIdentityAdded: {
                sub: string;
                main: string;
                deposit: string;
            };
            SubIdentityRemoved: {
                sub: string;
                main: string;
                deposit: string;
            };
            SubIdentityRevoked: {
                sub: string;
                main: string;
                deposit: string;
            };
        };
    };
    /**
     * Lookup285: pallet_tx_pause::pallet::Event<T>
     **/
    PalletTxPauseEvent: {
        _enum: {
            CallPaused: {
                fullName: string;
            };
            CallUnpaused: {
                fullName: string;
            };
        };
    };
    /**
     * Lookup286: pallet_vesting::pallet::Event<T>
     **/
    PalletVestingEvent: {
        _enum: {
            VestingUpdated: {
                account: string;
                unvested: string;
            };
            VestingCompleted: {
                account: string;
            };
        };
    };
    /**
     * Lookup287: pallet_treasury::pallet::Event<T, I>
     **/
    PalletTreasuryEvent: {
        _enum: {
            Proposed: {
                proposalIndex: string;
            };
            Spending: {
                budgetRemaining: string;
            };
            Awarded: {
                proposalIndex: string;
                award: string;
                account: string;
            };
            Rejected: {
                proposalIndex: string;
                slashed: string;
            };
            Burnt: {
                burntFunds: string;
            };
            Rollover: {
                rolloverBalance: string;
            };
            Deposit: {
                value: string;
            };
            SpendApproved: {
                proposalIndex: string;
                amount: string;
                beneficiary: string;
            };
            UpdatedInactive: {
                reactivated: string;
                deactivated: string;
            };
        };
    };
    /**
     * Lookup288: pallet_bounties::pallet::Event<T, I>
     **/
    PalletBountiesEvent: {
        _enum: {
            BountyProposed: {
                index: string;
            };
            BountyRejected: {
                index: string;
                bond: string;
            };
            BountyBecameActive: {
                index: string;
            };
            BountyAwarded: {
                index: string;
                beneficiary: string;
            };
            BountyClaimed: {
                index: string;
                payout: string;
                beneficiary: string;
            };
            BountyCanceled: {
                index: string;
            };
            BountyExtended: {
                index: string;
            };
        };
    };
    /**
     * Lookup289: pallet_preimage::pallet::Event<T>
     **/
    PalletPreimageEvent: {
        _enum: {
            Noted: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Requested: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Cleared: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup290: pallet_dex::module::Event<T>
     **/
    PalletDexModuleEvent: {
        _enum: {
            AddProvision: {
                who: string;
                currency0: string;
                contribution0: string;
                currency1: string;
                contribution1: string;
            };
            AddLiquidity: {
                who: string;
                currency0: string;
                pool0: string;
                currency1: string;
                pool1: string;
                shareIncrement: string;
            };
            RemoveLiquidity: {
                who: string;
                currency0: string;
                pool0: string;
                currency1: string;
                pool1: string;
                shareDecrement: string;
            };
            Swap: {
                trader: string;
                path: string;
                liquidityChanges: string;
            };
            EnableTradingPair: {
                tradingPair: string;
            };
            ListProvisioning: {
                tradingPair: string;
            };
            DisableTradingPair: {
                tradingPair: string;
            };
            ProvisioningToEnabled: {
                tradingPair: string;
                pool0: string;
                pool1: string;
                shareAmount: string;
            };
            RefundProvision: {
                who: string;
                currency0: string;
                contribution0: string;
                currency1: string;
                contribution1: string;
            };
            ProvisioningAborted: {
                tradingPair: string;
                accumulatedProvision0: string;
                accumulatedProvision1: string;
            };
        };
    };
    /**
     * Lookup292: pallet_dex::types::TradingPair<curio_mainnet_runtime::currency_id::CurrencyId>
     **/
    PalletDexTradingPair: string;
    /**
     * Lookup293: pallet_currencies::module::Event<T>
     **/
    PalletCurrenciesModuleEvent: {
        _enum: {
            Transferred: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
            };
            Withdrawn: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Deposited: {
                currencyId: string;
                who: string;
                amount: string;
            };
            DustSwept: {
                currencyId: string;
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup294: orml_tokens::module::Event<T>
     **/
    OrmlTokensModuleEvent: {
        _enum: {
            Endowed: {
                currencyId: string;
                who: string;
                amount: string;
            };
            DustLost: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Transfer: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
            };
            Reserved: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Unreserved: {
                currencyId: string;
                who: string;
                amount: string;
            };
            ReserveRepatriated: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
                status: string;
            };
            BalanceSet: {
                currencyId: string;
                who: string;
                free: string;
                reserved: string;
            };
            TotalIssuanceSet: {
                currencyId: string;
                amount: string;
            };
            Withdrawn: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Slashed: {
                currencyId: string;
                who: string;
                freeAmount: string;
                reservedAmount: string;
            };
            Deposited: {
                currencyId: string;
                who: string;
                amount: string;
            };
            LockSet: {
                lockId: string;
                currencyId: string;
                who: string;
                amount: string;
            };
            LockRemoved: {
                lockId: string;
                currencyId: string;
                who: string;
            };
            Locked: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Unlocked: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Issued: {
                currencyId: string;
                amount: string;
            };
            Rescinded: {
                currencyId: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup295: pallet_bridge::pallet::Event<T>
     **/
    PalletBridgeEvent: {
        _enum: {
            Paused: string;
            Unpaused: string;
            Mint: {
                requestId: string;
                to: string;
                token: string;
                currencyId: string;
                amount: string;
            };
            Burn: {
                requestId: string;
                from: string;
                to: string;
                token: string;
                currencyId: string;
                amount: string;
            };
            ManagerAdded: {
                manager: string;
            };
            ManagerRemoved: {
                manager: string;
            };
            CurrencyPaused: {
                id: string;
            };
            CurrencyUnpaused: {
                id: string;
            };
            CurrencyAdded: {
                id: string;
            };
            CurrencyRemoved: {
                id: string;
            };
            BlacklistedSub: {
                account: string;
            };
            RemovedFromBlacklistSub: {
                account: string;
            };
            BlacklistedEth: {
                account: string;
            };
            RemovedFromBlacklistEth: {
                account: string;
            };
        };
    };
    /**
     * Lookup296: orml_xtokens::module::Event<T>
     **/
    OrmlXtokensModuleEvent: {
        _enum: {
            TransferredMultiAssets: {
                sender: string;
                assets: string;
                fee: string;
                dest: string;
            };
        };
    };
    /**
     * Lookup297: orml_unknown_tokens::module::Event
     **/
    OrmlUnknownTokensModuleEvent: {
        _enum: {
            Deposited: {
                asset: string;
                who: string;
            };
            Withdrawn: {
                asset: string;
                who: string;
            };
        };
    };
    /**
     * Lookup298: orml_asset_registry::module::Event<T>
     **/
    OrmlAssetRegistryModuleEvent: {
        _enum: {
            RegisteredAsset: {
                assetId: string;
                metadata: string;
            };
            UpdatedAsset: {
                assetId: string;
                metadata: string;
            };
        };
    };
    /**
     * Lookup299: pallet_incentives::module::Event<T>
     **/
    PalletIncentivesModuleEvent: {
        _enum: {
            DepositDexShare: {
                who: string;
                dexShareType: string;
                deposit: string;
            };
            WithdrawDexShare: {
                who: string;
                dexShareType: string;
                withdraw: string;
            };
            ClaimRewards: {
                who: string;
                pool: string;
                rewardCurrencyId: string;
                actualAmount: string;
                deductionAmount: string;
            };
            IncentiveRewardAmountUpdated: {
                pool: string;
                rewardCurrencyId: string;
                rewardAmountPerPeriod: string;
            };
            ClaimRewardDeductionRateUpdated: {
                pool: string;
                deductionRate: string;
            };
        };
    };
    /**
     * Lookup300: pallet_sudo::pallet::Event<T>
     **/
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: string;
            };
            KeyChanged: {
                oldSudoer: string;
            };
            SudoAsDone: {
                sudoResult: string;
            };
        };
    };
    /**
     * Lookup302: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: string;
            Finalization: string;
            Initialization: string;
        };
    };
    /**
     * Lookup305: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: string;
        specName: string;
    };
    /**
     * Lookup307: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: string;
        maxBlock: string;
        perClass: string;
    };
    /**
     * Lookup308: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup309: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: string;
        maxExtrinsic: string;
        maxTotal: string;
        reserved: string;
    };
    /**
     * Lookup310: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: string;
    };
    /**
     * Lookup311: frame_support::dispatch::PerDispatchClass<T>
     **/
    FrameSupportDispatchPerDispatchClassU32: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup312: sp_weights::RuntimeDbWeight
     **/
    SpWeightsRuntimeDbWeight: {
        read: string;
        write: string;
    };
    /**
     * Lookup313: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: string;
        implName: string;
        authoringVersion: string;
        specVersion: string;
        implVersion: string;
        apis: string;
        transactionVersion: string;
        stateVersion: string;
    };
    /**
     * Lookup317: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: string[];
    };
    /**
     * Lookup319: pallet_indices::pallet::Error<T>
     **/
    PalletIndicesError: {
        _enum: string[];
    };
    /**
     * Lookup321: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
     **/
    CumulusPalletParachainSystemUnincludedSegmentAncestor: {
        usedBandwidth: string;
        paraHeadHash: string;
        consumedGoAheadSignal: string;
    };
    /**
     * Lookup322: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
     **/
    CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
        umpMsgCount: string;
        umpTotalBytes: string;
        hrmpOutgoing: string;
    };
    /**
     * Lookup324: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
     **/
    CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
        msgCount: string;
        totalBytes: string;
    };
    /**
     * Lookup328: polkadot_primitives::v5::UpgradeGoAhead
     **/
    PolkadotPrimitivesV5UpgradeGoAhead: {
        _enum: string[];
    };
    /**
     * Lookup329: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
     **/
    CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
        usedBandwidth: string;
        hrmpWatermark: string;
        consumedGoAheadSignal: string;
    };
    /**
     * Lookup331: polkadot_primitives::v5::UpgradeRestriction
     **/
    PolkadotPrimitivesV5UpgradeRestriction: {
        _enum: string[];
    };
    /**
     * Lookup332: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
     **/
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
        dmqMqcHead: string;
        relayDispatchQueueRemainingCapacity: string;
        ingressChannels: string;
        egressChannels: string;
    };
    /**
     * Lookup333: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
     **/
    CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
        remainingCount: string;
        remainingSize: string;
    };
    /**
     * Lookup336: polkadot_primitives::v5::AbridgedHrmpChannel
     **/
    PolkadotPrimitivesV5AbridgedHrmpChannel: {
        maxCapacity: string;
        maxTotalSize: string;
        maxMessageSize: string;
        msgCount: string;
        totalSize: string;
        mqcHead: string;
    };
    /**
     * Lookup337: polkadot_primitives::v5::AbridgedHostConfiguration
     **/
    PolkadotPrimitivesV5AbridgedHostConfiguration: {
        maxCodeSize: string;
        maxHeadDataSize: string;
        maxUpwardQueueCount: string;
        maxUpwardQueueSize: string;
        maxUpwardMessageSize: string;
        maxUpwardMessageNumPerCandidate: string;
        hrmpMaxMessageNumPerCandidate: string;
        validationUpgradeCooldown: string;
        validationUpgradeDelay: string;
        asyncBackingParams: string;
    };
    /**
     * Lookup338: polkadot_primitives::vstaging::AsyncBackingParams
     **/
    PolkadotPrimitivesVstagingAsyncBackingParams: {
        maxCandidateDepth: string;
        allowedAncestryLen: string;
    };
    /**
     * Lookup344: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
     **/
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: string;
        data: string;
    };
    /**
     * Lookup345: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
     **/
    CumulusPalletParachainSystemCodeUpgradeAuthorization: {
        codeHash: string;
        checkVersion: string;
    };
    /**
     * Lookup346: cumulus_pallet_parachain_system::pallet::Error<T>
     **/
    CumulusPalletParachainSystemError: {
        _enum: string[];
    };
    /**
     * Lookup348: pallet_balances::types::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: string;
        amount: string;
        reasons: string;
    };
    /**
     * Lookup349: pallet_balances::types::Reasons
     **/
    PalletBalancesReasons: {
        _enum: string[];
    };
    /**
     * Lookup352: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup355: pallet_balances::types::IdAmount<curio_mainnet_runtime::RuntimeHoldReason, Balance>
     **/
    PalletBalancesIdAmountRuntimeHoldReason: {
        id: string;
        amount: string;
    };
    /**
     * Lookup356: curio_mainnet_runtime::RuntimeHoldReason
     **/
    CurioMainnetRuntimeRuntimeHoldReason: string;
    /**
     * Lookup359: pallet_balances::types::IdAmount<curio_mainnet_runtime::RuntimeFreezeReason, Balance>
     **/
    PalletBalancesIdAmountRuntimeFreezeReason: {
        id: string;
        amount: string;
    };
    /**
     * Lookup360: curio_mainnet_runtime::RuntimeFreezeReason
     **/
    CurioMainnetRuntimeRuntimeFreezeReason: string;
    /**
     * Lookup362: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: string[];
    };
    /**
     * Lookup363: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: string[];
    };
    /**
     * Lookup371: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: string;
    /**
     * Lookup372: pallet_session::pallet::Error<T>
     **/
    PalletSessionError: {
        _enum: string[];
    };
    /**
     * Lookup373: parachain_staking::types::RoundInfo<BlockNumber>
     **/
    ParachainStakingRoundInfo: {
        current: string;
        first: string;
        length: string;
    };
    /**
     * Lookup374: parachain_staking::types::DelegationCounter
     **/
    ParachainStakingDelegationCounter: {
        round: string;
        counter: string;
    };
    /**
     * Lookup375: parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingStake: {
        owner: string;
        amount: string;
    };
    /**
     * Lookup376: parachain_staking::types::Candidate<sp_core::crypto::AccountId32, Balance, MaxDelegatorsPerCandidate>
     **/
    ParachainStakingCandidate: {
        id: string;
        stake: string;
        delegators: string;
        total: string;
        status: string;
    };
    /**
     * Lookup377: parachain_staking::set::OrderedSet<parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>, S>
     **/
    ParachainStakingSetOrderedSet: string;
    /**
     * Lookup380: parachain_staking::types::CandidateStatus
     **/
    ParachainStakingCandidateStatus: {
        _enum: {
            Active: string;
            Leaving: string;
        };
    };
    /**
     * Lookup381: parachain_staking::types::TotalStake<Balance>
     **/
    ParachainStakingTotalStake: {
        collators: string;
        delegators: string;
    };
    /**
     * Lookup384: parachain_staking::inflation::InflationInfo
     **/
    ParachainStakingInflationInflationInfo: {
        collator: string;
        delegator: string;
    };
    /**
     * Lookup385: parachain_staking::inflation::StakingInfo
     **/
    ParachainStakingInflationStakingInfo: {
        maxRate: string;
        rewardRate: string;
    };
    /**
     * Lookup386: parachain_staking::inflation::RewardRate
     **/
    ParachainStakingInflationRewardRate: {
        annual: string;
        perBlock: string;
    };
    /**
     * Lookup391: parachain_staking::pallet::Error<T>
     **/
    ParachainStakingError: {
        _enum: string[];
    };
    /**
     * Lookup394: pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
     **/
    PalletConvictionVotingVoteVoting: {
        _enum: {
            Casting: string;
            Delegating: string;
        };
    };
    /**
     * Lookup395: pallet_conviction_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
     **/
    PalletConvictionVotingVoteCasting: {
        votes: string;
        delegations: string;
        prior: string;
    };
    /**
     * Lookup399: pallet_conviction_voting::types::Delegations<Balance>
     **/
    PalletConvictionVotingDelegations: {
        votes: string;
        capital: string;
    };
    /**
     * Lookup400: pallet_conviction_voting::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletConvictionVotingVotePriorLock: string;
    /**
     * Lookup401: pallet_conviction_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletConvictionVotingVoteDelegating: {
        balance: string;
        target: string;
        conviction: string;
        delegations: string;
        prior: string;
    };
    /**
     * Lookup405: pallet_conviction_voting::pallet::Error<T, I>
     **/
    PalletConvictionVotingError: {
        _enum: string[];
    };
    /**
     * Lookup406: pallet_referenda::types::ReferendumInfo<TrackId, curio_mainnet_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumInfoConvictionVotingTally: {
        _enum: {
            Ongoing: string;
            Approved: string;
            Rejected: string;
            Cancelled: string;
            TimedOut: string;
            Killed: string;
        };
    };
    /**
     * Lookup407: pallet_referenda::types::ReferendumStatus<TrackId, curio_mainnet_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumStatusConvictionVotingTally: {
        track: string;
        origin: string;
        proposal: string;
        enactment: string;
        submitted: string;
        submissionDeposit: string;
        decisionDeposit: string;
        deciding: string;
        tally: string;
        inQueue: string;
        alarm: string;
    };
    /**
     * Lookup408: pallet_referenda::types::Deposit<sp_core::crypto::AccountId32, Balance>
     **/
    PalletReferendaDeposit: {
        who: string;
        amount: string;
    };
    /**
     * Lookup411: pallet_referenda::types::DecidingStatus<BlockNumber>
     **/
    PalletReferendaDecidingStatus: {
        since: string;
        confirming: string;
    };
    /**
     * Lookup420: pallet_referenda::types::TrackInfo<Balance, Moment>
     **/
    PalletReferendaTrackInfo: {
        name: string;
        maxDeciding: string;
        decisionDeposit: string;
        preparePeriod: string;
        decisionPeriod: string;
        confirmPeriod: string;
        minEnactmentPeriod: string;
        minApproval: string;
        minSupport: string;
    };
    /**
     * Lookup421: pallet_referenda::types::Curve
     **/
    PalletReferendaCurve: {
        _enum: {
            LinearDecreasing: {
                length: string;
                floor: string;
                ceil: string;
            };
            SteppedDecreasing: {
                begin: string;
                end: string;
                step: string;
                period: string;
            };
            Reciprocal: {
                factor: string;
                xOffset: string;
                yOffset: string;
            };
        };
    };
    /**
     * Lookup425: pallet_referenda::pallet::Error<T, I>
     **/
    PalletReferendaError: {
        _enum: string[];
    };
    /**
     * Lookup426: pallet_ranked_collective::MemberRecord
     **/
    PalletRankedCollectiveMemberRecord: {
        rank: string;
    };
    /**
     * Lookup431: pallet_ranked_collective::pallet::Error<T, I>
     **/
    PalletRankedCollectiveError: {
        _enum: string[];
    };
    /**
     * Lookup432: pallet_referenda::types::ReferendumInfo<TrackId, curio_mainnet_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumInfoRankedCollectiveTally: {
        _enum: {
            Ongoing: string;
            Approved: string;
            Rejected: string;
            Cancelled: string;
            TimedOut: string;
            Killed: string;
        };
    };
    /**
     * Lookup433: pallet_referenda::types::ReferendumStatus<TrackId, curio_mainnet_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumStatusRankedCollectiveTally: {
        track: string;
        origin: string;
        proposal: string;
        enactment: string;
        submitted: string;
        submissionDeposit: string;
        decisionDeposit: string;
        deciding: string;
        tally: string;
        inQueue: string;
        alarm: string;
    };
    /**
     * Lookup438: pallet_whitelist::pallet::Error<T>
     **/
    PalletWhitelistError: {
        _enum: string[];
    };
    /**
     * Lookup440: cumulus_pallet_xcmp_queue::InboundChannelDetails
     **/
    CumulusPalletXcmpQueueInboundChannelDetails: {
        sender: string;
        state: string;
        messageMetadata: string;
    };
    /**
     * Lookup441: cumulus_pallet_xcmp_queue::InboundState
     **/
    CumulusPalletXcmpQueueInboundState: {
        _enum: string[];
    };
    /**
     * Lookup444: polkadot_parachain_primitives::primitives::XcmpMessageFormat
     **/
    PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat: {
        _enum: string[];
    };
    /**
     * Lookup447: cumulus_pallet_xcmp_queue::OutboundChannelDetails
     **/
    CumulusPalletXcmpQueueOutboundChannelDetails: {
        recipient: string;
        state: string;
        signalsExist: string;
        firstIndex: string;
        lastIndex: string;
    };
    /**
     * Lookup448: cumulus_pallet_xcmp_queue::OutboundState
     **/
    CumulusPalletXcmpQueueOutboundState: {
        _enum: string[];
    };
    /**
     * Lookup450: cumulus_pallet_xcmp_queue::QueueConfigData
     **/
    CumulusPalletXcmpQueueQueueConfigData: {
        suspendThreshold: string;
        dropThreshold: string;
        resumeThreshold: string;
        thresholdWeight: string;
        weightRestrictDecay: string;
        xcmpMaxIndividualWeight: string;
    };
    /**
     * Lookup452: cumulus_pallet_xcmp_queue::pallet::Error<T>
     **/
    CumulusPalletXcmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup453: pallet_xcm::pallet::QueryStatus<BlockNumber>
     **/
    PalletXcmQueryStatus: {
        _enum: {
            Pending: {
                responder: string;
                maybeMatchQuerier: string;
                maybeNotify: string;
                timeout: string;
            };
            VersionNotifier: {
                origin: string;
                isActive: string;
            };
            Ready: {
                response: string;
                at: string;
            };
        };
    };
    /**
     * Lookup456: staging_xcm::VersionedResponse
     **/
    StagingXcmVersionedResponse: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            V2: string;
            V3: string;
        };
    };
    /**
     * Lookup462: pallet_xcm::pallet::VersionMigrationStage
     **/
    PalletXcmVersionMigrationStage: {
        _enum: {
            MigrateSupportedVersion: string;
            MigrateVersionNotifiers: string;
            NotifyCurrentTargets: string;
            MigrateAndNotifyOldTargets: string;
        };
    };
    /**
     * Lookup465: staging_xcm::VersionedAssetId
     **/
    StagingXcmVersionedAssetId: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup466: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
     **/
    PalletXcmRemoteLockedFungibleRecord: {
        amount: string;
        owner: string;
        locker: string;
        consumers: string;
    };
    /**
     * Lookup473: pallet_xcm::pallet::Error<T>
     **/
    PalletXcmError: {
        _enum: string[];
    };
    /**
     * Lookup474: cumulus_pallet_xcm::pallet::Error<T>
     **/
    CumulusPalletXcmError: string;
    /**
     * Lookup475: cumulus_pallet_dmp_queue::ConfigData
     **/
    CumulusPalletDmpQueueConfigData: {
        maxIndividual: string;
    };
    /**
     * Lookup476: cumulus_pallet_dmp_queue::PageIndexData
     **/
    CumulusPalletDmpQueuePageIndexData: {
        beginUsed: string;
        endUsed: string;
        overweightCount: string;
    };
    /**
     * Lookup479: cumulus_pallet_dmp_queue::pallet::Error<T>
     **/
    CumulusPalletDmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup480: pallet_utility::pallet::Error<T>
     **/
    PalletUtilityError: {
        _enum: string[];
    };
    /**
     * Lookup483: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, BlockNumber, curio_mainnet_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduled: {
        maybeId: string;
        priority: string;
        call: string;
        maybePeriodic: string;
        origin: string;
    };
    /**
     * Lookup485: pallet_scheduler::pallet::Error<T>
     **/
    PalletSchedulerError: {
        _enum: string[];
    };
    /**
     * Lookup488: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, curio_mainnet_runtime::utilities::ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
        delegate: string;
        proxyType: string;
        delay: string;
    };
    /**
     * Lookup492: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
        real: string;
        callHash: string;
        height: string;
    };
    /**
     * Lookup494: pallet_proxy::pallet::Error<T>
     **/
    PalletProxyError: {
        _enum: string[];
    };
    /**
     * Lookup496: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
     **/
    PalletMultisigMultisig: {
        when: string;
        deposit: string;
        depositor: string;
        approvals: string;
    };
    /**
     * Lookup498: pallet_multisig::pallet::Error<T>
     **/
    PalletMultisigError: {
        _enum: string[];
    };
    /**
     * Lookup499: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityRegistration: {
        judgements: string;
        deposit: string;
        info: string;
    };
    /**
     * Lookup507: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
     **/
    PalletIdentityRegistrarInfo: {
        account: string;
        fee: string;
        fields: string;
    };
    /**
     * Lookup509: pallet_identity::pallet::Error<T>
     **/
    PalletIdentityError: {
        _enum: string[];
    };
    /**
     * Lookup510: pallet_tx_pause::pallet::Error<T>
     **/
    PalletTxPauseError: {
        _enum: string[];
    };
    /**
     * Lookup513: pallet_vesting::Releases
     **/
    PalletVestingReleases: {
        _enum: string[];
    };
    /**
     * Lookup514: pallet_vesting::pallet::Error<T>
     **/
    PalletVestingError: {
        _enum: string[];
    };
    /**
     * Lookup515: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
        proposer: string;
        value: string;
        beneficiary: string;
        bond: string;
    };
    /**
     * Lookup518: frame_support::PalletId
     **/
    FrameSupportPalletId: string;
    /**
     * Lookup519: pallet_treasury::pallet::Error<T, I>
     **/
    PalletTreasuryError: {
        _enum: string[];
    };
    /**
     * Lookup520: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletBountiesBounty: {
        proposer: string;
        value: string;
        fee: string;
        curatorDeposit: string;
        bond: string;
        status: string;
    };
    /**
     * Lookup521: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletBountiesBountyStatus: {
        _enum: {
            Proposed: string;
            Approved: string;
            Funded: string;
            CuratorProposed: {
                curator: string;
            };
            Active: {
                curator: string;
                updateDue: string;
            };
            PendingPayout: {
                curator: string;
                beneficiary: string;
                unlockAt: string;
            };
        };
    };
    /**
     * Lookup523: pallet_bounties::pallet::Error<T, I>
     **/
    PalletBountiesError: {
        _enum: string[];
    };
    /**
     * Lookup524: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
     **/
    PalletPreimageRequestStatus: {
        _enum: {
            Unrequested: {
                deposit: string;
                len: string;
            };
            Requested: {
                deposit: string;
                count: string;
                len: string;
            };
        };
    };
    /**
     * Lookup529: pallet_preimage::pallet::Error<T>
     **/
    PalletPreimageError: {
        _enum: string[];
    };
    /**
     * Lookup531: pallet_dex::types::TradingPairStatus<Balance, BlockNumber>
     **/
    PalletDexTradingPairStatus: {
        _enum: {
            Disabled: string;
            Provisioning: string;
            Enabled: string;
        };
    };
    /**
     * Lookup532: pallet_dex::types::ProvisioningParameters<Balance, BlockNumber>
     **/
    PalletDexProvisioningParameters: {
        minContribution: string;
        targetProvision: string;
        accumulatedProvision: string;
        notBefore: string;
    };
    /**
     * Lookup535: pallet_dex::module::Error<T>
     **/
    PalletDexModuleError: {
        _enum: string[];
    };
    /**
     * Lookup536: pallet_currencies::module::Error<T>
     **/
    PalletCurrenciesModuleError: {
        _enum: string[];
    };
    /**
     * Lookup539: orml_tokens::BalanceLock<Balance>
     **/
    OrmlTokensBalanceLock: {
        id: string;
        amount: string;
    };
    /**
     * Lookup541: orml_tokens::AccountData<Balance>
     **/
    OrmlTokensAccountData: {
        free: string;
        reserved: string;
        frozen: string;
    };
    /**
     * Lookup543: orml_tokens::ReserveData<ReserveIdentifier, Balance>
     **/
    OrmlTokensReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup545: orml_tokens::module::Error<T>
     **/
    OrmlTokensModuleError: {
        _enum: string[];
    };
    /**
     * Lookup547: pallet_bridge::pallet::Error<T>
     **/
    PalletBridgeError: {
        _enum: string[];
    };
    /**
     * Lookup548: orml_xtokens::module::Error<T>
     **/
    OrmlXtokensModuleError: {
        _enum: string[];
    };
    /**
     * Lookup551: orml_unknown_tokens::module::Error<T>
     **/
    OrmlUnknownTokensModuleError: {
        _enum: string[];
    };
    /**
     * Lookup552: orml_asset_registry::module::Error<T>
     **/
    OrmlAssetRegistryModuleError: {
        _enum: string[];
    };
    /**
     * Lookup553: orml_rewards::PoolInfo<Share, Balance, curio_mainnet_runtime::currency_id::CurrencyId>
     **/
    OrmlRewardsPoolInfo: {
        totalShares: string;
        rewards: string;
    };
    /**
     * Lookup560: orml_rewards::module::Error<T>
     **/
    OrmlRewardsModuleError: {
        _enum: string[];
    };
    /**
     * Lookup563: pallet_incentives::module::Error<T>
     **/
    PalletIncentivesModuleError: {
        _enum: string[];
    };
    /**
     * Lookup564: pallet_sudo::pallet::Error<T>
     **/
    PalletSudoError: {
        _enum: string[];
    };
    /**
     * Lookup566: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: string;
            Sr25519: string;
            Ecdsa: string;
        };
    };
    /**
     * Lookup567: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: string;
    /**
     * Lookup569: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: string;
    /**
     * Lookup570: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: string;
    /**
     * Lookup573: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
     **/
    FrameSystemExtensionsCheckNonZeroSender: string;
    /**
     * Lookup574: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: string;
    /**
     * Lookup575: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: string;
    /**
     * Lookup576: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: string;
    /**
     * Lookup579: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: string;
    /**
     * Lookup580: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: string;
    /**
     * Lookup581: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: string;
    /**
     * Lookup582: curio_mainnet_runtime::Runtime
     **/
    CurioMainnetRuntimeRuntime: string;
};
export default _default;
