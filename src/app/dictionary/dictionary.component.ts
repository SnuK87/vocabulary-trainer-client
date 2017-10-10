import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {Observable} from "rxjs/Observable";
import {Vocabulary} from "../model/vocabulary.model";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  vocabularies$: Observable<Vocabulary[]>;

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
    this.vocabularies$ = this.dictionaryService.getVocabularies()
  }
}
