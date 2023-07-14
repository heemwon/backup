import axios from 'axios'

export  function instaApi() {
  return axios.get(
    'https://graph.instagram.com/me/media?access_token=' +
      process.env.instaToken +
      '&fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp',
  ).catch((err) => console.log(err))
}

export function getLocation() {
  let testMode
  if (process.browser) {
    if (window.location.hostname === 'localhost') {
      testMode = true
    } else {
      testMode = false
    }
  }

  const API_URL = testMode
    ? 'http://localhost:4000'
    : 'https://proxy.pxd.systems/pxd-recruitment'

  return API_URL
  // return axios.get(`${API_URL}/boardListAll/`)
}
