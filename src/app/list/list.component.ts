import {Component, OnInit} from '@angular/core';
import {ListService} from '../service/list.service';
import {VocabularyList} from '../model/vocabularylist.model';
import {Observable} from 'rxjs/Observable';
import {Vocabulary} from '../model/vocabulary.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  // selectedList: Observable<VocabularyList>;
  selected: VocabularyList;

  constructor(private listService: ListService) {

  }

  ngOnInit() {
    console.log('onInit');
    this.listService.selectedList.subscribe(list => this.selected = list);
  }

  // getSelectedList() {
  //   console.log('event triggered');
  //   this.selectedList = this.listService.getSelectedList();
  // }

  // getSelected() {
  //   console.log('event triggered');
  //   this.selected = this.listService.getVocs();
  // }

}
