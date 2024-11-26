import { config } from '@vue/test-utils'

config.global.stubs = {
  // Isole e evite efeitos colaterais dos componentes
  CurrencySelector: true,
}
