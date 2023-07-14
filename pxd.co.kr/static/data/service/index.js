import detail01 from './detail_01.json'
import detail02 from './detail_02.json'
import detail03 from './detail_03.json'
import detail04 from './detail_04.json'
import detail05 from './detail_05.json'

class Services {
  /**
   *
   * @param { Map<string, object> } data - data는 Map 형태로 들어온다.
   */
  constructor(data) {
    this._data = data
  }

  // 전체 데이터 값들을 array 형태로 반환한다.
  get values() {
    return [...this._data.values()]
  }

  get keys() {
    return [...this._data.keys()]
  }

  /**
   *
   * @param { string } id - slug를 이용하여 해당 service를 찾는다.
   * @returns
   */
  getService(id) {
    return Object.freeze(this._data.get(id))
  }
}

export const services = new Services(
  new Map([detail01, detail02, detail03, detail04, detail05]),
)
