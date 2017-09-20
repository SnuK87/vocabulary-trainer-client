import {Translation} from './translation.model';

export class Vocabulary {

  public id: number;
  public korean: string;
  public pronunciation: string;
  public translations: Array<Translation>;

  constructor(id: number, korean: string, pronunciation: string, translations: Array<Translation>) {
    this.id = id;
    this.korean = korean;
    this.pronunciation = pronunciation;
    this.translations = translations;
  }
}
