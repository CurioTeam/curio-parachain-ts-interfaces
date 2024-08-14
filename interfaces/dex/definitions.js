export default {
    types: {
        ProvisionParameters: {
            minContribution: '(Balance, Balance)',
            targetProvision: '(Balance, Balance)',
            accumulatedProvision: '(Balance, Balance)',
            notBefore: 'u64'
        },
        TradingPairStatus: {
            _enum: {
                Disabled: 'Null',
                Provisioning: 'ProvisionParameters',
                Enabled: 'Null'
            }
        }
    }
};
