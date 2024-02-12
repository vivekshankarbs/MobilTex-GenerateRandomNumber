import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRandomNumberComponent } from './generate-random-number.component';

describe('GenerateRandomNumberComponent', () => {
  let component: GenerateRandomNumberComponent;
  let fixture: ComponentFixture<GenerateRandomNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateRandomNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateRandomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
