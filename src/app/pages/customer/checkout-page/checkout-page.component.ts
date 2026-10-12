import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cartItems, savedAddresses } from '../../../shared/data/marketplace-data';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container page-shell">
      <div class="section-header">
        <div>
          <span class="kicker">Secure checkout</span>
          <h1 class="page-title">Checkout</h1>
        </div>
      </div>

      <div class="checkout-layout">
        <section class="checkout-form card">
          <h3>Shipping information</h3>
          <div class="address-card" *ngFor="let address of addresses">
            <input type="radio" name="shipping" [checked]="address.label === 'Home'" />
            <div>
              <strong>{{ address.label }}</strong>
              <p>{{ address.street }}</p>
              <p>{{ address.city }}, {{ address.state }} {{ address.zip }}</p>
            </div>
          </div>

          <div class="grid-2">
            <div class="field">
              <label>First name</label>
              <input class="input" value="Tyler" />
            </div>
            <div class="field">
              <label>Last name</label>
              <input class="input" value="Morgan" />
            </div>
          </div>

          <div class="field">
            <label>Street address</label>
            <input class="input" value="1469 Willow Ridge Ave" />
          </div>

          <div class="grid-2">
            <div class="field">
              <label>City</label>
              <input class="input" value="Charlotte" />
            </div>
            <div class="field">
              <label>State</label>
              <input class="input" value="NC" />
            </div>
          </div>

          <div class="field">
            <label>Postal code</label>
            <input class="input" value="28202" />
          </div>

          <div class="payment-box">
            <h3>Payment</h3>
            <div class="token-placeholder">Payment token placeholder</div>
          </div>
        </section>

        <aside class="summary card">
          <h3>Order summary</h3>
          <div class="order-items">
            <div class="order-item" *ngFor="let item of items">
              <span>{{ item.product.title }}</span>
              <strong>{{ formatPrice(item.product.price * item.quantity) }}</strong>
            </div>
          </div>
          <div class="summary-row"><span>Subtotal</span><strong>{{ formatPrice(subtotal) }}</strong></div>
          <div class="summary-row"><span>Shipping</span><strong>{{ formatPrice(shippingEstimate) }}</strong></div>
          <div class="summary-row"><span>Tax</span><strong>{{ formatPrice(taxEstimate) }}</strong></div>
          <div class="summary-row total"><span>Total</span><strong>{{ formatPrice(total) }}</strong></div>
          <button class="primary-btn" type="button">Place order</button>
        </aside>
      </div>
    </div>
  `,
  styles: [
    `
      .checkout-layout {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) 360px;
        gap: 1.5rem;
      }
      .checkout-form, .summary {
        padding: 1.25rem;
      }
      .address-card {
        display: flex;
        align-items: flex-start;
        gap: 0.8rem;
        padding: 1rem;
        border: 1px solid var(--line);
        border-radius: 14px;
        margin-bottom: 1rem;
      }
      .address-card p {
        margin: 0.15rem 0;
        color: var(--muted);
      }
      .payment-box {
        margin-top: 2rem;
      }
      .token-placeholder {
        display: grid;
        place-items: center;
        min-height: 110px;
        border: 1px dashed var(--line);
        border-radius: 14px;
        background: var(--surface-alt);
        color: var(--muted);
        font-weight: 600;
      }
      .order-items {
        display: grid;
        gap: 0.8rem;
        margin-bottom: 0.75rem;
      }
      .order-item, .summary-row {
        display: flex;
        justify-content: space-between;
        gap: 0.75rem;
      }
      .order-item {
        padding-bottom: 0.7rem;
        border-bottom: 1px solid var(--line);
      }
      .summary-row {
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--line);
      }
      .summary-row.total {
        border-bottom: none;
        margin-top: 0.5rem;
        font-size: 1.1rem;
      }
      .primary-btn { width: 100%; margin-top: 0.8rem; }
      @media (max-width: 900px) {
        .checkout-layout { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class CheckoutPageComponent {
  items = cartItems;
  addresses = savedAddresses;
  subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  shippingEstimate = 18.95;
  taxEstimate = this.subtotal * 0.07;
  total = this.subtotal + this.shippingEstimate + this.taxEstimate;

  formatPrice(value: number): string {
    return `$${value.toFixed(2)}`;
  }
}
