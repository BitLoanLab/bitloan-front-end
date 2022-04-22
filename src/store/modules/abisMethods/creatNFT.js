
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('creatNFT', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
 const actions = { 
admin ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.admin().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
creat ({rootState},{ to,month,value,name }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.creat(to,month,value,name).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.creat(to,month,value,name).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
			})
			},
initialize ({rootState},{ _token_20,token_21 }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.initialize(_token_20,token_21).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.initialize(_token_20,token_21).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
			})
			},
token_20_ ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.token_20_().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
withdraw ({rootState},{ tokenId }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.withdraw(tokenId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.withdraw(tokenId).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
			})
			},
}
			export default {
			namespaced: true,
			mutations,
			state,
			actions
		}
	