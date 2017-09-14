export class Vocabulary {

  public id: number;
  public english: string;
  public korean: string;
  public pronunciation: string;

  constructor(id: number, english: string, korean: string, pronunciation: string) {
    this.id = id;
    this.english = english;
    this.korean = korean;
    this.pronunciation = pronunciation;
  }
}
