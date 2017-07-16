import Repository from '../Repository'

export default class TextsRepository extends Repository {
  save ({collection, sequence, course, name, content} = {}) {
    throw new Error('[TextsRepository#save] must be implemented')
  }

  texts () {
    throw new Error('[TextsRepository#texts] must be implemented')
  }
}
