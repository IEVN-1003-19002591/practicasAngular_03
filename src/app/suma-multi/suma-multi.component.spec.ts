import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaMultiComponent } from './suma-multi.component';

describe('SumaMultiComponent', () => {
  let component: SumaMultiComponent;
  let fixture: ComponentFixture<SumaMultiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumaMultiComponent]
    });
    fixture = TestBed.createComponent(SumaMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
