import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogboxeditComponent } from './dialogboxedit.component';

describe('DialogboxeditComponent', () => {
  let component: DialogboxeditComponent;
  let fixture: ComponentFixture<DialogboxeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogboxeditComponent]
    });
    fixture = TestBed.createComponent(DialogboxeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
