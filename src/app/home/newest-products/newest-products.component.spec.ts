import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestProductsComponent } from './newest-products.component';

describe('NewestProductsComponent', () => {
  let component: NewestProductsComponent;
  let fixture: ComponentFixture<NewestProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewestProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
