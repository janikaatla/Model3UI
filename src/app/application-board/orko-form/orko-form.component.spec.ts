import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkoFormComponent } from './orko-form.component';

describe('OrkoFormComponent', () => {
  let component: OrkoFormComponent;
  let fixture: ComponentFixture<OrkoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrkoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrkoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
