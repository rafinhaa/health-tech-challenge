import { default as ptBR } from "@/locales/resources/ptBR/index.json"

enum Locales {
  "ptBR" = "ptBR",
}

const resources = {
  [Locales.ptBR]: {
    translate: ptBR,
  },
}

type Namespace = keyof typeof resources.ptBR

export default resources
export { Locales, Namespace }
