import sha256 from 'crypto-js/sha256'
import { enc } from 'crypto-js'

export function passwordCheck(data) {
  const expected = sha256(data).toString(enc.Hex)
  if (expected === process.env.password) {
    return true
  } else {
    return false
  }
}
