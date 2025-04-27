import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSuitPageComponent } from './tech-suit-page.component';

describe('TechSuitPageComponent', () => {
  let component: TechSuitPageComponent;
  let fixture: ComponentFixture<TechSuitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSuitPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSuitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
