import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFilteredComponent } from './products-filtered.component';

describe('ProductsFilteredComponent', () => {
  let component: ProductsFilteredComponent;
  let fixture: ComponentFixture<ProductsFilteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsFilteredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
