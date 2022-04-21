import getContract from '@/abi/index'

const state = {
    token: null,
    daoAddress: null
}
const mutations = {
    SET_DAOADDRESS(state, address) {
        state.daoAddress = address
    }
}

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName("DAOFactory", rootState.app.web3)
}

const actions = {
    createDao({rootState, commit}, param) {
        console.log(param)
        let {parliamentCount,approveCount,workDays,applyTime,applyMemberCount,depositCount,voteInterval,publicityTime,name} = param.inGov
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.createDao(parliamentCount,approveCount,workDays,applyTime,applyMemberCount,depositCount,voteInterval,publicityTime,name,param.govToken).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    getDaoCount({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve) => {
            state.token.methods.getDaoCount().call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    daos({rootState}, index) {
        judgeToken(rootState)
        return new Promise((resolve) => {
            state.token.methods.daos( index).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    getUserDaoLength({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve) => {
            state.token.methods.getUserDaoLength(rootState.app.account).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    getUserDaoByIndex({rootState}, index) {
        judgeToken(rootState)
        return new Promise((resolve) => {
            state.token.methods.getUserDaoByIndex(rootState.app.account, index).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    joinDao({rootState}, daoAddress) {
        judgeToken(rootState)
        return new Promise((resolve) => {
            state.token.methods.joinDao(daoAddress).send({
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

