import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CalculaHora } from './calculahora.page';

describe('Tab1Page', () => {
  let component: CalculaHora;
  let fixture: ComponentFixture<CalculaHora>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculaHora],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculaHora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
