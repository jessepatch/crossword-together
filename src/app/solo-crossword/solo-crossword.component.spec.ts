import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloCrosswordComponent } from './solo-crossword.component';

describe('SoloCrosswordComponent', () => {
  let component: SoloCrosswordComponent;
  let fixture: ComponentFixture<SoloCrosswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloCrosswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloCrosswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
