import { Component, Input } from '@angular/core';
import { Opp } from './opp';

@Component({
  moduleId: module.id,
  selector: 'opp-detail',
  template: `
  <div *ngIf="opp">
    <h2 class="h2">{{opp.id}} details!</h2>
    <div><label>id: </label>{{opp.id}}</div>
    <div>title: {{opp.title}}</div>
    <div>Description: {{opp.plaintextDescription}}</div>
    <div><a href="{{opp.vmUrl}}">Sign Up</a></div>
    <div>Location: {{opp.location.city}}</div>
  </div>
  `
})

export class OppDetailComponent {
  @Input()
  opp: Opp;
}

