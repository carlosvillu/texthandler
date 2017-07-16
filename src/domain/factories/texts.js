import uuid from 'uuid/v4'
import config from '../config'

import IDBTextsRepository from '../texts/IDBTextsRepository'

import TextEntity from '../texts/TextEntity'

import UploadTextsUseCase from '../texts/UploadTextsUseCase'
import ListTextsUseCase from '../texts/ListTextsUseCase'

import TextsMapper from '../texts/TextsMapper'

export default class TextsFactory {
  static iDBTextsRepository = () =>
    new IDBTextsRepository({
      config,
      uuid,
      textEntityFactory: TextsFactory.textEntity
    })

  static textEntity = ({collection, sequence, course, name, content, raw, id}) =>
    new TextEntity({collection, sequence, course, name, content, raw, id})

  static uploadTextsUseCase = () =>
    new UploadTextsUseCase({
      repository: TextsFactory.iDBTextsRepository(),
      mapper: TextsFactory.textsMapper()
    })

  static listTextsUseCase = () =>
    new ListTextsUseCase({
      repository: TextsFactory.iDBTextsRepository()
    })

  static textsMapper = () =>
    new TextsMapper()
}
