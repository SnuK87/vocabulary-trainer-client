import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public activeLink = 0;


}
