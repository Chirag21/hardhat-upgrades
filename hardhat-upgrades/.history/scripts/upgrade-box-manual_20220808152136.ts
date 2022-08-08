import { developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS } from "../helper-hardhat-config";
import { ethers,network, deployments, getNamedAccounts } from "hardhat";
import verify from "../utils/verify";
import { BoxProxyAdmin } from "../typechain-types/contracts/proxy/BoxProxyAdmin";
import { BoxV2 } from "../typechain-types/contracts/BoxV2";

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

    const boxProxyAdmin: BoxProxyAdmin = await eters
    const transparentProxy = await ethers.getContractFactory("Box_Proxy");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
