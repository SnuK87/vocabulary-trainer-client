import {Injectable} from '@angular/core';
import {VocabularyList} from '../model/vocabularylist.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs/Subscription';
import {Vocabulary} from '../model/vocabulary.model';



@Injectable()
export class ListService {

  // TODO: lists needed? BehaviorSubject or Subject? => remove import

  public lists: Array<VocabularyList> = [];
  selectedList: BehaviorSubject<VocabularyList>;


  api_uri = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) {
    const dummy = new VocabularyList('test', 'test', []);
    this.selectedList = new BehaviorSubject(dummy);
    this.fetchLists();
  }

  getLists(): Array<VocabularyList> {
    return this.lists;
  }

  fetchLists() {
    console.log('fetching...');
    const test: Observable<VocabularyList[]> = this.http.get(this.api_uri);

    test.subscribe(lists => {
      lists.forEach(list => {
        this.lists.push(list);
      });

      // this.setSelectedList(this.lists[0]);
      this.selectedList.next(this.lists[0]);
    });

  }


  setSelectedList(list: VocabularyList) {
    console.log('set selected list');
    this.selectedList.next(list);
  }
}
