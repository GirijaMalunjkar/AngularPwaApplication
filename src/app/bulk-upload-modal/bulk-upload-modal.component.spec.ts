import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadModalComponent } from './bulk-upload-modal.component';

describe('BulkUploadModalComponent', () => {
  let component: BulkUploadModalComponent;
  let fixture: ComponentFixture<BulkUploadModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkUploadModalComponent]
    });
    fixture = TestBed.createComponent(BulkUploadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
