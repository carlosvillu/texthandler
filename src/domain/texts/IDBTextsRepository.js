import TextsRepository from './TextsRepository'

export default class IDBTextsRepository extends TextsRepository {
  static TEXTS_KEY = 'texts'

  constructor ({config, uuid, textEntityFactory} = {}) {
    super()

    this._config = config
    this._uuid = uuid
    this._textEntityFactory = textEntityFactory
  }

  async save ({collection, sequence, course, name, content, raw} = {}) {
    const idb = this._config.get('idb')
    const id = this._uuid()
    const prevTexts = (await idb.get(IDBTextsRepository.TEXTS_KEY) || {})
    const doc = {collection, sequence, course, name, content, raw, id}

    await idb.set(IDBTextsRepository.TEXTS_KEY, {...prevTexts, [id]: doc})

    return this._textEntityFactory(doc)
  }

  async texts () {
    const idb = this._config.get('idb')
    const texts = (await idb.get(IDBTextsRepository.TEXTS_KEY) || {})

    return Object.values(texts).map(this._textEntityFactory)
  }
}
