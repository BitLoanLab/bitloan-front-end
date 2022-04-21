import getContract from '@/abi/index'

const state = {
    userId: null,
    joinNodeId:0,
    nickName:'',
    referrerAddress: '',
    referrerId: 0,
    token: null,
    isRegister:false,
    navArr:[],//头部菜单
    navName:'',
    country:'',
    city:'',
    area:'',
    role:0,
    myInvitationArr:[],//我邀请的人
}

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('Rainbow', rootState.app.web3)
}

const mutations = {
    SET_ACCOUNTS: (state, user) => {
        let {userId, referrerAddress,isRegister, nickName, referrerId , country, city, area, joinNodeId,role} = user;
        state.userId = userId
        state.referrerAddress = referrerAddress
        state.referrerId = referrerId
        state.nickName = nickName
        state.country = country
        state.city = city
        state.area = area
        state.isRegister = isRegister
        state.joinNodeId = joinNodeId
        state.role = role
    },
    SET_NAVARR: (state, arr) => {
        state.navArr = arr
    },
    SET_NAVNAME: (state, name) => {
        state.navName = name
    },
    SET_ISREGISTER: (state, data) => {
        state.isRegister = data
    },
    SET_MYINVITATIONARR: (state, arr) => {
        state.myInvitationArr = arr
    },
}


const actions = {
    getUserSize({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.userSize().call((err) => {
                if (err) {
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }
            }).then(res=>{
                resolve(res);
            })
        });
    },
    async getUser({rootState}, userAddress) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.addressUsers(userAddress).call((err) => {
                if (err) {
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }
            }).then(res=>{
                resolve(res);
            })
        });

    },
    getMyRefers({rootState, dispatch, commit}){ //获取我邀请的人
        let myId = rootState.rainbow.userId
        judgeToken(rootState)

        let userInfoArr = []
        state.token.methods.getChildsLength(myId).call().then(async length=>{
            for (let i=0;i<length;i++){
                await state.token.methods.getChildByIndex(myId, i).call().then(async userAddress=>{
                    await dispatch("getUser", userAddress).then(async userInfo=>{
                        await dispatch("consensus/getSomeoneData",userAddress,{root:true}).then(async amount=>{
                            await dispatch("consensus/getExchangeRatio",userAddress,{root:true}).then(async ratio=>{
                                userInfoArr.push({
                                    ratio,
                                    amount,
                                    ...userInfo
                                })
                            })
                        })
                    })
                })
            }
            console.log(userInfoArr)
            commit("SET_MYINVITATIONARR",userInfoArr)
        })
    },
    getReferrer({rootState}, referrerId) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.referrerMaps(referrerId).call((err) => {
                if (err) {
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }
            }).then(res => {
                if (!res) {
                    reject('no referrer')
                }
                state.token.methods.addressUsers(res).call((err) => {
                    if (err) {
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    }
                }).then(res => {
                    resolve(res);
                });
            })
        });

    },
    async getMyUser({dispatch, commit, rootState}) {
        judgeToken(rootState)
        await dispatch('getUser', rootState.app.account).then(async (res) => {
            if(res.id==0){ //未注册
                commit("SET_ISREGISTER",false)
                return
            }
            await state.token.methods.addressUsers(res.addr).call().then(address=>{
                commit('SET_ACCOUNTS', {
                    userId: res.id,
                    nickName: res.nickname,
                    area:res.area,
                    country:res.country,
                    city:res.city,
                    referrerAddress: address,
                    referrerId: res.addr,
                    joinNodeId:res.nodeId,
                    isRegister:true,
                    role:res.role,//身份
                });
            })
        });
    },
    register({rootState}, {referrerId,nickname, cityNode}) {
        cityNode = cityNode?cityNode:0
        let from = rootState.app.account
        judgeToken(rootState)
        let arg = [parseInt(referrerId), nickname, parseInt(cityNode)]
        return new Promise((resolve,reject) => {
            state.token.methods.register(...arg).estimateGas({
                from,
            }).then(gas => {
                state.token.methods.register(...arg).send({
                    from,
                    gas: parseInt(gas * 1.2)
                }).on('err',(err,res)=>{
                    reject(err,res)
                }).then((res) => {
                    resolve(res);
                })
            }).catch(function(err){
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            });
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
