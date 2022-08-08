import { developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS } from "../helper-hardhat-config";
import { network, deployments, ethers, getNamedAccounts } from "hardhat";
import verify from "../utils/verify";
import {} from "../typechain-types/contracts/proxy-example/"

async function main() {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS;

    log("------------------------------------------------------------");

    const boxV2 = await deploy("BoxV2", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: waitBlockConfirmations,
    });

    if (!developmentChains.includes(network.name)) {
        console.log("Verifying................");
        verify(boxV2.address, []);
    }

    // upgrade
    // manual way. Not hardhat-deploy way

    const 
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
