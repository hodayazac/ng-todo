import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotoContainerComponent } from './doto-container.component';

describe('DotoContainerComponent', () => {
  let component: DotoContainerComponent;
  let fixture: ComponentFixture<DotoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
