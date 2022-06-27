import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalAddComponent } from './artical-add.component';

describe('ArticalAddComponent', () => {
  let component: ArticalAddComponent;
  let fixture: ComponentFixture<ArticalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticalAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
