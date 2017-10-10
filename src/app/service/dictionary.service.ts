import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Vocabulary} from "../model/vocabulary.model";

@Injectable()
export class DictionaryService {

  api_uri = 'http://localhost:8080/vocabularies';

  vocabularies: Observable<Vocabulary[]>;

  constructor(private http: HttpClient) {

    this.vocabularies = this.http.get(this.api_uri);
  }

  getVocabularies(): Observable<Vocabulary[]> {
    return this.vocabularies;
  }

}
