import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMetricsComponent } from './card-metrics.component';

describe('CardMetricsComponent', () => {
  let component: CardMetricsComponent;
  let fixture: ComponentFixture<CardMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMetricsComponent]
    });
    fixture = TestBed.createComponent(CardMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
