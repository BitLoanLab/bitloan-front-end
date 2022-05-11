import CreatNFT from "../../abis/creatNFT.json";
import LoanMarket from "../../abis/LoanMarket.json";
import BLT from "../../abis/BLT.json";
import BLTDeposit from "../../abis/BLTDeposit.json";

const CONTRACTS = {
    CreatNFT:{address:"0xb60AB0c2BE9f4Afb895DF1d3E59F1755B37e2F04",abi:CreatNFT},
    LoanMarket:{address:"0x02Eb73C3B1F1F40c268BDf8E1091E8F003c91d71",abi:LoanMarket},
    BLT:{address:"0x035f017f53d03F6a1208074821e2efaB1500E136",abi:BLT},
    BLTDeposit:{address:"0x775b2ebf696D08ae43D3b49897b05353D499081A",abi:BLTDeposit},
};

function getContractByName(name, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByToken(name, address, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export default {
    CONTRACTS,
    getContractByName,
    getContractByToken,
    getContractAddress
};
