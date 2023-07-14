export default {
  updateName(state, name) {
    state.name = name
  },
  updateGroup(state, group) {
    state.group = group
  },
  updatePhoto(state, photo) {
    state.photo = photo
  },
  updateCareer(state, career) {
    state.career = career
  },
  updateBirth(state, birth) {
    const prevLength = state.birth.length
    const currentLength = birth.length

    if (prevLength > currentLength) return (state.birth = birth)
    if ((prevLength < currentLength && birth.length === 4) || birth.length === 7)
      return (state.birth = birth + '/')
    state.birth = birth
  },
  updatePhoneFirst(state, phoneFirst) {
    state.phoneFirst = phoneFirst
  },
  updatePhoneSecond(state, phoneSecond) {
    state.phoneSecond = phoneSecond
  },
  updatePhoneThird(state, phoneThird) {
    state.phoneThird = phoneThird
  },
  updateMail(state, mail) {
    state.mail = mail
  },
  updateUrl(state, url) {
    state.url = url
  },
  updatePostCode(state, postcode) {
    state.postcode = postcode
  },
  updateAddress(state, address) {
    state.address = address
  },
  setUserStorage(state, payload) {
    state.address = payload.address
    state.birth = payload.birth
    state.career = payload.career
    state.group = payload.group
    state.mail = payload.mail
    state.name = payload.name
    state.phoneFirst = payload.phoneFirst
    state.phoneSecond = payload.phoneSecond
    state.phoneThird = payload.phoneThird
    state.photo = payload.photo
    state.postcode = payload.postcode
    state.detail = payload.detail
    state.url = payload.url
  },
}
