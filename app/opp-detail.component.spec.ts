import { OppDetailComponent } from './opp-detail.component';
import { Opp } from './opp';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('OppDetailComponent', function () {
  let de: DebugElement;
  let comp: OppDetailComponent;
  let fixture: ComponentFixture<OppDetailComponent>;

  // beforeEach(async(() => {
  // }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ OppDetailComponent ],
    });
    fixture = TestBed.createComponent(OppDetailComponent);
    comp = fixture.componentInstance;
    comp.opp = {
      id: 123,
      plaintextDescription: 'plaintextdesc',
      title: 'testtitle',
      description: 'testdesc',
      vmUrl: 'http://www.volunteermatch.org/search/opp1234.jsp',
      location: {
        city: 'SF'
      }
    };
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h2> text', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h2'));
    const h2 = de.nativeElement;
    console.log(h2.innerText);
    expect(h2.innerText).toMatch(/123 details/i,
      '<h2> should say something about details');
  });
});
