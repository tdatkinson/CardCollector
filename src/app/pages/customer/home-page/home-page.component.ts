import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { categoryShortcuts, products } from '../../../shared/data/marketplace-data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  template: `
    <section class="hero container">
      <div class="hero-copy">
        <span class="kicker">Trusted marketplace</span>
        <h1 class="page-title">Buy, sell, and grade iconic cards with confidence.</h1>
        <p class="muted">Discover authenticated sports cards, vintage collectibles, and rare limited-edition inventory from trusted sellers.</p>
        <div class="hero-actions">
          <a routerLink="/catalog" class="primary-btn">Shop the catalog</a>
          <a routerLink="/advanced-search" class="secondary-btn">Advanced search</a>
        </div>
        <div class="hero-stats">
          <div><strong>38k+</strong><span>Cards listed</span></div>
          <div><strong>1.9k</strong><span>Active sellers</span></div>
          <div><strong>99.8%</strong><span>Positive feedback</span></div>
        </div>
      </div>

      <div class="hero-visual card">
        <div class="feature-spotlight">
          <img src="https://images.unsplash.com/photo-1600369160812-6f2d0acef4b0?auto=format&fit=crop&w=900&q=80" alt="Featured card" />
          <div class="spotlight-badge">Featured card</div>
          <div class="spotlight-card">
            <span class="spotlight-kicker">Premium pick</span>
            <h3>1986 Michael Jordan Rookie Card</h3>
            <p>Mint 10 • Fleer • $1,499.99</p>
            <button class="primary-btn" type="button">View listing</button>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="search-bar card">
        <span class="search-icon">⌕</span>
        <input type="text" placeholder="Search by player, card set, or year" />
        <button class="primary-btn" type="button">Search</button>
      </div>
    </section>

    <section class="container page-shell">
      <div class="section-header">
        <h2>Popular categories</h2>
        <a routerLink="/catalog">View all</a>
      </div>
      <div class="category-grid">
        <div class="category-tile card" *ngFor="let item of categories">
          <span>{{ item.icon }}</span>
          <strong>{{ item.label }}</strong>
          <small>{{ item.count }} cards</small>
        </div>
      </div>
    </section>

    <section class="container page-shell">
      <div class="section-header">
        <h2>Featured cards</h2>
        <a routerLink="/catalog">Browse catalog</a>
      </div>
      <div class="product-grid">
        <app-product-card *ngFor="let product of featuredProducts" [product]="product"></app-product-card>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 2rem;
        padding-top: 3rem;
        align-items: center;
      }
      .hero-copy {
        padding: 2rem 0;
      }
      .page-title {
        max-width: 600px;
        margin: 1rem 0;
      }
      .hero-copy p {
        max-width: 560px;
        font-size: 1.1rem;
        line-height: 1.7;
      }
      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1.5rem;
      }
      .hero-actions a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        border-radius: 12px;
        padding: 0.8rem 1.25rem;
        font-weight: 700;
      }
      .primary-btn, .secondary-btn {
        border: none;
        cursor: pointer;
      }
      .primary-btn {
        background: linear-gradient(135deg, var(--primary) 0%, #3b7bff 100%);
        color: white;
      }
      .secondary-btn {
        background: var(--surface-alt);
        color: var(--primary);
      }
      .hero-stats {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
        margin-top: 2rem;
      }
      .hero-stats div {
        background: rgba(255,255,255,0.7);
        border: 1px solid var(--line);
        border-radius: 14px;
        padding: 1rem;
      }
      .hero-stats strong {
        display: block;
        font-size: 1.3rem;
      }
      .hero-stats span {
        color: var(--muted);
        font-size: 0.8rem;
      }
      .hero-visual {
        padding: 1rem;
      }
      .feature-spotlight {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
      }
      .feature-spotlight img {
        width: 100%;
        height: 500px;
        object-fit: cover;
      }
      .spotlight-badge {
        position: absolute;
        left: 1rem;
        bottom: 1rem;
        background: rgba(13, 25, 42, 0.72);
        color: white;
        padding: 0.65rem 0.8rem;
        border-radius: 999px;
        font-size: 0.72rem;
        font-weight: 700;
      }
      .spotlight-card {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: min(280px, calc(100% - 2rem));
        background: rgba(9, 18, 31, 0.8);
        backdrop-filter: blur(10px);
        color: white;
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 18px;
        padding: 1rem;
        box-shadow: 0 24px 48px rgba(15, 23, 42, 0.3);
      }
      .spotlight-kicker {
        display: inline-block;
        font-size: 0.68rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        opacity: 0.8;
      }
      .spotlight-card h3 {
        margin: 0.5rem 0 0.45rem;
        font-size: 1.2rem;
        line-height: 1.3;
      }
      .spotlight-card p {
        margin: 0 0 0.9rem;
        color: rgba(255,255,255,0.8);
      }
      .spotlight-card .primary-btn {
        width: 100%;
      }
      .search-bar {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.2rem;
        margin-top: 1rem;
      }
      .search-icon {
        font-size: 1.5rem;
        color: var(--muted);
      }
      .search-bar input {
        flex: 1;
        border: none;
        outline: none;
        background: transparent;
        font-size: 1rem;
      }
      .category-grid {
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 1rem;
      }
      .category-tile {
        min-height: 140px;
        display: grid;
        place-items: center;
        text-align: center;
        gap: 0.4rem;
        padding: 1rem;
      }
      .category-tile span {
        font-size: 2rem;
      }
      .category-tile small {
        color: var(--muted);
      }
      .product-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1.5rem;
      }
      @media (max-width: 980px) {
        .hero { grid-template-columns: 1fr; }
        .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .category-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      }
      @media (max-width: 600px) {
        .category-grid, .product-grid, .hero-stats { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class HomePageComponent {
  categories = categoryShortcuts;
  featuredProducts = products.filter((product) => product.featured);
}
