import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickiesComponent } from './quickies.component';

describe('QuickiesComponent', () => {
  let component: QuickiesComponent;
  let fixture: ComponentFixture<QuickiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
