import UseCase from '../UseCase'

export default class ListTextsUseCase extends UseCase {
  constructor ({repository} = {}) {
    super()

    this._repository = repository
  }

  execute () {
    return this._repository.texts().then(texts => texts.map(text => text.toJSON()))
  }
}
