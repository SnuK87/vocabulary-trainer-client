import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { ListComponent } from './list/list.component';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CdkTableModule } from '@angular/cdk';
import { ListtableComponent } from './list/listtable/listtable.component';
import { ListheaderComponent } from './list/listheader/listheader.component';

import { ListService } from './service/list.service';

import { HttpClientModule } from '@angular/common/http';
import { LearnComponent } from './learn/learn.component';
import { SelectlistComponent } from './selectlist/selectlist.component';

@NgModule( {
    declarations: [
        AppComponent,
        NavbarComponent,
        DictionaryComponent,
        ListComponent,
        ListtableComponent,
        ListheaderComponent,
        LearnComponent,
        SelectlistComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
        HttpClientModule,
        RouterModule.forRoot( [
        {path: 'dictionary', component: DictionaryComponent},
        {path: 'list', component: ListComponent},
        {path: 'learn', component: LearnComponent}
        ] )
    ],
    providers: [ListService],
    bootstrap: [AppComponent]
} )
export class AppModule { }
