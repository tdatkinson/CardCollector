import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { products } from '../../../shared/data/marketplace-data';

@Component({
  selector: 'app-advanced-search-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="container page-shell">
      <div class="section-header">
        <div>
          <span class="kicker">Advanced search</span>
          <h1 class="page-title">Find the exact card you want</h1>
        </div>
      </div>

      <div class="search-panel card">
        <div class="filter-grid">
          <div class="field">
            <label>Player or card title</label>
            <input class="input" placeholder="Jordan, Mantle, Messi..." />
          </div>
          <div class="field">
            <label>Sport</label>
            <select>
              <option>All sports</option>
              <option>Baseball</option>
              <option>Basketball</option>
              <option>Football</option>
              <option>Hockey</option>
            </select>
          </div>
          <div class="field">
            <label>Set</label>
            <select>
              <option>All sets</option>
              <option>Topps</option>
              <option>Fleer</option>
              <option>Upper Deck</option>
              <option>Panini Prizm</option>
            </select>
          </div>
          <div class="field">
            <label>Year</label>
            <input class="input" type="number" value="1986" />
          </div>
          <div class="field">
            <label>Condition</label>
            <select>
              <option>Any</option>
              <option>Mint</option>
              <option>Near Mint</option>
              <option>Excellent</option>
            </select>
          </div>
          <div class="field">
            <label>Grade</label>
            <select>
              <option>Any</option>
              <option>10</option>
              <option>9.5</option>
              <option>9</option>
            </select>
          </div>
          <div class="field">
            <label>Price range</label>
            <div class="range-row">
              <input class="input" value="$100" />
              <span>to</span>
              <input class="input" value="$2500" />
            </div>
          </div>
          <div class="field">
            <label>Availability</label>
            <select>
              <option>In stock</option>
              <option>Low stock</option>
              <option>Out of stock</option>
            </select>
          </div>
        </div>

        <div class="search-actions">
          <button class="primary-btn" type="button">Search cards</button>
          <button class="ghost-btn" type="button">Clear filters</button>
        </div>
      </div>

      <div class="results-block">
        <div class="section-header results-header">
          <h2>Matching results</h2>
          <span class="badge neutral">7 matching cards</span>
        </div>

        <div class="product-grid">
          <app-product-card *ngFor="let product of searchResults" [product]="product"></app-product-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .search-panel {
        padding: 1.4rem;
        margin-top: 1.5rem;
      }
      .filter-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;
      }
      .range-row {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 0.5rem;
      }
      .search-actions {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-top: 1.2rem;
      }
      .results-block {
        margin-top: 2rem;
      }
      .results-header {
        margin-bottom: 1rem;
      }
      .product-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
      }
      @media (max-width: 900px) {
        .filter-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @media (max-width: 600px) {
        .filter-grid, .product-grid { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class AdvancedSearchPageComponent {
  searchResults = products.slice(0, 6);
}
