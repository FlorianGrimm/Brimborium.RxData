import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { BrimboriumRxdata } from './brimborium-rxdata';

describe('BrimboriumRxdata', () => {
  let component: BrimboriumRxdata;
  let fixture: ComponentFixture<BrimboriumRxdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrimboriumRxdata],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrimboriumRxdata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
