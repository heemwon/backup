export default {
  /**
   * @description 약관동의
   * @param {*} state
   * @param {*} payload Boolean
   */
  updateAgreeTrust(state, trust) {
    state.trust = trust
  },
  updateAgreePrivacy(state, privacy) {
    state.privacy = privacy
  },
}
