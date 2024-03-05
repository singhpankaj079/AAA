import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSQComponent } from './tsq.component';

describe('TSQComponent', () => {
  let component: TSQComponent;
  let fixture: ComponentFixture<TSQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TSQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
