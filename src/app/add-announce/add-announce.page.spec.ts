import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAnnouncePage } from './add-announce.page';

describe('AddAnnouncePage', () => {
  let component: AddAnnouncePage;
  let fixture: ComponentFixture<AddAnnouncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddAnnouncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
