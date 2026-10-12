import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { products } from '../../../shared/data/marketplace-data';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container page-shell" *ngIf="product as card">
      <div class="product-detail-layout">
        <div class="gallery card">
          <div class="main-image">
            <img [src]="card.image" [alt]="card.title" />
          </div>
          <div class="thumb-row">
            <img [src]="card.image" alt="front view" />
            <img [src]="card.image" alt="back view" />
            <img [src]="card.image" alt="close up" />
          </div>
        </div>

        <div class="detail-panel">
          <span class="kicker">{{ card.sport }} • {{ card.set }}</span>
          <h1>{{ card.title }}</h1>
          <p class="muted">{{ card.description }}</p>

          <div class="spec-grid">
            <div><span>Condition</span><strong>{{ card.condition }}</strong></div>
            <div><span>Grade</span><strong>{{ card.grade }}</strong></div>
            <div><span>Certificate</span><strong>{{ card.certificateNumber }}</strong></div>
            <div><span>Availability</span><strong>{{ card.availability }}</strong></div>
          </div>

          <div class="pricing-block">
            <div>
              <span class="price-label">Price</span>
              <strong class="price-value">{{ formatPrice(card.price) }}</strong>
            </div>
            <div class="quantity-box">
              <button type="button">−</button>
              <span>1</span>
              <button type="button">+</button>
            </div>
          </div>

          <div class="purchase-actions">
            <button class="primary-btn" type="button">Add to Cart</button>
            <button class="secondary-btn" type="button">Buy now</button>
          </div>

          <div class="seller-card card">
            <h3>Seller info</h3>
            <div class="seller-row">
              <div class="avatar">N</div>
              <div>
                <strong>{{ card.seller }}</strong>
                <small>Verified seller</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .product-detail-layout {
        display: grid;
        grid-template-columns: 1.05fr 0.95fr;
        gap: 2rem;
        align-items: start;
      }
      .gallery {
        padding: 1rem;
      }
      .main-image {
        overflow: hidden;
        border-radius: 18px;
        background: #eef3f8;
      }
      .main-image img {
        width: 100%;
        height: 520px;
        object-fit: cover;
      }
      .thumb-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.8rem;
        margin-top: 1rem;
      }
      .thumb-row img {
        height: 110px;
        object-fit: cover;
        border-radius: 12px;
      }
      .detail-panel {
        display: grid;
        gap: 1rem;
      }
      .detail-panel h1 {
        margin: 0;
        font-size: clamp(2rem, 3vw, 2.5rem);
        letter-spacing: -0.06em;
      }
      .spec-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
      }
      .spec-grid div {
        background: var(--surface-alt);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 0.9rem;
      }
      .spec-grid span {
        display: block;
        font-size: 0.75rem;
        color: var(--muted);
      }
      .spec-grid strong {
        display: block;
        margin-top: 0.35rem;
      }
      .pricing-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        background: #f8fafc;
        border: 1px solid var(--line);
        border-radius: 18px;
        padding: 1.2rem 1rem;
      }
      .price-label {
        display: block;
        color: var(--muted);
        font-size: 0.8rem;
      }
      .price-value {
        font-size: 2rem;
      }
      .quantity-box {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        border: 1px solid var(--line);
        border-radius: 12px;
        background: white;
        padding: 0.6rem 0.8rem;
      }
      .quantity-box button {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid var(--line);
        background: #f3f6fb;
        cursor: pointer;
      }
      .purchase-actions {
        display: flex;
        gap: 0.8rem;
        flex-wrap: wrap;
      }
      .seller-card {
        padding: 1rem;
      }
      .seller-row {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }
      .avatar {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, #dfe8ff, #b3cffc);
        color: var(--primary);
        font-weight: 700;
      }
      .seller-row small { display: block; color: var(--muted); }
      @media (max-width: 900px) {
        .product-detail-layout { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class ProductDetailPageComponent {
  product = products[0];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = products.find((item) => item.id === id) || products[0];
    this.product = found;
  }

  formatPrice(value: number): string {
    return `$${value.toFixed(2)}`;
  }
}
