import sha256 from 'crypto-js/sha256'
import { enc } from 'crypto-js'

describe('CryptoJS', () => {
  test('패스워드 비교', () => {
    const expected = sha256('pxd2020').toString(enc.Hex)
    expect(expected).toBe(
      '353a8e9765c88e13c4e42924307589d862b331c13e961afc19f49ea973860918',
    )
  })
})
