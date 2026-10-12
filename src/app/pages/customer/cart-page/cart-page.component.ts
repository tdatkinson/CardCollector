import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cartItems } from '../../../shared/data/marketplace-data';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container page-shell">
      <div class="section-header">
        <div>
          <span class="kicker">Your cart</span>
          <h1 class="page-title">Shopping cart</h1>
        </div>
      </div>

      <div class="cart-layout">
        <div class="cart-items">
          <div class="cart-row card" *ngFor="let item of items">
            <img [src]="item.product.image" [alt]="item.product.title" />
            <div class="item-info">
              <h3>{{ item.product.title }}</h3>
              <p>{{ item.product.sport }} • {{ item.product.set }} • {{ item.product.condition }}</p>
              <small>Grade {{ item.product.grade }} • Certificate {{ item.product.certificateNumber }}</small>
            </div>
            <div class="qty-control">
              <button type="button">−</button>
              <span>{{ item.quantity }}</span>
              <button type="button">+</button>
            </div>
            <div class="price-col">
              <strong>{{ formatPrice(item.product.price * item.quantity) }}</strong>
              <button class="ghost-btn" type="button">Remove</button>
            </div>
          </div>
        </div>

        <aside class="summary card">
          <h3>Order summary</h3>
          <div class="summary-row"><span>Subtotal</span><strong>{{ formatPrice(subtotal) }}</strong></div>
          <div class="summary-row"><span>Tax estimate</span><strong>{{ formatPrice(taxEstimate) }}</strong></div>
          <div class="summary-row"><span>Shipping</span><strong>{{ formatPrice(shippingEstimate) }}</strong></div>
          <div class="summary-row total"><span>Total</span><strong>{{ formatPrice(total) }}</strong></div>
          <button routerLink="/checkout" class="primary-btn" type="button">Proceed to checkout</button>
        </aside>
      </div>
    </div>
  `,
  styles: [
    `
      .cart-layout {
        display: grid;
        grid-template-columns: minmax(0, 1.4fr) 360px;
        gap: 1.5rem;
        align-items: start;
      }
      .cart-items {
        display: grid;
        gap: 1rem;
      }
      .cart-row {
        display: grid;
        grid-template-columns: 120px minmax(0, 1fr) 120px 150px;
        gap: 1rem;
        align-items: center;
        padding: 1rem;
      }
      .cart-row img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 12px;
      }
      .item-info h3 {
        margin: 0 0 0.3rem;
      }
      .item-info p, .item-info small { color: var(--muted); margin: 0; }
      .qty-control {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        padding: 0.6rem 0.5rem;
        border-radius: 12px;
        border: 1px solid var(--line);
      }
      .qty-control button {
        width: 28px;
        height: 28px;
        border: 1px solid var(--line);
        border-radius: 8px;
        cursor: pointer;
      }
      .price-col {
        text-align: right;
        display: grid;
        gap: 0.5rem;
      }
      .summary {
        padding: 1.25rem;
      }
      .summary h3 { margin-top: 0; }
      .summary-row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--line);
      }
      .summary-row.total {
        font-size: 1.1rem;
        border-bottom: none;
        margin: 0.75rem 0 1rem;
      }
      .primary-btn {
        width: 100%;
        margin-top: 0.5rem;
      }
      @media (max-width: 900px) {
        .cart-layout { grid-template-columns: 1fr; }
      }
      @media (max-width: 640px) {
        .cart-row { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class CartPageComponent {
  items = cartItems;
  subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  taxEstimate = this.subtotal * 0.07;
  shippingEstimate = 18.95;
  total = this.subtotal + this.taxEstimate + this.shippingEstimate;

  formatPrice(value: number): string {
    return `$${value.toFixed(2)}`;
  }
}
