import { run } from "hardhat";

const verify = async (contractAddress: string, args: any[]) => {
    console.log("Verifying.................");
    try{
        await run("veify:verify")
    }catch(error){

    }
};

export default verify;
