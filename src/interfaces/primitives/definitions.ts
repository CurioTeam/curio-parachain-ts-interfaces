export default {
    types: {
      Amount: 'i128',
      Balance: 'u128',
      BlockNumber: 'u64',
      TokenSymbol: {
        _enum: {
          CGT: 0,
          KSM: 2,
          DAI: 31,
          USDC: 33,
        }
      },
      DexShare: {
        _enum: {
          Token: 'TokenSymbol',
          ForeignAsset: 'u32'
        }
      },
      CurrencyId: {
        _enum: {
          Token: 'TokenSymbol',
          DexShare: '(DexShare, DexShare)',
          ForeignAsset: 'u32'
        }
      },
      TradingPair: '(CurrencyId,  CurrencyId)'
    }
  };