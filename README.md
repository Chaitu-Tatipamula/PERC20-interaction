# PrivateERC20
This repo demonstrates the use of perc20 token which is deploed in swisstronnik network

## key differences
->Default balanceOf and allowance functions are disabled in favor of your own implementation function. You should implement some access control logic or use msg.sender to check who sent that call. If eth_call was sent from EOA and was signed, it will recover msg.sender from provided signature, otherwise, it msg.sender will be empty address
->Transfer and Approval events are disabled, since they can leak sensitive information

Contract developers should avoid adding sensitive information to logs, such as transfer amounts, sender and recipient, etc. But you still can use them for some debugging or contract-wide events, for example, contract initialization.

Also, you should be careful with public view functions that can also leak some sensitive information, for example, user balance. In the example, we're using a msg.sender check to verify if the caller is the wallet owner. If this function was called from EOA (Externally Owned Account), EVM will try to recover msg.sender from provided signature within eth_call

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
