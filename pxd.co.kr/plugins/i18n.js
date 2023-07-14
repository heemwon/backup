import { popClosedAction } from '~/assets/js/header.js'
export default function ({ app }) {
  // onBeforeLanguageSwitch called right before setting a new locale
  // app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup) => {
  //   console.log(oldLocale, newLocale, isInitialSetup)
  // }
  // // onLanguageSwitched called right after a new locale has been set
  // app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
  //   console.log(oldLocale, newLocale)
  //   popClosedAction()
  // }
  app.i18n.onLanguageSwitched = () => {
    popClosedAction()
  }
}
