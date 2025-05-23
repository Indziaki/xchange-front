import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRowComponent } from './info-row.component';

describe('InfoRowComponent', () => {
  let component: InfoRowComponent;
  let fixture: ComponentFixture<InfoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
