import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCommandComponent } from './products-command.component';

describe('ProductsCommandComponent', () => {
  let component: ProductsCommandComponent;
  let fixture: ComponentFixture<ProductsCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
