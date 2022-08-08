import "@typechain/hardhat";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import "dotenv/config";
import "solidity-coverage";
import "hardhat-deploy";
import { HardhatUserConfig } from "hardhat/config";

const RINKEBY_RPC_URL =
    process.env.RINKEBY_RPC_URL ||
    `https://eth-rinkeby.alchemyapi.io/v2/${process.env.RINKEBY_API_KEY}}`;

const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY  = process.env.ETHERSCAN_API_KEY
const REPORT_GAS=process.env.REPORT_GAS == "true" || false

const config:HardhatUserConfig = {
    defaultNetwork:"hardhat",
    networks:{
        
    }
}