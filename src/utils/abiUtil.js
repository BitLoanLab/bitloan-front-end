import CreatNFT from "../../abis/creatNFT.json";
import LoanMarket from "../../abis/LoanMarket.json";
import BLT from "../../abis/BLT.json";
import BLTDeposit from "../../abis/BLTDeposit.json";

const CONTRACTS = {
    CreatNFT:{address:"0x8B99a534AE1698e152d1877991a2bf559465F754",abi:CreatNFT},
    LoanMarket:{address:"0x10eb46681CB3e90942F9976949Ca03a9a60991c2",abi:LoanMarket},
    BLT:{address:"0x3b684916e96e6CF28394F23F559b00Cf9A3fa543",abi:BLT},
    BLTDeposit:{address:"0xFc886f5c2b3A7b5078f6b86cb87761d9888099Ba",abi:BLTDeposit},
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
