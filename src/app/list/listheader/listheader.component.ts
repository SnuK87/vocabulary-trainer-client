import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ListService } from '../../service/list.service';
import { VocabularyList } from '../../model/vocabularylist.model';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';


@Component( {
    selector: 'app-listheader',
    templateUrl: './listheader.component.html',
    styleUrls: ['./listheader.component.css']
} )
export class ListheaderComponent implements OnInit {

    // TODO: name available
    public newListControl = new FormControl( '', [
        Validators.required,
        Validators.minLength( 3 )
    ] )


    constructor( private listService: ListService ) {
    }

    ngOnInit() {

    }
}
