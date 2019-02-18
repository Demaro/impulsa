import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngPageComponent } from './ong-page.component';

describe('OngPageComponent', () => {
  let component: OngPageComponent;
  let fixture: ComponentFixture<OngPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
