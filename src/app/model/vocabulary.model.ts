export class Vocabulary {

    public id: number;
    public english: string;
    public korean: string;
    public pronounciation: string;

    constructor( id: number, english: string , korean: string, pronounciation: string) {
        this.id = id;
        this.english = english;
        this.korean = korean;
        this.pronounciation = pronounciation;
    }
}
