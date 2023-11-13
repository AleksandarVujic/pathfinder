import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathfinderSpinnerComponent } from './pathfinder-spinner.component';

describe('PathfinderSpinnerComponent', () => {
  let component: PathfinderSpinnerComponent;
  let fixture: ComponentFixture<PathfinderSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [PathfinderSpinnerComponent]
});
    fixture = TestBed.createComponent(PathfinderSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
