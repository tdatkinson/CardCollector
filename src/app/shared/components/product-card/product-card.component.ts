import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../data/marketplace-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="product-card card" *ngIf="product">
      <div class="card-thumb">
        <img [src]="product.image" [alt]="product.title" />
        <span class="card-badge">{{ product.availability }}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>{{ product.sport }}</span>
          <span>{{ product.year }}</span>
        </div>
        <h4><a [routerLink]="['/product', product.id]">{{ product.title }}</a></h4>
        <div class="card-submeta">
          <span>{{ product.set }}</span>
          <span>{{ product.condition }}</span>
        </div>
        <div class="card-grade-row">
          <span>{{ product.grade }}</span>
          <span>{{ product.rarity }}</span>
        </div>
        <div class="card-bottom">
          <strong>{{ formatPrice(product.price) }}</strong>
          <button class="primary-btn" type="button">Add to Cart</button>
        </div>
      </div>
    </article>
  `,
  styles: [
    `
      .product-card {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .card-thumb {
        position: relative;
        aspect-ratio: 4/3;
        overflow: hidden;
        background: #eaeef6;
      }
      .card-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .card-badge {
        position: absolute;
        top: 0.9rem;
        left: 0.9rem;
        padding: 0.4rem 0.7rem;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.72);
        color: white;
        font-size: 0.68rem;
        font-weight: 700;
      }
      .card-body {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .card-meta, .card-submeta, .card-grade-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--muted);
        font-size: 0.75rem;
      }
      .card-body h4 {
        margin: 0.8rem 0 0.5rem;
        font-size: 1.05rem;
        line-height: 1.35;
      }
      .card-bottom {
        margin-top: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.6rem;
        padding-top: 1rem;
      }
      .card-bottom strong {
        font-size: 1.25rem;
      }
      .primary-btn { padding: 0.72rem 0.9rem; }
    `
  ]
})
export class ProductCardComponent {
  @Input() product!: Product;

  formatPrice(value: number): string {
    return `$${value.toFixed(2)}`;
  }
}
