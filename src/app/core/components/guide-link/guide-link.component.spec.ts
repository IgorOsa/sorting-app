import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideLinkComponent } from './guide-link.component';

describe('GuideLinkComponent', () => {
  let component: GuideLinkComponent;
  let fixture: ComponentFixture<GuideLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
