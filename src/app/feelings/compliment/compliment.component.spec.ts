import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplimentComponent } from './compliment.component';

describe('ComplimentComponent', () => {
  let component: ComplimentComponent;
  let fixture: ComponentFixture<ComplimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
