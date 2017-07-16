import Mapper from '../Mapper'

export default class TextsMapper extends Mapper {
  constructor () {
    super()
    this._file = {}
  }

  file = file => {
    this._file = file
    return this
  }

  _spaceAndStop = raw => {}
  _ato = raw => {}
  _ats = raw => {}
  _stop = raw => {}
  _fullStop = raw => {}
  _ellipsis = raw => {}

  map ({content, name} = {}) {
    return {content, name, raw: content}
  }
}
