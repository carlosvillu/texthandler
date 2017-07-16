import UseCase from '../UseCase'

// https://stackoverflow.com/a/41115086
const concat = list => Array.prototype.concat.bind(list)
const promiseConcat = f => x => f().then(concat(x))
const promiseReduce = (acc, x) => acc.then(promiseConcat(x))
const serial = funcs => funcs.reduce(promiseReduce, Promise.resolve([]))

class UploadTextsUseCase extends UseCase {
  constructor ({repository, mapper}) {
    super()

    this._repository = repository
    this._mapper = mapper
  }

  async execute ({collection, sequence, course, files} = {}) {
    return await serial(
      files
        .map(this._mapper.map.bind(this._mapper))
        .map(
          ({name, content, raw}) => () => this._repository.save({collection, sequence, course, name, content, raw})
        )
    )
    .then(textsEntities => textsEntities.map(textEntity => textEntity.toJSON()))
    .catch(console.log) // eslint-disable-line
  }
}

export default UploadTextsUseCase
