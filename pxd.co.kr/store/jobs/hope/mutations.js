export default {
  /**
   * @description 희망업무
   * @param {*} state
   * @param {*} payload String
   */
  updateHopeRole(state, hopeRole) {
    state.role = hopeRole
  },
  updateHopePay(state, hopePay) {
    state.pay = hopePay
  },

  /**
   * @description 임시저장
   * @param {*} state
   * @param {*} payload Object
   */
  setHopeStorage(state, payload) {
    state.role = payload.role
    state.pay = payload.pay
  },
}
