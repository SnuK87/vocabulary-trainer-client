import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Vocabulary } from '../../model/vocabulary.model';
import { ListService } from '../../service/list.service';
import { Subscription } from 'rxjs/Subscription';


@Component( {
    selector: 'app-listtable',
    templateUrl: './listtable.component.html',
    styleUrls: ['./listtable.component.css']
} )
export class ListtableComponent implements OnInit {

    //    exampleDatabase = new ExampleDatabase();
    //    dataSource: ExampleDataSource = null;

    constructor() { }

    ngOnInit() {
        //        this.dataSource = new ExampleDataSource();
    }
}

// export class ExampleDatabase {
//    /** Stream that emits whenever the data has been modified. */
//    dataChange: BehaviorSubject<Vocabulary[]> = new BehaviorSubject<Vocabulary[]>( [] );
//
//    constructor() {
//        for ( let i = 0; i < 2; i++ ) {
//            this.addUser();
//        }
//    }
//
//    get data(): Vocabulary[] {
//        return this.dataChange.value;
//    }
//
//    addUser() {
//        const copiedData = this.data.slice();
//        copiedData.push( new Vocabulary( 1, 'Eng', 'Kor', 'Pro' ) );
//        this.dataChange.next( copiedData );
//    }
// }


// export class ExampleDataSource extends DataSource<any> {
//
//    subscription: Subscription;
//    selectedList: VocabularyList;
//
//    constructor( private listService: ListService ) {
//        super();
//
//        this.subscription = this.listService.getSelectedList().subscribe( selectedList => { this.selectedList = selectedList; } );
//
//    }
//
//    connect(): Observable<Vocabulary[]> {
//        return this.listService.get
//    }
//
//    disconnect() { }
// }
