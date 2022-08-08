import { run } from "hardhat";

const verify = async (contractAddress: string, args: any[]) => {
    console.log("Verifying.................");
    try{
        await run("verify:verify",{
            
        })

    }catch(error){

    }
};

export default verify;
