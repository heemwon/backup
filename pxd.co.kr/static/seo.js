import { GOOGLE_STORAGE } from './utils.js'
export function makeMeta(seoMeta) {
  const { title, description, url, image } = seoMeta;
  return [
    {
      property: 'title',
      content: title,
    },
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    { 
      property: 'og:image', 
      content: 
        image === undefined
        ? 'https://storage.googleapis.com/pxd-dev-server.appspot.com/images/logo_og.png'
        : GOOGLE_STORAGE + image,
    },
    { 
      property: 'og:url', 
      content: 
        url === undefined
        ? 'http://www.pxd.co.kr'
        : `http://www.pxd.co.kr${url}`,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      property: 'twitter:description',
      content: description,
    },
    { 
      property: 'twitter:image', 
      content: 
        image === undefined
        ? 'https://storage.googleapis.com/pxd-dev-server.appspot.com/images/logo_og.png'
        : GOOGLE_STORAGE + image,
    },
    { 
      property: 'twitter:url', 
      content: 
        url === undefined
        ? 'http://www.pxd.co.kr'
        : `http://www.pxd.co.kr${url}`,
    },
  ]
}