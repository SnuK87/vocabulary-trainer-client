import {Component, OnInit, OnDestroy} from '@angular/core';
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

  constructor(private listService: ListService) {
    this.lists$ = this.listService.getLists();
    this.subscription = this.listService.getSelectedList().subscribe(selectedList => {
      this.selectedList = selectedList;
    });
  }

  onChange() {
    console.log('onCHange');
    this.listService.setSelectedList(this.selectedList);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
