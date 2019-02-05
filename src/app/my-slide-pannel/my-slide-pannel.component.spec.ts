import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySlidePannelComponent } from './my-slide-pannel.component';

describe('MySlidePannelComponent', () => {
  let component: MySlidePannelComponent;
  let fixture: ComponentFixture<MySlidePannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySlidePannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySlidePannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
