import config from './config'

class TextHandler {
  constructor () {
    this._config = config
    this._map = {}

    this._map['config'] = this._config
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
