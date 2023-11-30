export default {
    types: {
      Amount: 'i128',
      Balance: 'u128',
      BlockNumber: 'u64',
      TokenSymbol: {
        _enum: {
          CGT: 0,
          DOT: 1,
          KSM: 2,
          UNQ: 3,
          QTZ: 4,
          GLMR: 5,
          MOVR: 6,
          ETH: 30,
          DAI: 31,
          USDT: 32,
          USDC: 33,
          BTC: 34,
          AVAX: 35,
          SOL: 36,
          AURORA: 37,
          NEAR: 38,
          WCT1: 39,
          TON: 40,
          XOR: 41,
          VAL: 42,
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