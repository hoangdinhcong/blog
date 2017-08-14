import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCrudComponent } from './tag-crud.component';

describe('TagCrudComponent', () => {
  let component: TagCrudComponent;
  let fixture: ComponentFixture<TagCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
