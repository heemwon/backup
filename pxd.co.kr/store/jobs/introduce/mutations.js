export default {
  /**
   * @description 자기소개, 입사 후 목표, 뽑아야 하는 이유, 기타
   * @param {*} state
   * @param {*} payload String
   */
  updateMyself(state, myself) {
    state.myself = myself
  },
  updateAim(state, aim) {
    state.aim = aim
  },
  updateWhy(state, why) {
    state.why = why
  },
  updateEtc(state, etc) {
    state.etc = etc
  },

  /**
   * @description 임시저장
   * @param {*} state
   * @param {*} payload String
   */
  setIntroduceStorage(state, payload) {
    state.myself = payload.myself
    state.aim = payload.aim
    state.why = payload.why
    state.etc = payload.etc
  },
}
