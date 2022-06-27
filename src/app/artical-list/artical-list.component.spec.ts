import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalListComponent } from './artical-list.component';

describe('ArticalListComponent', () => {
  let component: ArticalListComponent;
  let fixture: ComponentFixture<ArticalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticalListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
