import { instaApi } from '~/api'

export const state = () => ({
  language: 'ko',
  isMobile: false,
  insta: [],
  workMiddleware: true,
})

export const mutations = {
  languageCheck(state, languageset) {
    state.language = languageset
  },
  // pc, mobile check
  deviceCheck(state, windowWidth) {
    if (windowWidth < 769) {
      state.isMobile = true
    } else {
      state.isMobile = false
    }
  },
  saveInstaList(state, item) {
    state.insta = item
  },
  updateMiddleware(state) {
    state.workMiddleware = false
  },
}

export const actions = {
  async instaFeed(context) {
    const response = await instaApi()
    if (response === undefined) return
    if (response.status === 200) {
      const list = response.data.data
      context.commit('saveInstaList', list)
    }
  },
}
