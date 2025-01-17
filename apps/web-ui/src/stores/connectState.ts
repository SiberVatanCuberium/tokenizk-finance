import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConnectState = defineStore('connectState', () => {

  // Auro Wallet 连接状态 管理
  let cnState = false

  ref(cnState)

  function setConnectState() {
    return cnState
  }

  return {
    cnState, setConnectState
  }

})