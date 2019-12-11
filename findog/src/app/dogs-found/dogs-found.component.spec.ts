import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsFoundComponent } from './dogs-found.component';

describe('DogsFoundComponent', () => {
  let component: DogsFoundComponent;
  let fixture: ComponentFixture<DogsFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
