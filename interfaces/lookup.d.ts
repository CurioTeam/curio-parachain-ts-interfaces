declare const _default: {
    /**
     * Lookup3: frame_system::AccountInfo<Index, pallet_balances::types::AccountData<Balance>>
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
     * Lookup39: pallet_democracy::pallet::Event<T>
     **/
    PalletDemocracyEvent: {
        _enum: {
            Proposed: {
                proposalIndex: string;
                deposit: string;
            };
            Tabled: {
                proposalIndex: string;
                deposit: string;
            };
            ExternalTabled: string;
            Started: {
                refIndex: string;
                threshold: string;
            };
            Passed: {
                refIndex: string;
            };
            NotPassed: {
                refIndex: string;
            };
            Cancelled: {
                refIndex: string;
            };
            Delegated: {
                who: string;
                target: string;
            };
            Undelegated: {
                account: string;
            };
            Vetoed: {
                who: string;
                proposalHash: string;
                until: string;
            };
            Blacklisted: {
                proposalHash: string;
            };
            Voted: {
                voter: string;
                refIndex: string;
                vote: string;
            };
            Seconded: {
                seconder: string;
                propIndex: string;
            };
            ProposalCanceled: {
                propIndex: string;
            };
            MetadataSet: {
                _alias: {
                    hash_: string;
                };
                owner: string;
                hash_: string;
            };
            MetadataCleared: {
                _alias: {
                    hash_: string;
                };
                owner: string;
                hash_: string;
            };
            MetadataTransferred: {
                _alias: {
                    hash_: string;
                };
                prevOwner: string;
                owner: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup40: pallet_democracy::vote_threshold::VoteThreshold
     **/
    PalletDemocracyVoteThreshold: {
        _enum: string[];
    };
    /**
     * Lookup41: pallet_democracy::vote::AccountVote<Balance>
     **/
    PalletDemocracyVoteAccountVote: {
        _enum: {
            Standard: {
                vote: string;
                balance: string;
            };
            Split: {
                aye: string;
                nay: string;
            };
        };
    };
    /**
     * Lookup43: pallet_democracy::types::MetadataOwner
     **/
    PalletDemocracyMetadataOwner: {
        _enum: {
            External: string;
            Proposal: string;
            Referendum: string;
        };
    };
    /**
     * Lookup44: pallet_collective::pallet::Event<T, I>
     **/
    PalletCollectiveEvent: {
        _enum: {
            Proposed: {
                account: string;
                proposalIndex: string;
                proposalHash: string;
                threshold: string;
            };
            Voted: {
                account: string;
                proposalHash: string;
                voted: string;
                yes: string;
                no: string;
            };
            Approved: {
                proposalHash: string;
            };
            Disapproved: {
                proposalHash: string;
            };
            Executed: {
                proposalHash: string;
                result: string;
            };
            MemberExecuted: {
                proposalHash: string;
                result: string;
            };
            Closed: {
                proposalHash: string;
                yes: string;
                no: string;
            };
        };
    };
    /**
     * Lookup49: pallet_elections_phragmen::pallet::Event<T>
     **/
    PalletElectionsPhragmenEvent: {
        _enum: {
            NewTerm: {
                newMembers: string;
            };
            EmptyTerm: string;
            ElectionError: string;
            MemberKicked: {
                member: string;
            };
            Renounced: {
                candidate: string;
            };
            CandidateSlashed: {
                candidate: string;
                amount: string;
            };
            SeatHolderSlashed: {
                seatHolder: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup52: pallet_membership::pallet::Event<T, I>
     **/
    PalletMembershipEvent: {
        _enum: string[];
    };
    /**
     * Lookup53: cumulus_pallet_xcmp_queue::pallet::Event<T>
     **/
    CumulusPalletXcmpQueueEvent: {
        _enum: {
            Success: {
                messageHash: string;
                weight: string;
            };
            Fail: {
                messageHash: string;
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
     * Lookup54: xcm::v3::traits::Error
     **/
    XcmV3TraitsError: {
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
     * Lookup56: pallet_xcm::pallet::Event<T>
     **/
    PalletXcmEvent: {
        _enum: {
            Attempted: string;
            Sent: string;
            UnexpectedResponse: string;
            ResponseReady: string;
            Notified: string;
            NotifyOverweight: string;
            NotifyDispatchError: string;
            NotifyDecodeFailed: string;
            InvalidResponder: string;
            InvalidResponderVersion: string;
            ResponseTaken: string;
            AssetsTrapped: string;
            VersionChangeNotified: string;
            SupportedVersionChanged: string;
            NotifyTargetSendFail: string;
            NotifyTargetMigrationFail: string;
            InvalidQuerierVersion: string;
            InvalidQuerier: string;
            VersionNotifyStarted: string;
            VersionNotifyRequested: string;
            VersionNotifyUnrequested: string;
            FeesPaid: string;
            AssetsClaimed: string;
        };
    };
    /**
     * Lookup57: xcm::v3::traits::Outcome
     **/
    XcmV3TraitsOutcome: {
        _enum: {
            Complete: string;
            Incomplete: string;
            Error: string;
        };
    };
    /**
     * Lookup58: xcm::v3::multilocation::MultiLocation
     **/
    XcmV3MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup59: xcm::v3::junctions::Junctions
     **/
    XcmV3Junctions: {
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
     * Lookup60: xcm::v3::junction::Junction
     **/
    XcmV3Junction: {
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
     * Lookup63: xcm::v3::junction::NetworkId
     **/
    XcmV3JunctionNetworkId: {
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
     * Lookup66: xcm::v3::junction::BodyId
     **/
    XcmV3JunctionBodyId: {
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
     * Lookup67: xcm::v3::junction::BodyPart
     **/
    XcmV3JunctionBodyPart: {
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
     * Lookup68: xcm::v3::Xcm<Call>
     **/
    XcmV3Xcm: string;
    /**
     * Lookup70: xcm::v3::Instruction<Call>
     **/
    XcmV3Instruction: {
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
     * Lookup71: xcm::v3::multiasset::MultiAssets
     **/
    XcmV3MultiassetMultiAssets: string;
    /**
     * Lookup73: xcm::v3::multiasset::MultiAsset
     **/
    XcmV3MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup74: xcm::v3::multiasset::AssetId
     **/
    XcmV3MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup75: xcm::v3::multiasset::Fungibility
     **/
    XcmV3MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup76: xcm::v3::multiasset::AssetInstance
     **/
    XcmV3MultiassetAssetInstance: {
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
     * Lookup79: xcm::v3::Response
     **/
    XcmV3Response: {
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
     * Lookup83: xcm::v3::PalletInfo
     **/
    XcmV3PalletInfo: {
        index: string;
        name: string;
        moduleName: string;
        major: string;
        minor: string;
        patch: string;
    };
    /**
     * Lookup86: xcm::v3::MaybeErrorCode
     **/
    XcmV3MaybeErrorCode: {
        _enum: {
            Success: string;
            Error: string;
            TruncatedError: string;
        };
    };
    /**
     * Lookup89: xcm::v2::OriginKind
     **/
    XcmV2OriginKind: {
        _enum: string[];
    };
    /**
     * Lookup90: xcm::double_encoded::DoubleEncoded<T>
     **/
    XcmDoubleEncoded: {
        encoded: string;
    };
    /**
     * Lookup91: xcm::v3::QueryResponseInfo
     **/
    XcmV3QueryResponseInfo: {
        destination: string;
        queryId: string;
        maxWeight: string;
    };
    /**
     * Lookup92: xcm::v3::multiasset::MultiAssetFilter
     **/
    XcmV3MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup93: xcm::v3::multiasset::WildMultiAsset
     **/
    XcmV3MultiassetWildMultiAsset: {
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
     * Lookup94: xcm::v3::multiasset::WildFungibility
     **/
    XcmV3MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup95: xcm::v3::WeightLimit
     **/
    XcmV3WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup96: xcm::VersionedMultiAssets
     **/
    XcmVersionedMultiAssets: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup97: xcm::v2::multiasset::MultiAssets
     **/
    XcmV2MultiassetMultiAssets: string;
    /**
     * Lookup99: xcm::v2::multiasset::MultiAsset
     **/
    XcmV2MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup100: xcm::v2::multiasset::AssetId
     **/
    XcmV2MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup101: xcm::v2::multilocation::MultiLocation
     **/
    XcmV2MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup102: xcm::v2::multilocation::Junctions
     **/
    XcmV2MultilocationJunctions: {
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
     * Lookup103: xcm::v2::junction::Junction
     **/
    XcmV2Junction: {
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
     * Lookup104: xcm::v2::NetworkId
     **/
    XcmV2NetworkId: {
        _enum: {
            Any: string;
            Named: string;
            Polkadot: string;
            Kusama: string;
        };
    };
    /**
     * Lookup106: xcm::v2::BodyId
     **/
    XcmV2BodyId: {
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
     * Lookup107: xcm::v2::BodyPart
     **/
    XcmV2BodyPart: {
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
     * Lookup108: xcm::v2::multiasset::Fungibility
     **/
    XcmV2MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup109: xcm::v2::multiasset::AssetInstance
     **/
    XcmV2MultiassetAssetInstance: {
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
     * Lookup110: xcm::VersionedMultiLocation
     **/
    XcmVersionedMultiLocation: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup111: cumulus_pallet_xcm::pallet::Event<T>
     **/
    CumulusPalletXcmEvent: {
        _enum: {
            InvalidFormat: string;
            UnsupportedVersion: string;
            ExecutedDownward: string;
        };
    };
    /**
     * Lookup112: cumulus_pallet_dmp_queue::pallet::Event<T>
     **/
    CumulusPalletDmpQueueEvent: {
        _enum: {
            InvalidFormat: {
                messageId: string;
            };
            UnsupportedVersion: {
                messageId: string;
            };
            ExecutedDownward: {
                messageId: string;
                outcome: string;
            };
            WeightExhausted: {
                messageId: string;
                remainingWeight: string;
                requiredWeight: string;
            };
            OverweightEnqueued: {
                messageId: string;
                overweightIndex: string;
                requiredWeight: string;
            };
            OverweightServiced: {
                overweightIndex: string;
                weightUsed: string;
            };
            MaxMessagesExhausted: {
                messageId: string;
            };
        };
    };
    /**
     * Lookup113: pallet_utility::pallet::Event
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
     * Lookup114: pallet_scheduler::pallet::Event<T>
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
     * Lookup116: pallet_proxy::pallet::Event<T>
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
     * Lookup117: curio_mainnet_runtime::utilities::ProxyType
     **/
    CurioMainnetRuntimeUtilitiesProxyType: {
        _enum: string[];
    };
    /**
     * Lookup119: pallet_multisig::pallet::Event<T>
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
     * Lookup120: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepoint: {
        height: string;
        index: string;
    };
    /**
     * Lookup121: pallet_identity::pallet::Event<T>
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
     * Lookup122: pallet_vesting::pallet::Event<T>
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
     * Lookup123: pallet_treasury::pallet::Event<T, I>
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
     * Lookup124: pallet_bounties::pallet::Event<T, I>
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
     * Lookup125: pallet_tips::pallet::Event<T, I>
     **/
    PalletTipsEvent: {
        _enum: {
            NewTip: {
                tipHash: string;
            };
            TipClosing: {
                tipHash: string;
            };
            TipClosed: {
                tipHash: string;
                who: string;
                payout: string;
            };
            TipRetracted: {
                tipHash: string;
            };
            TipSlashed: {
                tipHash: string;
                finder: string;
                deposit: string;
            };
        };
    };
    /**
     * Lookup126: pallet_preimage::pallet::Event<T>
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
     * Lookup127: pallet_dex::module::Event<T>
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
     * Lookup128: curio_mainnet_runtime::currency_id::CurrencyId
     **/
    CurioMainnetRuntimeCurrencyId: {
        _enum: {
            Token: string;
            DexShare: string;
        };
    };
    /**
     * Lookup129: curio_mainnet_runtime::currency_id::TokenSymbol
     **/
    CurioMainnetRuntimeCurrencyIdTokenSymbol: {
        _enum: string[];
    };
    /**
     * Lookup130: curio_mainnet_runtime::currency_id::DexShare
     **/
    CurioMainnetRuntimeCurrencyIdDexShare: {
        _enum: {
            Token: string;
        };
    };
    /**
     * Lookup133: pallet_dex::types::TradingPair<curio_mainnet_runtime::currency_id::CurrencyId>
     **/
    PalletDexTradingPair: string;
    /**
     * Lookup134: pallet_currencies::module::Event<T>
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
     * Lookup135: orml_tokens::module::Event<T>
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
        };
    };
    /**
     * Lookup136: pallet_bridge::pallet::Event<T>
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
     * Lookup138: module_transaction_pause::module::Event<T>
     **/
    ModuleTransactionPauseModuleEvent: {
        _enum: {
            TransactionPaused: {
                palletNameBytes: string;
                functionNameBytes: string;
            };
            TransactionUnpaused: {
                palletNameBytes: string;
                functionNameBytes: string;
            };
            EvmPrecompilePaused: {
                address: string;
            };
            EvmPrecompileUnpaused: {
                address: string;
            };
        };
    };
    /**
     * Lookup139: pallet_incentives::module::Event<T>
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
     * Lookup140: pallet_incentives::types::PoolId<curio_mainnet_runtime::currency_id::CurrencyId>
     **/
    PalletIncentivesPoolId: {
        _enum: {
            Dex: string;
        };
    };
    /**
     * Lookup142: pallet_sudo::pallet::Event<T>
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
     * Lookup144: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: string;
            Finalization: string;
            Initialization: string;
        };
    };
    /**
     * Lookup147: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: string;
        specName: string;
    };
    /**
     * Lookup149: frame_system::pallet::Call<T>
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
     * Lookup153: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: string;
        maxBlock: string;
        perClass: string;
    };
    /**
     * Lookup154: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup155: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: string;
        maxExtrinsic: string;
        maxTotal: string;
        reserved: string;
    };
    /**
     * Lookup157: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: string;
    };
    /**
     * Lookup158: frame_support::dispatch::PerDispatchClass<T>
     **/
    FrameSupportDispatchPerDispatchClassU32: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup159: sp_weights::RuntimeDbWeight
     **/
    SpWeightsRuntimeDbWeight: {
        read: string;
        write: string;
    };
    /**
     * Lookup160: sp_version::RuntimeVersion
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
     * Lookup164: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: string[];
    };
    /**
     * Lookup165: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: string;
            };
        };
    };
    /**
     * Lookup167: pallet_indices::pallet::Call<T>
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
     * Lookup170: pallet_indices::pallet::Error<T>
     **/
    PalletIndicesError: {
        _enum: string[];
    };
    /**
     * Lookup171: polkadot_primitives::v4::PersistedValidationData<primitive_types::H256, N>
     **/
    PolkadotPrimitivesV4PersistedValidationData: {
        parentHead: string;
        relayParentNumber: string;
        relayParentStorageRoot: string;
        maxPovSize: string;
    };
    /**
     * Lookup174: polkadot_primitives::v4::UpgradeRestriction
     **/
    PolkadotPrimitivesV4UpgradeRestriction: {
        _enum: string[];
    };
    /**
     * Lookup175: sp_trie::storage_proof::StorageProof
     **/
    SpTrieStorageProof: {
        trieNodes: string;
    };
    /**
     * Lookup177: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
     **/
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
        dmqMqcHead: string;
        relayDispatchQueueSize: string;
        ingressChannels: string;
        egressChannels: string;
    };
    /**
     * Lookup181: polkadot_primitives::v4::AbridgedHrmpChannel
     **/
    PolkadotPrimitivesV4AbridgedHrmpChannel: {
        maxCapacity: string;
        maxTotalSize: string;
        maxMessageSize: string;
        msgCount: string;
        totalSize: string;
        mqcHead: string;
    };
    /**
     * Lookup183: polkadot_primitives::v4::AbridgedHostConfiguration
     **/
    PolkadotPrimitivesV4AbridgedHostConfiguration: {
        maxCodeSize: string;
        maxHeadDataSize: string;
        maxUpwardQueueCount: string;
        maxUpwardQueueSize: string;
        maxUpwardMessageSize: string;
        maxUpwardMessageNumPerCandidate: string;
        hrmpMaxMessageNumPerCandidate: string;
        validationUpgradeCooldown: string;
        validationUpgradeDelay: string;
    };
    /**
     * Lookup189: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
     **/
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: string;
        data: string;
    };
    /**
     * Lookup190: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
     **/
    CumulusPalletParachainSystemCodeUpgradeAuthorization: {
        codeHash: string;
        checkVersion: string;
    };
    /**
     * Lookup191: cumulus_pallet_parachain_system::pallet::Call<T>
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
     * Lookup192: cumulus_primitives_parachain_inherent::ParachainInherentData
     **/
    CumulusPrimitivesParachainInherentParachainInherentData: {
        validationData: string;
        relayChainState: string;
        downwardMessages: string;
        horizontalMessages: string;
    };
    /**
     * Lookup194: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: string;
        msg: string;
    };
    /**
     * Lookup197: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: string;
        data: string;
    };
    /**
     * Lookup200: cumulus_pallet_parachain_system::pallet::Error<T>
     **/
    CumulusPalletParachainSystemError: {
        _enum: string[];
    };
    /**
     * Lookup202: pallet_balances::types::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: string;
        amount: string;
        reasons: string;
    };
    /**
     * Lookup203: pallet_balances::types::Reasons
     **/
    PalletBalancesReasons: {
        _enum: string[];
    };
    /**
     * Lookup206: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup209: pallet_balances::types::IdAmount<curio_mainnet_runtime::monetary::HoldReason, Balance>
     **/
    PalletBalancesIdAmountHoldReason: {
        id: string;
        amount: string;
    };
    /**
     * Lookup210: curio_mainnet_runtime::monetary::HoldReason
     **/
    CurioMainnetRuntimeMonetaryHoldReason: {
        _enum: string[];
    };
    /**
     * Lookup213: pallet_balances::types::IdAmount<curio_mainnet_runtime::RuntimeFreezeReason, Balance>
     **/
    PalletBalancesIdAmountRuntimeFreezeReason: {
        id: string;
        amount: string;
    };
    /**
     * Lookup214: curio_mainnet_runtime::RuntimeFreezeReason
     **/
    CurioMainnetRuntimeRuntimeFreezeReason: string;
    /**
     * Lookup216: pallet_balances::pallet::Call<T, I>
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
     * Lookup218: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: string[];
    };
    /**
     * Lookup219: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: string[];
    };
    /**
     * Lookup221: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: string;
    /**
     * Lookup222: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: string;
    /**
     * Lookup227: curio_mainnet_runtime::consensus::SessionKeys
     **/
    CurioMainnetRuntimeConsensusSessionKeys: {
        aura: string;
    };
    /**
     * Lookup230: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: string;
    /**
     * Lookup231: pallet_session::pallet::Call<T>
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
     * Lookup232: pallet_session::pallet::Error<T>
     **/
    PalletSessionError: {
        _enum: string[];
    };
    /**
     * Lookup233: parachain_staking::types::RoundInfo<BlockNumber>
     **/
    ParachainStakingRoundInfo: {
        current: string;
        first: string;
        length: string;
    };
    /**
     * Lookup234: parachain_staking::types::DelegationCounter
     **/
    ParachainStakingDelegationCounter: {
        round: string;
        counter: string;
    };
    /**
     * Lookup235: parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingStake: {
        owner: string;
        amount: string;
    };
    /**
     * Lookup236: parachain_staking::types::Candidate<sp_core::crypto::AccountId32, Balance, MaxDelegatorsPerCandidate>
     **/
    ParachainStakingCandidate: {
        id: string;
        stake: string;
        delegators: string;
        total: string;
        status: string;
    };
    /**
     * Lookup237: parachain_staking::set::OrderedSet<parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>, S>
     **/
    ParachainStakingSetOrderedSet: string;
    /**
     * Lookup240: parachain_staking::types::CandidateStatus
     **/
    ParachainStakingCandidateStatus: {
        _enum: {
            Active: string;
            Leaving: string;
        };
    };
    /**
     * Lookup241: parachain_staking::types::TotalStake<Balance>
     **/
    ParachainStakingTotalStake: {
        collators: string;
        delegators: string;
    };
    /**
     * Lookup244: parachain_staking::inflation::InflationInfo
     **/
    ParachainStakingInflationInflationInfo: {
        collator: string;
        delegator: string;
    };
    /**
     * Lookup245: parachain_staking::inflation::StakingInfo
     **/
    ParachainStakingInflationStakingInfo: {
        maxRate: string;
        rewardRate: string;
    };
    /**
     * Lookup246: parachain_staking::inflation::RewardRate
     **/
    ParachainStakingInflationRewardRate: {
        annual: string;
        perBlock: string;
    };
    /**
     * Lookup251: parachain_staking::pallet::Call<T>
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
     * Lookup252: parachain_staking::pallet::Error<T>
     **/
    ParachainStakingError: {
        _enum: string[];
    };
    /**
     * Lookup255: frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>
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
     * Lookup257: pallet_democracy::pallet::Call<T>
     **/
    PalletDemocracyCall: {
        _enum: {
            propose: {
                proposal: string;
                value: string;
            };
            second: {
                proposal: string;
            };
            vote: {
                refIndex: string;
                vote: string;
            };
            emergency_cancel: {
                refIndex: string;
            };
            external_propose: {
                proposal: string;
            };
            external_propose_majority: {
                proposal: string;
            };
            external_propose_default: {
                proposal: string;
            };
            fast_track: {
                proposalHash: string;
                votingPeriod: string;
                delay: string;
            };
            veto_external: {
                proposalHash: string;
            };
            cancel_referendum: {
                refIndex: string;
            };
            delegate: {
                to: string;
                conviction: string;
                balance: string;
            };
            undelegate: string;
            clear_public_proposals: string;
            unlock: {
                target: string;
            };
            remove_vote: {
                index: string;
            };
            remove_other_vote: {
                target: string;
                index: string;
            };
            blacklist: {
                proposalHash: string;
                maybeRefIndex: string;
            };
            cancel_proposal: {
                propIndex: string;
            };
            set_metadata: {
                owner: string;
                maybeHash: string;
            };
        };
    };
    /**
     * Lookup258: pallet_democracy::conviction::Conviction
     **/
    PalletDemocracyConviction: {
        _enum: string[];
    };
    /**
     * Lookup260: pallet_collective::pallet::Call<T, I>
     **/
    PalletCollectiveCall: {
        _enum: {
            set_members: {
                newMembers: string;
                prime: string;
                oldCount: string;
            };
            execute: {
                proposal: string;
                lengthBound: string;
            };
            propose: {
                threshold: string;
                proposal: string;
                lengthBound: string;
            };
            vote: {
                proposal: string;
                index: string;
                approve: string;
            };
            __Unused4: string;
            disapprove_proposal: {
                proposalHash: string;
            };
            close: {
                proposalHash: string;
                index: string;
                proposalWeightBound: string;
                lengthBound: string;
            };
        };
    };
    /**
     * Lookup262: pallet_elections_phragmen::pallet::Call<T>
     **/
    PalletElectionsPhragmenCall: {
        _enum: {
            vote: {
                votes: string;
                value: string;
            };
            remove_voter: string;
            submit_candidacy: {
                candidateCount: string;
            };
            renounce_candidacy: {
                renouncing: string;
            };
            remove_member: {
                who: string;
                slashBond: string;
                rerunElection: string;
            };
            clean_defunct_voters: {
                numVoters: string;
                numDefunct: string;
            };
        };
    };
    /**
     * Lookup263: pallet_elections_phragmen::Renouncing
     **/
    PalletElectionsPhragmenRenouncing: {
        _enum: {
            Member: string;
            RunnerUp: string;
            Candidate: string;
        };
    };
    /**
     * Lookup264: pallet_membership::pallet::Call<T, I>
     **/
    PalletMembershipCall: {
        _enum: {
            add_member: {
                who: string;
            };
            remove_member: {
                who: string;
            };
            swap_member: {
                remove: string;
                add: string;
            };
            reset_members: {
                members: string;
            };
            change_key: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_prime: {
                who: string;
            };
            clear_prime: string;
        };
    };
    /**
     * Lookup265: cumulus_pallet_xcmp_queue::pallet::Call<T>
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
     * Lookup266: pallet_xcm::pallet::Call<T>
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
                xcmVersion: string;
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
     * Lookup267: xcm::VersionedXcm<RuntimeCall>
     **/
    XcmVersionedXcm: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            V2: string;
            V3: string;
        };
    };
    /**
     * Lookup268: xcm::v2::Xcm<RuntimeCall>
     **/
    XcmV2Xcm: string;
    /**
     * Lookup270: xcm::v2::Instruction<RuntimeCall>
     **/
    XcmV2Instruction: {
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
     * Lookup271: xcm::v2::Response
     **/
    XcmV2Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
        };
    };
    /**
     * Lookup274: xcm::v2::traits::Error
     **/
    XcmV2TraitsError: {
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
     * Lookup275: xcm::v2::multiasset::MultiAssetFilter
     **/
    XcmV2MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup276: xcm::v2::multiasset::WildMultiAsset
     **/
    XcmV2MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
        };
    };
    /**
     * Lookup277: xcm::v2::multiasset::WildFungibility
     **/
    XcmV2MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup278: xcm::v2::WeightLimit
     **/
    XcmV2WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup287: cumulus_pallet_dmp_queue::pallet::Call<T>
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
     * Lookup288: pallet_utility::pallet::Call<T>
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
     * Lookup290: curio_mainnet_runtime::OriginCaller
     **/
    CurioMainnetRuntimeOriginCaller: {
        _enum: {
            system: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            __Unused4: string;
            Void: string;
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
            Council: string;
            TechnicalCommittee: string;
            __Unused33: string;
            __Unused34: string;
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
     * Lookup291: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: string;
            Signed: string;
            None: string;
        };
    };
    /**
     * Lookup292: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
     **/
    PalletCollectiveRawOrigin: {
        _enum: {
            Members: string;
            Member: string;
            _Phantom: string;
        };
    };
    /**
     * Lookup294: pallet_xcm::pallet::Origin
     **/
    PalletXcmOrigin: {
        _enum: {
            Xcm: string;
            Response: string;
        };
    };
    /**
     * Lookup295: cumulus_pallet_xcm::pallet::Origin
     **/
    CumulusPalletXcmOrigin: {
        _enum: {
            Relay: string;
            SiblingParachain: string;
        };
    };
    /**
     * Lookup296: sp_core::Void
     **/
    SpCoreVoid: string;
    /**
     * Lookup297: pallet_scheduler::pallet::Call<T>
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
     * Lookup299: pallet_proxy::pallet::Call<T>
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
     * Lookup301: pallet_multisig::pallet::Call<T>
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
     * Lookup303: pallet_identity::pallet::Call<T>
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
     * Lookup304: pallet_identity::types::IdentityInfo<FieldLimit>
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
     * Lookup340: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
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
     * Lookup341: pallet_identity::types::IdentityField
     **/
    PalletIdentityIdentityField: {
        _enum: string[];
    };
    /**
     * Lookup342: pallet_identity::types::Judgement<Balance>
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
     * Lookup343: pallet_vesting::pallet::Call<T>
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
     * Lookup344: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
     **/
    PalletVestingVestingInfo: {
        locked: string;
        perBlock: string;
        startingBlock: string;
    };
    /**
     * Lookup345: pallet_treasury::pallet::Call<T, I>
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
     * Lookup346: pallet_bounties::pallet::Call<T, I>
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
     * Lookup347: pallet_tips::pallet::Call<T, I>
     **/
    PalletTipsCall: {
        _enum: {
            report_awesome: {
                reason: string;
                who: string;
            };
            retract_tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            tip_new: {
                reason: string;
                who: string;
                tipValue: string;
            };
            tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                tipValue: string;
            };
            close_tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            slash_tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup348: pallet_preimage::pallet::Call<T>
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
     * Lookup349: pallet_dex::module::Call<T>
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
     * Lookup350: pallet_currencies::module::Call<T>
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
     * Lookup352: orml_tokens::module::Call<T>
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
     * Lookup353: pallet_bridge::pallet::Call<T>
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
     * Lookup355: pallet_bridge::MintData<sp_core::crypto::AccountId32, Balance>
     **/
    PalletBridgeMintData: {
        requestId: string;
        to: string;
        token: string;
        amount: string;
    };
    /**
     * Lookup356: module_transaction_pause::module::Call<T>
     **/
    ModuleTransactionPauseModuleCall: {
        _enum: {
            pause_transaction: {
                palletName: string;
                functionName: string;
            };
            unpause_transaction: {
                palletName: string;
                functionName: string;
            };
            pause_evm_precompile: {
                address: string;
            };
            unpause_evm_precompile: {
                address: string;
            };
        };
    };
    /**
     * Lookup357: orml_rewards::module::Call<T>
     **/
    OrmlRewardsModuleCall: string;
    /**
     * Lookup358: pallet_incentives::module::Call<T>
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
     * Lookup365: pallet_sudo::pallet::Call<T>
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
     * Lookup370: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance>
     **/
    PalletDemocracyReferendumInfo: {
        _enum: {
            Ongoing: string;
            Finished: {
                approved: string;
                end: string;
            };
        };
    };
    /**
     * Lookup371: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance>
     **/
    PalletDemocracyReferendumStatus: {
        end: string;
        proposal: string;
        threshold: string;
        delay: string;
        tally: string;
    };
    /**
     * Lookup372: pallet_democracy::types::Tally<Balance>
     **/
    PalletDemocracyTally: {
        ayes: string;
        nays: string;
        turnout: string;
    };
    /**
     * Lookup373: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
     **/
    PalletDemocracyVoteVoting: {
        _enum: {
            Direct: {
                votes: string;
                delegations: string;
                prior: string;
            };
            Delegating: {
                balance: string;
                target: string;
                conviction: string;
                delegations: string;
                prior: string;
            };
        };
    };
    /**
     * Lookup377: pallet_democracy::types::Delegations<Balance>
     **/
    PalletDemocracyDelegations: {
        votes: string;
        capital: string;
    };
    /**
     * Lookup378: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletDemocracyVotePriorLock: string;
    /**
     * Lookup382: pallet_democracy::pallet::Error<T>
     **/
    PalletDemocracyError: {
        _enum: string[];
    };
    /**
     * Lookup384: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletCollectiveVotes: {
        index: string;
        threshold: string;
        ayes: string;
        nays: string;
        end: string;
    };
    /**
     * Lookup385: pallet_collective::pallet::Error<T, I>
     **/
    PalletCollectiveError: {
        _enum: string[];
    };
    /**
     * Lookup389: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenSeatHolder: {
        who: string;
        stake: string;
        deposit: string;
    };
    /**
     * Lookup390: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenVoter: {
        votes: string;
        stake: string;
        deposit: string;
    };
    /**
     * Lookup391: pallet_elections_phragmen::pallet::Error<T>
     **/
    PalletElectionsPhragmenError: {
        _enum: string[];
    };
    /**
     * Lookup393: pallet_membership::pallet::Error<T, I>
     **/
    PalletMembershipError: {
        _enum: string[];
    };
    /**
     * Lookup395: cumulus_pallet_xcmp_queue::InboundChannelDetails
     **/
    CumulusPalletXcmpQueueInboundChannelDetails: {
        sender: string;
        state: string;
        messageMetadata: string;
    };
    /**
     * Lookup396: cumulus_pallet_xcmp_queue::InboundState
     **/
    CumulusPalletXcmpQueueInboundState: {
        _enum: string[];
    };
    /**
     * Lookup399: polkadot_parachain::primitives::XcmpMessageFormat
     **/
    PolkadotParachainPrimitivesXcmpMessageFormat: {
        _enum: string[];
    };
    /**
     * Lookup402: cumulus_pallet_xcmp_queue::OutboundChannelDetails
     **/
    CumulusPalletXcmpQueueOutboundChannelDetails: {
        recipient: string;
        state: string;
        signalsExist: string;
        firstIndex: string;
        lastIndex: string;
    };
    /**
     * Lookup403: cumulus_pallet_xcmp_queue::OutboundState
     **/
    CumulusPalletXcmpQueueOutboundState: {
        _enum: string[];
    };
    /**
     * Lookup405: cumulus_pallet_xcmp_queue::QueueConfigData
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
     * Lookup407: cumulus_pallet_xcmp_queue::pallet::Error<T>
     **/
    CumulusPalletXcmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup408: pallet_xcm::pallet::Error<T>
     **/
    PalletXcmError: {
        _enum: string[];
    };
    /**
     * Lookup409: cumulus_pallet_xcm::pallet::Error<T>
     **/
    CumulusPalletXcmError: string;
    /**
     * Lookup410: cumulus_pallet_dmp_queue::ConfigData
     **/
    CumulusPalletDmpQueueConfigData: {
        maxIndividual: string;
    };
    /**
     * Lookup411: cumulus_pallet_dmp_queue::PageIndexData
     **/
    CumulusPalletDmpQueuePageIndexData: {
        beginUsed: string;
        endUsed: string;
        overweightCount: string;
    };
    /**
     * Lookup414: cumulus_pallet_dmp_queue::pallet::Error<T>
     **/
    CumulusPalletDmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup415: pallet_utility::pallet::Error<T>
     **/
    PalletUtilityError: {
        _enum: string[];
    };
    /**
     * Lookup418: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, BlockNumber, curio_mainnet_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduled: {
        maybeId: string;
        priority: string;
        call: string;
        maybePeriodic: string;
        origin: string;
    };
    /**
     * Lookup420: pallet_scheduler::pallet::Error<T>
     **/
    PalletSchedulerError: {
        _enum: string[];
    };
    /**
     * Lookup423: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, curio_mainnet_runtime::utilities::ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
        delegate: string;
        proxyType: string;
        delay: string;
    };
    /**
     * Lookup427: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
        real: string;
        callHash: string;
        height: string;
    };
    /**
     * Lookup429: pallet_proxy::pallet::Error<T>
     **/
    PalletProxyError: {
        _enum: string[];
    };
    /**
     * Lookup431: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
     **/
    PalletMultisigMultisig: {
        when: string;
        deposit: string;
        depositor: string;
        approvals: string;
    };
    /**
     * Lookup433: pallet_multisig::pallet::Error<T>
     **/
    PalletMultisigError: {
        _enum: string[];
    };
    /**
     * Lookup434: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityRegistration: {
        judgements: string;
        deposit: string;
        info: string;
    };
    /**
     * Lookup442: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
     **/
    PalletIdentityRegistrarInfo: {
        account: string;
        fee: string;
        fields: string;
    };
    /**
     * Lookup444: pallet_identity::pallet::Error<T>
     **/
    PalletIdentityError: {
        _enum: string[];
    };
    /**
     * Lookup447: pallet_vesting::Releases
     **/
    PalletVestingReleases: {
        _enum: string[];
    };
    /**
     * Lookup448: pallet_vesting::pallet::Error<T>
     **/
    PalletVestingError: {
        _enum: string[];
    };
    /**
     * Lookup449: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
        proposer: string;
        value: string;
        beneficiary: string;
        bond: string;
    };
    /**
     * Lookup453: frame_support::PalletId
     **/
    FrameSupportPalletId: string;
    /**
     * Lookup454: pallet_treasury::pallet::Error<T, I>
     **/
    PalletTreasuryError: {
        _enum: string[];
    };
    /**
     * Lookup455: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
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
     * Lookup456: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
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
     * Lookup458: pallet_bounties::pallet::Error<T, I>
     **/
    PalletBountiesError: {
        _enum: string[];
    };
    /**
     * Lookup459: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
     **/
    PalletTipsOpenTip: {
        reason: string;
        who: string;
        finder: string;
        deposit: string;
        closes: string;
        tips: string;
        findersFee: string;
    };
    /**
     * Lookup462: pallet_tips::pallet::Error<T, I>
     **/
    PalletTipsError: {
        _enum: string[];
    };
    /**
     * Lookup463: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
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
     * Lookup467: pallet_preimage::pallet::Error<T>
     **/
    PalletPreimageError: {
        _enum: string[];
    };
    /**
     * Lookup469: pallet_dex::types::TradingPairStatus<Balance, BlockNumber>
     **/
    PalletDexTradingPairStatus: {
        _enum: {
            Disabled: string;
            Provisioning: string;
            Enabled: string;
        };
    };
    /**
     * Lookup470: pallet_dex::types::ProvisioningParameters<Balance, BlockNumber>
     **/
    PalletDexProvisioningParameters: {
        minContribution: string;
        targetProvision: string;
        accumulatedProvision: string;
        notBefore: string;
    };
    /**
     * Lookup473: pallet_dex::module::Error<T>
     **/
    PalletDexModuleError: {
        _enum: string[];
    };
    /**
     * Lookup474: pallet_currencies::module::Error<T>
     **/
    PalletCurrenciesModuleError: {
        _enum: string[];
    };
    /**
     * Lookup477: orml_tokens::BalanceLock<Balance>
     **/
    OrmlTokensBalanceLock: {
        id: string;
        amount: string;
    };
    /**
     * Lookup479: orml_tokens::AccountData<Balance>
     **/
    OrmlTokensAccountData: {
        free: string;
        reserved: string;
        frozen: string;
    };
    /**
     * Lookup481: orml_tokens::ReserveData<ReserveIdentifier, Balance>
     **/
    OrmlTokensReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup483: orml_tokens::module::Error<T>
     **/
    OrmlTokensModuleError: {
        _enum: string[];
    };
    /**
     * Lookup485: pallet_bridge::pallet::Error<T>
     **/
    PalletBridgeError: {
        _enum: string[];
    };
    /**
     * Lookup486: module_transaction_pause::module::Error<T>
     **/
    ModuleTransactionPauseModuleError: {
        _enum: string[];
    };
    /**
     * Lookup487: orml_rewards::PoolInfo<Share, Balance, curio_mainnet_runtime::currency_id::CurrencyId>
     **/
    OrmlRewardsPoolInfo: {
        totalShares: string;
        rewards: string;
    };
    /**
     * Lookup494: orml_rewards::module::Error<T>
     **/
    OrmlRewardsModuleError: {
        _enum: string[];
    };
    /**
     * Lookup497: pallet_incentives::module::Error<T>
     **/
    PalletIncentivesModuleError: {
        _enum: string[];
    };
    /**
     * Lookup498: pallet_sudo::pallet::Error<T>
     **/
    PalletSudoError: {
        _enum: string[];
    };
    /**
     * Lookup500: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: string;
            Sr25519: string;
            Ecdsa: string;
        };
    };
    /**
     * Lookup501: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: string;
    /**
     * Lookup503: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: string;
    /**
     * Lookup504: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: string;
    /**
     * Lookup507: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
     **/
    FrameSystemExtensionsCheckNonZeroSender: string;
    /**
     * Lookup508: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: string;
    /**
     * Lookup509: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: string;
    /**
     * Lookup510: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: string;
    /**
     * Lookup513: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: string;
    /**
     * Lookup514: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: string;
    /**
     * Lookup515: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: string;
    /**
     * Lookup516: curio_mainnet_runtime::Runtime
     **/
    CurioMainnetRuntimeRuntime: string;
};
export default _default;
