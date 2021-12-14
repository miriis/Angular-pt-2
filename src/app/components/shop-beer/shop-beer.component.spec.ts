import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBeerComponent } from './shop-beer.component';

describe('ShopBeerComponent', () => {
  let component: ShopBeerComponent;
  let fixture: ComponentFixture<ShopBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
