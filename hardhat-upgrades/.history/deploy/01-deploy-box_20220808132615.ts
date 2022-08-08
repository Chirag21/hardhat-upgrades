import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployBox:DeployFunction = async (hre:HardhatRuntimeEnvironment)=>{
    const {deployments,network,getNamedAccounts,ethers} = hre;
    const {depl} = await getNamedAccounts()
}