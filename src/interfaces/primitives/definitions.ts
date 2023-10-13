export default {
    types: {
      Amount: 'i128',
      TokenSymbol: {
        _enum: {
          CGT: 0,
          DAI: 1,
          WCT1: 2,
        }
      },
      DexShare: {
        _enum: {
          Token: 'TokenSymbol'
        }
      },
      CurrencyId: {
        _enum: {
          Token: 'TokenSymbol',
          DEXShare: '(DexShare, DexShare)'
        }
      },
      TradingPair: '(CurrencyId,  CurrencyId)'
    }
  };