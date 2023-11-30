import '@polkadot/types/types/registry';
import type { CumulusPalletDmpQueueCall, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueueError, CumulusPalletDmpQueueEvent, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemCodeUpgradeAuthorization, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmError, CumulusPalletXcmEvent, CumulusPalletXcmOrigin, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueInboundState, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesParachainInherentParachainInherentData, CurioMainnetRuntimeConsensusSessionKeys, CurioMainnetRuntimeCurrencyId, CurioMainnetRuntimeCurrencyIdDexShare, CurioMainnetRuntimeCurrencyIdTokenSymbol, CurioMainnetRuntimeMonetaryHoldReason, CurioMainnetRuntimeOriginCaller, CurioMainnetRuntimeRuntime, CurioMainnetRuntimeRuntimeFreezeReason, CurioMainnetRuntimeUtilitiesProxyType, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportDispatchRawOrigin, FrameSupportPalletId, FrameSupportPreimagesBounded, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, ModuleTransactionPauseModuleCall, ModuleTransactionPauseModuleError, ModuleTransactionPauseModuleEvent, OrmlRewardsModuleCall, OrmlRewardsModuleError, OrmlRewardsPoolInfo, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleCall, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlTokensReserveData, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesIdAmountHoldReason, PalletBalancesIdAmountRuntimeFreezeReason, PalletBalancesReasons, PalletBalancesReserveData, PalletBountiesBounty, PalletBountiesBountyStatus, PalletBountiesCall, PalletBountiesError, PalletBountiesEvent, PalletBridgeCall, PalletBridgeError, PalletBridgeEvent, PalletBridgeMintData, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletCurrenciesModuleCall, PalletCurrenciesModuleError, PalletCurrenciesModuleEvent, PalletDemocracyCall, PalletDemocracyConviction, PalletDemocracyDelegations, PalletDemocracyError, PalletDemocracyEvent, PalletDemocracyMetadataOwner, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyTally, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletDexModuleCall, PalletDexModuleError, PalletDexModuleEvent, PalletDexProvisioningParameters, PalletDexTradingPair, PalletDexTradingPairStatus, PalletElectionsPhragmenCall, PalletElectionsPhragmenError, PalletElectionsPhragmenEvent, PalletElectionsPhragmenRenouncing, PalletElectionsPhragmenSeatHolder, PalletElectionsPhragmenVoter, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletIncentivesModuleCall, PalletIncentivesModuleError, PalletIncentivesModuleEvent, PalletIncentivesPoolId, PalletIndicesCall, PalletIndicesError, PalletIndicesEvent, PalletMembershipCall, PalletMembershipError, PalletMembershipEvent, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletPreimageCall, PalletPreimageError, PalletPreimageEvent, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerScheduled, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTimestampCall, PalletTipsCall, PalletTipsError, PalletTipsEvent, PalletTipsOpenTip, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletVestingCall, PalletVestingError, PalletVestingEvent, PalletVestingReleases, PalletVestingVestingInfo, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, ParachainStakingCall, ParachainStakingCandidate, ParachainStakingCandidateStatus, ParachainStakingDelegationCounter, ParachainStakingError, ParachainStakingEvent, ParachainStakingInflationInflationInfo, ParachainStakingInflationRewardRate, ParachainStakingInflationStakingInfo, ParachainStakingRoundInfo, ParachainStakingSetOrderedSet, ParachainStakingStake, ParachainStakingTotalStake, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesXcmpMessageFormat, PolkadotPrimitivesV4AbridgedHostConfiguration, PolkadotPrimitivesV4AbridgedHrmpChannel, PolkadotPrimitivesV4PersistedValidationData, PolkadotPrimitivesV4UpgradeRestriction, SpArithmeticArithmeticError, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpTrieStorageProof, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, XcmDoubleEncoded, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiLocation, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3TraitsOutcome, XcmV3WeightLimit, XcmV3Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedXcm } from '@polkadot/types/lookup';
declare module '@polkadot/types/types/registry' {
    interface InterfaceTypes {
        CumulusPalletDmpQueueCall: CumulusPalletDmpQueueCall;
        CumulusPalletDmpQueueConfigData: CumulusPalletDmpQueueConfigData;
        CumulusPalletDmpQueueError: CumulusPalletDmpQueueError;
        CumulusPalletDmpQueueEvent: CumulusPalletDmpQueueEvent;
        CumulusPalletDmpQueuePageIndexData: CumulusPalletDmpQueuePageIndexData;
        CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
        CumulusPalletParachainSystemCodeUpgradeAuthorization: CumulusPalletParachainSystemCodeUpgradeAuthorization;
        CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
        CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
        CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
        CumulusPalletXcmError: CumulusPalletXcmError;
        CumulusPalletXcmEvent: CumulusPalletXcmEvent;
        CumulusPalletXcmOrigin: CumulusPalletXcmOrigin;
        CumulusPalletXcmpQueueCall: CumulusPalletXcmpQueueCall;
        CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
        CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
        CumulusPalletXcmpQueueInboundChannelDetails: CumulusPalletXcmpQueueInboundChannelDetails;
        CumulusPalletXcmpQueueInboundState: CumulusPalletXcmpQueueInboundState;
        CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
        CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
        CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
        CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
        CurioMainnetRuntimeConsensusSessionKeys: CurioMainnetRuntimeConsensusSessionKeys;
        CurioMainnetRuntimeCurrencyId: CurioMainnetRuntimeCurrencyId;
        CurioMainnetRuntimeCurrencyIdDexShare: CurioMainnetRuntimeCurrencyIdDexShare;
        CurioMainnetRuntimeCurrencyIdTokenSymbol: CurioMainnetRuntimeCurrencyIdTokenSymbol;
        CurioMainnetRuntimeMonetaryHoldReason: CurioMainnetRuntimeMonetaryHoldReason;
        CurioMainnetRuntimeOriginCaller: CurioMainnetRuntimeOriginCaller;
        CurioMainnetRuntimeRuntime: CurioMainnetRuntimeRuntime;
        CurioMainnetRuntimeRuntimeFreezeReason: CurioMainnetRuntimeRuntimeFreezeReason;
        CurioMainnetRuntimeUtilitiesProxyType: CurioMainnetRuntimeUtilitiesProxyType;
        FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
        FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
        FrameSupportDispatchPays: FrameSupportDispatchPays;
        FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
        FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
        FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
        FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
        FrameSupportPalletId: FrameSupportPalletId;
        FrameSupportPreimagesBounded: FrameSupportPreimagesBounded;
        FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
        FrameSystemAccountInfo: FrameSystemAccountInfo;
        FrameSystemCall: FrameSystemCall;
        FrameSystemError: FrameSystemError;
        FrameSystemEvent: FrameSystemEvent;
        FrameSystemEventRecord: FrameSystemEventRecord;
        FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
        FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
        FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
        FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
        FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
        FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
        FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
        FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
        FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
        FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
        FrameSystemPhase: FrameSystemPhase;
        ModuleTransactionPauseModuleCall: ModuleTransactionPauseModuleCall;
        ModuleTransactionPauseModuleError: ModuleTransactionPauseModuleError;
        ModuleTransactionPauseModuleEvent: ModuleTransactionPauseModuleEvent;
        OrmlRewardsModuleCall: OrmlRewardsModuleCall;
        OrmlRewardsModuleError: OrmlRewardsModuleError;
        OrmlRewardsPoolInfo: OrmlRewardsPoolInfo;
        OrmlTokensAccountData: OrmlTokensAccountData;
        OrmlTokensBalanceLock: OrmlTokensBalanceLock;
        OrmlTokensModuleCall: OrmlTokensModuleCall;
        OrmlTokensModuleError: OrmlTokensModuleError;
        OrmlTokensModuleEvent: OrmlTokensModuleEvent;
        OrmlTokensReserveData: OrmlTokensReserveData;
        PalletBalancesAccountData: PalletBalancesAccountData;
        PalletBalancesBalanceLock: PalletBalancesBalanceLock;
        PalletBalancesCall: PalletBalancesCall;
        PalletBalancesError: PalletBalancesError;
        PalletBalancesEvent: PalletBalancesEvent;
        PalletBalancesIdAmountHoldReason: PalletBalancesIdAmountHoldReason;
        PalletBalancesIdAmountRuntimeFreezeReason: PalletBalancesIdAmountRuntimeFreezeReason;
        PalletBalancesReasons: PalletBalancesReasons;
        PalletBalancesReserveData: PalletBalancesReserveData;
        PalletBountiesBounty: PalletBountiesBounty;
        PalletBountiesBountyStatus: PalletBountiesBountyStatus;
        PalletBountiesCall: PalletBountiesCall;
        PalletBountiesError: PalletBountiesError;
        PalletBountiesEvent: PalletBountiesEvent;
        PalletBridgeCall: PalletBridgeCall;
        PalletBridgeError: PalletBridgeError;
        PalletBridgeEvent: PalletBridgeEvent;
        PalletBridgeMintData: PalletBridgeMintData;
        PalletCollectiveCall: PalletCollectiveCall;
        PalletCollectiveError: PalletCollectiveError;
        PalletCollectiveEvent: PalletCollectiveEvent;
        PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
        PalletCollectiveVotes: PalletCollectiveVotes;
        PalletCurrenciesModuleCall: PalletCurrenciesModuleCall;
        PalletCurrenciesModuleError: PalletCurrenciesModuleError;
        PalletCurrenciesModuleEvent: PalletCurrenciesModuleEvent;
        PalletDemocracyCall: PalletDemocracyCall;
        PalletDemocracyConviction: PalletDemocracyConviction;
        PalletDemocracyDelegations: PalletDemocracyDelegations;
        PalletDemocracyError: PalletDemocracyError;
        PalletDemocracyEvent: PalletDemocracyEvent;
        PalletDemocracyMetadataOwner: PalletDemocracyMetadataOwner;
        PalletDemocracyReferendumInfo: PalletDemocracyReferendumInfo;
        PalletDemocracyReferendumStatus: PalletDemocracyReferendumStatus;
        PalletDemocracyTally: PalletDemocracyTally;
        PalletDemocracyVoteAccountVote: PalletDemocracyVoteAccountVote;
        PalletDemocracyVotePriorLock: PalletDemocracyVotePriorLock;
        PalletDemocracyVoteThreshold: PalletDemocracyVoteThreshold;
        PalletDemocracyVoteVoting: PalletDemocracyVoteVoting;
        PalletDexModuleCall: PalletDexModuleCall;
        PalletDexModuleError: PalletDexModuleError;
        PalletDexModuleEvent: PalletDexModuleEvent;
        PalletDexProvisioningParameters: PalletDexProvisioningParameters;
        PalletDexTradingPair: PalletDexTradingPair;
        PalletDexTradingPairStatus: PalletDexTradingPairStatus;
        PalletElectionsPhragmenCall: PalletElectionsPhragmenCall;
        PalletElectionsPhragmenError: PalletElectionsPhragmenError;
        PalletElectionsPhragmenEvent: PalletElectionsPhragmenEvent;
        PalletElectionsPhragmenRenouncing: PalletElectionsPhragmenRenouncing;
        PalletElectionsPhragmenSeatHolder: PalletElectionsPhragmenSeatHolder;
        PalletElectionsPhragmenVoter: PalletElectionsPhragmenVoter;
        PalletIdentityBitFlags: PalletIdentityBitFlags;
        PalletIdentityCall: PalletIdentityCall;
        PalletIdentityError: PalletIdentityError;
        PalletIdentityEvent: PalletIdentityEvent;
        PalletIdentityIdentityField: PalletIdentityIdentityField;
        PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
        PalletIdentityJudgement: PalletIdentityJudgement;
        PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
        PalletIdentityRegistration: PalletIdentityRegistration;
        PalletIncentivesModuleCall: PalletIncentivesModuleCall;
        PalletIncentivesModuleError: PalletIncentivesModuleError;
        PalletIncentivesModuleEvent: PalletIncentivesModuleEvent;
        PalletIncentivesPoolId: PalletIncentivesPoolId;
        PalletIndicesCall: PalletIndicesCall;
        PalletIndicesError: PalletIndicesError;
        PalletIndicesEvent: PalletIndicesEvent;
        PalletMembershipCall: PalletMembershipCall;
        PalletMembershipError: PalletMembershipError;
        PalletMembershipEvent: PalletMembershipEvent;
        PalletMultisigCall: PalletMultisigCall;
        PalletMultisigError: PalletMultisigError;
        PalletMultisigEvent: PalletMultisigEvent;
        PalletMultisigMultisig: PalletMultisigMultisig;
        PalletMultisigTimepoint: PalletMultisigTimepoint;
        PalletPreimageCall: PalletPreimageCall;
        PalletPreimageError: PalletPreimageError;
        PalletPreimageEvent: PalletPreimageEvent;
        PalletPreimageRequestStatus: PalletPreimageRequestStatus;
        PalletProxyAnnouncement: PalletProxyAnnouncement;
        PalletProxyCall: PalletProxyCall;
        PalletProxyError: PalletProxyError;
        PalletProxyEvent: PalletProxyEvent;
        PalletProxyProxyDefinition: PalletProxyProxyDefinition;
        PalletSchedulerCall: PalletSchedulerCall;
        PalletSchedulerError: PalletSchedulerError;
        PalletSchedulerEvent: PalletSchedulerEvent;
        PalletSchedulerScheduled: PalletSchedulerScheduled;
        PalletSessionCall: PalletSessionCall;
        PalletSessionError: PalletSessionError;
        PalletSessionEvent: PalletSessionEvent;
        PalletSudoCall: PalletSudoCall;
        PalletSudoError: PalletSudoError;
        PalletSudoEvent: PalletSudoEvent;
        PalletTimestampCall: PalletTimestampCall;
        PalletTipsCall: PalletTipsCall;
        PalletTipsError: PalletTipsError;
        PalletTipsEvent: PalletTipsEvent;
        PalletTipsOpenTip: PalletTipsOpenTip;
        PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
        PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
        PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
        PalletTreasuryCall: PalletTreasuryCall;
        PalletTreasuryError: PalletTreasuryError;
        PalletTreasuryEvent: PalletTreasuryEvent;
        PalletTreasuryProposal: PalletTreasuryProposal;
        PalletUtilityCall: PalletUtilityCall;
        PalletUtilityError: PalletUtilityError;
        PalletUtilityEvent: PalletUtilityEvent;
        PalletVestingCall: PalletVestingCall;
        PalletVestingError: PalletVestingError;
        PalletVestingEvent: PalletVestingEvent;
        PalletVestingReleases: PalletVestingReleases;
        PalletVestingVestingInfo: PalletVestingVestingInfo;
        PalletXcmCall: PalletXcmCall;
        PalletXcmError: PalletXcmError;
        PalletXcmEvent: PalletXcmEvent;
        PalletXcmOrigin: PalletXcmOrigin;
        ParachainStakingCall: ParachainStakingCall;
        ParachainStakingCandidate: ParachainStakingCandidate;
        ParachainStakingCandidateStatus: ParachainStakingCandidateStatus;
        ParachainStakingDelegationCounter: ParachainStakingDelegationCounter;
        ParachainStakingError: ParachainStakingError;
        ParachainStakingEvent: ParachainStakingEvent;
        ParachainStakingInflationInflationInfo: ParachainStakingInflationInflationInfo;
        ParachainStakingInflationRewardRate: ParachainStakingInflationRewardRate;
        ParachainStakingInflationStakingInfo: ParachainStakingInflationStakingInfo;
        ParachainStakingRoundInfo: ParachainStakingRoundInfo;
        ParachainStakingSetOrderedSet: ParachainStakingSetOrderedSet;
        ParachainStakingStake: ParachainStakingStake;
        ParachainStakingTotalStake: ParachainStakingTotalStake;
        PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
        PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
        PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
        PolkadotParachainPrimitivesXcmpMessageFormat: PolkadotParachainPrimitivesXcmpMessageFormat;
        PolkadotPrimitivesV4AbridgedHostConfiguration: PolkadotPrimitivesV4AbridgedHostConfiguration;
        PolkadotPrimitivesV4AbridgedHrmpChannel: PolkadotPrimitivesV4AbridgedHrmpChannel;
        PolkadotPrimitivesV4PersistedValidationData: PolkadotPrimitivesV4PersistedValidationData;
        PolkadotPrimitivesV4UpgradeRestriction: PolkadotPrimitivesV4UpgradeRestriction;
        SpArithmeticArithmeticError: SpArithmeticArithmeticError;
        SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
        SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
        SpCoreEcdsaSignature: SpCoreEcdsaSignature;
        SpCoreEd25519Signature: SpCoreEd25519Signature;
        SpCoreSr25519Public: SpCoreSr25519Public;
        SpCoreSr25519Signature: SpCoreSr25519Signature;
        SpCoreVoid: SpCoreVoid;
        SpRuntimeDigest: SpRuntimeDigest;
        SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
        SpRuntimeDispatchError: SpRuntimeDispatchError;
        SpRuntimeModuleError: SpRuntimeModuleError;
        SpRuntimeMultiSignature: SpRuntimeMultiSignature;
        SpRuntimeTokenError: SpRuntimeTokenError;
        SpRuntimeTransactionalError: SpRuntimeTransactionalError;
        SpTrieStorageProof: SpTrieStorageProof;
        SpVersionRuntimeVersion: SpVersionRuntimeVersion;
        SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
        SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
        XcmDoubleEncoded: XcmDoubleEncoded;
        XcmV2BodyId: XcmV2BodyId;
        XcmV2BodyPart: XcmV2BodyPart;
        XcmV2Instruction: XcmV2Instruction;
        XcmV2Junction: XcmV2Junction;
        XcmV2MultiAsset: XcmV2MultiAsset;
        XcmV2MultiLocation: XcmV2MultiLocation;
        XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
        XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
        XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
        XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
        XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
        XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
        XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
        XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
        XcmV2NetworkId: XcmV2NetworkId;
        XcmV2OriginKind: XcmV2OriginKind;
        XcmV2Response: XcmV2Response;
        XcmV2TraitsError: XcmV2TraitsError;
        XcmV2WeightLimit: XcmV2WeightLimit;
        XcmV2Xcm: XcmV2Xcm;
        XcmV3Instruction: XcmV3Instruction;
        XcmV3Junction: XcmV3Junction;
        XcmV3JunctionBodyId: XcmV3JunctionBodyId;
        XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
        XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
        XcmV3Junctions: XcmV3Junctions;
        XcmV3MaybeErrorCode: XcmV3MaybeErrorCode;
        XcmV3MultiAsset: XcmV3MultiAsset;
        XcmV3MultiLocation: XcmV3MultiLocation;
        XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
        XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
        XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
        XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
        XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
        XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
        XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
        XcmV3PalletInfo: XcmV3PalletInfo;
        XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
        XcmV3Response: XcmV3Response;
        XcmV3TraitsError: XcmV3TraitsError;
        XcmV3TraitsOutcome: XcmV3TraitsOutcome;
        XcmV3WeightLimit: XcmV3WeightLimit;
        XcmV3Xcm: XcmV3Xcm;
        XcmVersionedMultiAssets: XcmVersionedMultiAssets;
        XcmVersionedMultiLocation: XcmVersionedMultiLocation;
        XcmVersionedXcm: XcmVersionedXcm;
    }
}
