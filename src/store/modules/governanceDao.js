import getContract from '@/abi/index'
const state={
    token:null
}
const mutations = {
    SET_COIN(state,{coinName,value}){
        state[coinName] = value
    }
}

function judgeToken(rootState, address) {
    if (!state.token) state.token = getContract.getContractByToken("GovernanceDao", address, rootState.app.web3)
}

const actions = {
    cgInfo({rootState},address){
        judgeToken(rootState,address)
        console.log(address)
        return new Promise((resolve, reject) => {
            state.token.methods.cgInfo().call().then(res => {
                resolve(res)
            })
        })
    },
    applyParliament({rootState},address){
        judgeToken(rootState,address)
        console.log(state.token)
        return new Promise((resolve, reject) => {
            state.token.methods.applyParliament().send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    endToParliament({rootState},address){
        judgeToken(rootState,address)
        console.log(state.token)
        return new Promise((resolve, reject) => {
            state.token.methods.endToParliament().send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    getApplyUserLength({rootState}, {address, id}){
        judgeToken(rootState,address)
        return new Promise((resolve, reject) => {
            state.token.methods.getApplyUserLength(id).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    parliamentApplyRecords({rootState}, {address,id,idx}){
        judgeToken(rootState,address)
        return new Promise((resolve, reject) => {
            state.token.methods.parliamentApplyRecords(id,idx).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    startVote({rootState}, address){
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.startVote().send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    voteToParliament({rootState}, {address,user,tickets}){
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.voteToParliament(user,tickets).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    comGovApplyToken({rootState}, {address, stage, day, applyAmount, description}){
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.comGovApplyToken(stage, day, applyAmount, description).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    tokenProposals({rootState}, {address,idx}){
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.tokenProposals(idx).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    getParliamentLength({rootState}, {address}){
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.getParliamentLength().call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    getParliamentByIndex({rootState}, {address,idx}){
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.getParliamentByIndex(idx).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    tokenProposalCount({rootState}, {address}){
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.tokenProposalCount().call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    parliamentsVoteProposal({rootState}, {address, stage, id}){
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.parliamentsVoteProposal(id, stage).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}

