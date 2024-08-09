import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 100,
    tokenName: 'PRT',
    stakingTokenName: QuoteToken.EGG,
    stakingTokenAddress: '0x0D02d418E35e66487443952Cf14ab583d4fc512F',
    contractAddress: {
      97: '0x7886c0fedc155209dcBB5b9026591F698F8e78c2',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '',
    harvest: true,
    tokenPerBlock: '0.8',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18
  },

]

export default pools
