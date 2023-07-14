export default function ({ route, store }) {
  const adress = route.path.split('/')[1]
  if (adress === 'en') {
    store.commit('languageCheck', 'en')
  }
}
