import config from './config'

import TextsFactory from './factories/texts'

class TextHandler {
  constructor () {
    this._config = config
    this._map = {}

    this._map['config'] = this._config

    this._map['upload_texts_use_case'] = TextsFactory.uploadTextsUseCase()
    this._map['list_texts_use_case'] = TextsFactory.listTextsUseCase()
  }

  get (key) {
    return this._map[key] ? this._map[key]
                          : {execute: () => Promise.reject(new Error(`[TextHandler#get] ${key} not defined`))}
  }

  // Export all the use cases
  get useCases () { return this._map }

  config (key, value) {
    this._config.set(key, value)
    return this
  }
}

export default TextHandler
