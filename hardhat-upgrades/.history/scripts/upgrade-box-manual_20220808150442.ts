import { developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS } from "../helper-hardhat-config";
import { network, deployments, ethers, getNamedAccounts } from "hardhat";
import verify from "../utils/verify";

async function main() {
    const {deploy,log} = deployments
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
