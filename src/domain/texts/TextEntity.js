import Entity from '../Entity'

export default class TextEntity extends Entity {
  constructor ({collection, sequence, course, name, content, raw, id} = {}) {
    super()

    this._id = id
    this._collection = collection
    this._sequence = sequence
    this._course = course
    this._name = name
    this._content = content
    this._raw = raw
  }

  toJSON () {
    return {
      id: this._id,
      collection: this._collection,
      sequence: this._sequence,
      course: this._course,
      name: this._name,
      content: this._content,
      raw: this._raw
    }
  }
}
