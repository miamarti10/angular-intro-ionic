import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NbaPage } from './nba.page';

describe('NbaPage', () => {
  let component: NbaPage;
  let fixture: ComponentFixture<NbaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
