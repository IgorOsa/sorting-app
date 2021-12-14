import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewServiceConfirmComponent } from './dialog-new-service-confirm.component';

describe('DialogNewServiceConfirmComponent', () => {
  let component: DialogNewServiceConfirmComponent;
  let fixture: ComponentFixture<DialogNewServiceConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewServiceConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewServiceConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
