declare const _default: {
    types: {
        StakingRates: {
            collatorStakingRate: string;
            collatorRewardRate: string;
            delegatorStakingRate: string;
            delegatorRewardRate: string;
        };
    };
    runtime: {
        Staking: {
            methods: {
                get_staking_rates: {
                    description: string;
                    params: never[];
                    type: string;
                };
                get_unclaimed_staking_rewards: {
                    description: string;
                    params: {
                        name: string;
                        type: string;
                    }[];
                    type: string;
                };
                get_sorted_proposed_candidates: {
                    description: string;
                    params: {
                        name: string;
                        type: string;
                    }[];
                    type: string;
                };
            };
            version: number;
        }[];
    };
};
export default _default;
