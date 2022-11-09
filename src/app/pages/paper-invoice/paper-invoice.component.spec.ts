import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperInvoiceComponent } from './paper-invoice.component';

describe('PaperInvoiceComponent', () => {
  let component: PaperInvoiceComponent;
  let fixture: ComponentFixture<PaperInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
