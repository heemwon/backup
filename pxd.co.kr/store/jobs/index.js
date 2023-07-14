import axios from 'axios'
import { hasLocalStorageByKey } from '../../static/utils'
import { getLocation } from '~/api'

const location = getLocation()

export const state = () => ({
  lists: [],
})

export const mutations = {
  getLists(state, items) {
    state.lists = items
  },
}

export const actions = {
  getLists(context) {
    axios
      .get(`${location}/boardListAll/`)
      .then((res) => {
        const lists = res.data.result.boardList
        context.commit('getLists', lists)
        if (!hasLocalStorageByKey('recruitList'))
          localStorage.setItem('recruitList', JSON.stringify(lists))
      })
      .catch((err) => console.log('err', err))
  },
}
