import { Injectable } from '@angular/core';
import { VocabularyList } from '../model/vocabularylist.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ListService {

    // TODO: lists needed? BehaviorSubject or Subject? => remove import

    //    public lists: Array<VocabularyList>;
    private selectedList: BehaviorSubject<VocabularyList> = new BehaviorSubject<VocabularyList>( null );

    api_uri = 'http://localhost:8080/lists';

    constructor( private http: HttpClient ) {
        //        this.lists = [];
    }

    getLists(): Observable<VocabularyList[]> {
        return this.http.get( this.api_uri );
    }

    getSelectedList(): Observable<VocabularyList> {
        return this.selectedList.asObservable();
    }

    setSelectedList( list: VocabularyList ) {
        this.selectedList.next( list );
    }
}
