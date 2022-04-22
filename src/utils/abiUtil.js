import CreatNFT from "../../abis/creatNFT.json";
import LoanMarket from "../../abis/LoanMarket.json";
import BLT from "../../abis/BLT.json";
import BLTDeposit from "../../abis/BLTDeposit.json";

const CONTRACTS = {
    CreatNFT:{address:"0x9De99D255A2B84959F94397eD2F50Ab24166dC82",abi:CreatNFT},
    LoanMarket:{address:"0x765c17461712236d0ba74e259F561cDC520D8148",abi:LoanMarket},
    BLT:{address:"0x0E2cEA088cCD67F2b904AF4ae6aAa727e397AF8F",abi:BLT},
    BLTDeposit:{address:"0x9De99D255A2B84959F94397eD2F50Ab24166dC82",abi:BLTDeposit},
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
