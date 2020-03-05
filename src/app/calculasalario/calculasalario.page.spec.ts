import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CalculaSalarioPage } from './calculasalario.page';

describe('CalculaSalarioPage', () => {
  let component: CalculaSalarioPage;
  let fixture: ComponentFixture<CalculaSalarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculaSalarioPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculaSalarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
