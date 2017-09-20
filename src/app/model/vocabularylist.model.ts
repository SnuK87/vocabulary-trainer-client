import {Vocabulary} from './vocabulary.model';

export class VocabularyList {


  public id: string;
  public name: string;
  public vocabularies: Array<Vocabulary> = [];

  constructor(id: string, name: string, vocabularies: Array<Vocabulary>) {
    this.id = id;
    this.name = name;
    this.vocabularies = vocabularies;
  }
}
