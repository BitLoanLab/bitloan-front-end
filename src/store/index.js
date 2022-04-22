import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from "./modules/app";
import BLT from "./modules/abisMethods/BLT"
import BLTDeposit from "./modules/abisMethods/BLTDeposit"
import creatNFT from "./modules/abisMethods/creatNFT"
import LoanMarket from "./modules/abisMethods/LoanMarket"

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    app,
    BLT,
    BLTDeposit,
    creatNFT,
    LoanMarket,

  }
})
