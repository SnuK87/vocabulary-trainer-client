import {Component, Input, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Vocabulary} from '../../model/vocabulary.model';
import {VocabularyList} from '../../model/vocabularylist.model';
import {ListService} from '../../service/list.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-listtable',
  templateUrl: './listtable.component.html',
  styleUrls: ['./listtable.component.css']
})
export class ListtableComponent implements OnInit {


  // @Input()
  // selected: Array<Vocabulary>;

  selectedList: VocabularyList;

  selectedLanguage: string;

  constructor(private listService: ListService) {
    this.selectedLanguage = 'english';
  }

  ngOnInit() {
    console.log('onInit');
    this.listService.selectedList.subscribe(list => this.selectedList = list);
  }
}
