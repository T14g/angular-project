import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsLostComponent } from './dogs-lost.component';

describe('DogsLostComponent', () => {
  let component: DogsLostComponent;
  let fixture: ComponentFixture<DogsLostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsLostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
