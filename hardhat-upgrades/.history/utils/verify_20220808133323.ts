import { run } from "hardhat";

const verify = async (contractAddress: string, args: any[]) => {
    console.log("Verifying.................");
    try{
        await run("verify:verify",{
            address:contractAddress,
            constructorArguments:args
        })

    }catch(error:any){
        if(error.message.toLowerCase().includes(""))
        
        console.error(error)
    }
};

export default verify;
