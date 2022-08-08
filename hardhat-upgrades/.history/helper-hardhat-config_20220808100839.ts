export interface NetworkConfigItem {
    name?: string;
    subscriptionId?: string;
    gasLane?: string;
    keepersUpdateInterval?: string;
    raffleEntrance?: string;
    callbackGasLimit?: string;
    vrfCoordinatorV2?: string;
}

export interface networkConfigInfo {
    [key: number]: NetworkConfigItem;
}
