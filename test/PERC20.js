const {expect} = require('chai')
const { ethers } = require('hardhat')
require('dotenv').config()

describe('PERC20',()=>{
  let perc20;
  beforeEach(async ()=>{
      const Perc20 = await ethers.getContractFactory('PERC20Sample');
      perc20 = await Perc20.deploy()
  })

  describe('Deployment', () => {
    it('Setting name',async()=>{
      expect( await perc20.name()).to.equal('PERC20')
    })

      it('Setting Symbol',async()=>{
        expect( await perc20.symbol()).to.equal('pSWTR')
      })

  })

  describe('Token Operations', async() => {
    it('Token Decimals',async()=>{
      expect(await perc20.decimals()).to.equal(18)
    })
    it('Checking totalSupply',async()=>{
     expect(await perc20.totalSupply()).to.equal("2000000000000000000")
    })
    it('Mine a token using mint funcction',async()=>{
      expect(await perc20.mint()).to.any
     })
     it('Approve the user',async()=>{
      console.log(await perc20.approve(process.env.account,"1000000000000000000"));
     })
     


  })
})