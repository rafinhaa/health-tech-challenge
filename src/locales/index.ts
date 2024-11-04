import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import resources, { Locales, Namespace } from "./resources"

const defaultNS: Namespace = "translate"
i18n.use(initReactI18next).init({
  lng: Locales.ptBR,
  fallbackLng: Locales.ptBR,
  resources,
  defaultNS,
  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false,
  },
})
export { resources, Locales, defaultNS }
export default i18n
