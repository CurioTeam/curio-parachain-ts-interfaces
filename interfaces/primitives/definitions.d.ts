declare const _default: {
    types: {
        Amount: string;
        Balance: string;
        BlockNumber: string;
        TokenSymbol: {
            _enum: {
                CGT: number;
                KSM: number;
                DAI: number;
                USDC: number;
            };
        };
        DexShare: {
            _enum: {
                Token: string;
                ForeignAsset: string;
            };
        };
        CurrencyId: {
            _enum: {
                Token: string;
                ForeignAsset: string;
                DEXShare: string;
            };
        };
        TradingPair: string;
    };
};
export default _default;
