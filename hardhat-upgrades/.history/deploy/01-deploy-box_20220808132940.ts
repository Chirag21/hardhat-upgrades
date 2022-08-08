import { verify } from "crypto";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS } from "../helper-hardhat-config";

const deployBox: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, network, getNamedAccounts, ethers } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS;

    log("--------------------------------------------------------------")
    const box = await deploy("Box",{
        from:deployer,
        args:[],
        log:true,
        waitConfirmations:waitBlockConfirmations,
    })

    if(!developmentChains.includes(network.name)){
        log("Verifying.......")
        await verify
    }
};
