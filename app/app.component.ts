import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Opp } from './opp';
import { OppService } from './opp.service';

@Component({
  moduleId: module.id,
  selector: 'opp-search',
  template: `<h1>Look at these great opportunities</h1>
    <ul class="opps">
      <li *ngFor="let opp of opps" (click)="onSelect(opp)">
        <span class="badge">{{opp.id}}</span> {{opp.title}}
      </li>
    </ul>
    <opp-detail [opp]="selectedOpp"></opp-detail>`,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .opps {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .opps li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .opps li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .opps li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .opps .text {
      position: relative;
      top: -3px;
    }
    .opps .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent  implements OnInit {

  opps : Opp[];
  selectedOpp : Opp;

  constructor(private oppService: OppService) { }

  ngOnInit(): void {
    this.getOpps();
  }

  getOpps(): void {
    this.oppService.getOpps().then(opps => this.opps = opps);
  }

  onSelect(opp : Opp): void {
    this.selectedOpp = opp;
  }

}
