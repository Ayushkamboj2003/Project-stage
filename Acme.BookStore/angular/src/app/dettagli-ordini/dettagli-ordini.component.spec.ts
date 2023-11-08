import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliOrdiniComponent } from './dettagli-ordini.component';

describe('DettagliOrdiniComponent', () => {
  let component: DettagliOrdiniComponent;
  let fixture: ComponentFixture<DettagliOrdiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettagliOrdiniComponent]
    });
    fixture = TestBed.createComponent(DettagliOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
