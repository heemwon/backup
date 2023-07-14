import design from './design.json'
import navigation from './navigation.json'
import uxfuture from './uxfuture.json'
import pxdinterface from './interface.json'
import choroplethmap from './choroplethmap.json'
import datamodeling from './datamodeling.json'
import masterclass2019 from './masterclass2019.json'
import london2019 from './london2019.json'
import pxdguxdesign from './pxdguxdesign.json'

class Stories {
  /**
   *
   * @param {Map<string, object>} data - data는 Map 형태로 들어온다.
   */
  constructor(data) {
    this._data = data
  }

  // 전체 데이터 값들을 array 형태로 반환한다.
  get values() {
    return Array.from(this._data.values())
  }

  get keys() {
    return [...this._data.keys()]
  }

  /**
   *
   * @param {string} id - slug를 이용하여 해당 work를 찾는다.
   * @returns
   */
  getWork(id) {
    return Object.freeze(this._data.get(id))
  }

  /**
   *
   * @param {string} id - slug를 이용하여 다음 work를 찾는다.
   * @returns
   */
  getNext(id) {
    const getCurrentIndex = this.keys.findIndex((w) => w === id)
    const wrap = []
    for (let i = 1; i < 4; i++) {
      let index = getCurrentIndex + i
      if (index === 9) {
        index = 1
      } else if (index === 10) {
        index = 2
      } else if (index === 11) {
        index = 3
      } else {
        // eslint-disable-next-line no-unused-expressions
        index
      }
      const getNextSlug = this.keys[index]
      wrap.push(this._data.get(getNextSlug))
    }
    return wrap
  }
}

export const stories = new Stories(
  new Map([
    design,
    navigation,
    uxfuture,
    pxdinterface,
    choroplethmap,
    datamodeling,
    masterclass2019,
    london2019,
    pxdguxdesign,
  ]),
)
