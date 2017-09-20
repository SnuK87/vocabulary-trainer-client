import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {ListService} from '../service/list.service';
import {VocabularyList} from '../model/vocabularylist.model';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-selectlist',
  templateUrl: './selectlist.component.html',
  styleUrls: ['./selectlist.component.css']
})
export class SelectlistComponent implements OnInit, OnDestroy {

  lists$: Observable<VocabularyList[]>;
  subscription: Subscription;
  selectedList: VocabularyList;

  lists: Array<VocabularyList>;

  // @Output()
  // changeEvent = new EventEmitter<string>();

  constructor(private listService: ListService) {

  }

  onChange(index: number) {
    console.log('onCHange');
    // console.log(this.listService.getById(id));
    this.listService.setSelectedList(this.lists[index]);
    // this.changeEvent.emit('changed');
  }


  ngOnInit() {
    console.log('onInit');
    this.lists = this.listService.getLists();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
