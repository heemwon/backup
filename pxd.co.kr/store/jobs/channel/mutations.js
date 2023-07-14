export default {
  /**
   * @description 채용정보 경로
   * @param {*} state
   * @param {*} payload String
   */
  updateChannelRadio(state, channelValue) {
    state.channel_value = channelValue
  },
  updateChannelText(state, channelEtcValue) {
    state.channel_etc = channelEtcValue
  },
  
  /**
   * @description 임시저장
   * @param {*} state
   * @param {*} payload String
   */
  setChannelStorage(state, payload) {
    state.channel_value = payload.channel_value
    state.channel_etc = payload.channel_etc
  },
}
