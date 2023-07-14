import detailChatbot from './detail_chatbot.json'
import robot from './detail_robot.json'
import humanai from './detail_humanai.json'
import connectedcar from './detail_connectedcar.json'
import mobility from './detail_mobility.json'
import digitalcockpit from './detail_digitalcockpit.json'
import happyroom from './detail_happyroom.json'
import reservation from './detail_reservation.json'
import handysoft from './detail_handysoft.json'
import cafe from './detail_cafe.json'
import meatbox from './detail_meatbox.json'
import vux from './detail_vux.json'
import jsu from './detail_jsu.json'
import smartlearning from './detail_smartlearning.json'
import digitalsignage from './detail_digitalsignage.json'
import kb from './detail_kb.json'
import steps from './detail_steps.json'
import wearabledevice from './detail_wearabledevice.json'
import smartbed from './detail_smartbed.json'
import commax from './detail_commax.json'
import powderroom from './detail_powderroom.json'
import ebs from './detail_ebs.json'
import smartneo from './detail_smartneo.json'
import podo from './detail_podo.json'
import socialmedia from './detail_socialmedia.json'
import jeju from './detail_jeju.json'
import hellomuseum from './detail_hellomuseum.json'
import cctv from './detail_cctv.json'
import iptv from './detail_iptv.json'
import korailtalk from './detail_korailtalk.json'
import parttime from './detail_parttime.json'
import theater from './detail_theater.json'
import waterpurifier from './detail_waterpurifier.json'
import mts from './detail_mts.json'
import capital from './detail_capital.json'
import kbmable from './detail_kbmable.json'
import avon from './detail_avon.json'
import kiosk from './detail_kiosk.json'
import rpa from './detail_rpa.json'
import atmUi from './detail_atm_ui.json'
import gsfresh from './detail_gsfresh.json'
import k2Platform from './detail_k2_platform.json'
import globalPromotion from './detail_global_promotion.json'
import jb from './detail_jb.json'

class Works {
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
   * @param { string } id - slug를 이용하여 해당 work를 찾는다.
   * @returns
   */
  getWork(id) {
    return Object.freeze(this._data.get(id))
  }

  /**
   *
   * @param { string } id - slug를 이용하여 다음 work를 찾는다.
   * @returns
   */
  getNext(id) {
    const getCurrentIndex = this.keys.findIndex((w) => w === id)
    const getNextSlug = this.keys[getCurrentIndex + 1]
    return this._data.get(getNextSlug)
  }
}

export const works = new Works(
  new Map([
    // 최신글일수록 상단으로
    jb,
    globalPromotion,
    k2Platform,
    gsfresh,
    atmUi,
    rpa,
    kiosk,
    avon,
    kbmable,
    capital,
    connectedcar,
    cctv,
    happyroom,
    korailtalk,
    humanai,
    mobility,
    cafe,
    reservation,
    jsu,
    meatbox,
    smartlearning,
    powderroom,
    theater,
    commax,
    kb,
    ebs,
    steps,
    smartneo,
    podo,
    smartbed,
    iptv,
    vux,
    socialmedia,
    jeju,
    parttime,
    waterpurifier,
    robot,
    digitalsignage,
    detailChatbot,
    handysoft,
    digitalcockpit,
    wearabledevice,
    hellomuseum,
    mts,
  ]),
)
