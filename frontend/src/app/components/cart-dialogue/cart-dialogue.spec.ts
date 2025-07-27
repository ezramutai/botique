import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDialogue } from './cart-dialogue';

describe('CartDialogue', () => {
  let component: CartDialogue;
  let fixture: ComponentFixture<CartDialogue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDialogue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDialogue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
