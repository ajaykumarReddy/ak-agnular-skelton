import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkSkeltonComponent } from './ak-skelton.component';

describe('AkSkeltonComponent', () => {
  let component: AkSkeltonComponent;
  let fixture: ComponentFixture<AkSkeltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkSkeltonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkSkeltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
