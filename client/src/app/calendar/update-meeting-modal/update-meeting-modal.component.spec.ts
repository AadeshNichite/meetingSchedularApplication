import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMeetingModalComponent } from './update-meeting-modal.component';

describe('UpdateMeetingModalComponent', () => {
  let component: UpdateMeetingModalComponent;
  let fixture: ComponentFixture<UpdateMeetingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMeetingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMeetingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
