export const GOOGLE_STORAGE =
  'https://storage.googleapis.com/pxd-dev-server.appspot.com/images/img/'

export const GOOGLE_STORAGE_GIF =
  'https://storage.googleapis.com/pxd-dev-server.appspot.com/images/gif/'

export const GOOGLE_STORAGE_ICO =
  'https://storage.googleapis.com/pxd-dev-server.appspot.com/images/ico/'

export function hasLocalStorageByKey(key) {
  const result = localStorage.getItem(key)
  if (result === null) return false
  return true
}
