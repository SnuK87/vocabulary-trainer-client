import {Vocabulary} from './vocabulary.model';

export class VocabularyList {


  public name: string;
  public vocabularies: Array<Vocabulary> = [];

  constructor(name: string, vocabularies: Array<Vocabulary>) {
    this.name = name;
    this.vocabularies = vocabularies;
  }
}
