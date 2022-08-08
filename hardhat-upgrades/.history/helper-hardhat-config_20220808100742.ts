import { string } from "hardhat/internal/core/params/argumentTypes";

export interface NetworkConfigItem {
    name?: string;
    subscriptionId?: string;
    gasLane?: string;
    keepersUpdateInterval?: string;
    raffleEntrance?: string;
    callbackGasLimit?: string;
    vrfCoordinatorV2?: sring;
}
