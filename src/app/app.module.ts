import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';

import {DictionaryComponent} from './dictionary/dictionary.component';
import {ListComponent} from './list/list.component';

import {RouterModule, Routes} from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ListtableComponent} from './list/listtable/listtable.component';

import {ListService} from './service/list.service';

import {DictionaryService} from './service/dictionary.service';

import {HttpClientModule} from '@angular/common/http';
import {SelectlistComponent} from './selectlist/selectlist.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DictionaryComponent,
    ListComponent,
    ListtableComponent,
    SelectlistComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'dictionary', component: DictionaryComponent},
      {path: 'list', component: ListComponent}
    ])
  ],
  providers: [ListService, DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
