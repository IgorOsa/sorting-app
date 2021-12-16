import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddNewServiceComponent } from './dialog-add-new-service.component';

describe('DialogAddNewServiceComponent', () => {
  let component: DialogAddNewServiceComponent;
  let fixture: ComponentFixture<DialogAddNewServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddNewServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddNewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
