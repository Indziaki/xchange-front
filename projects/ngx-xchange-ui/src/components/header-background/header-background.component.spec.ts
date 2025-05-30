import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBackgroundComponent } from './header-background.component';

describe('HeaderBackgroundComponent', () => {
  let component: HeaderBackgroundComponent;
  let fixture: ComponentFixture<HeaderBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
