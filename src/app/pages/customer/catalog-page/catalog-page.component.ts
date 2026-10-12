import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { FilterPanelComponent } from '../../../shared/components/filter-panel/filter-panel.component';
import { products } from '../../../shared/data/marketplace-data';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FilterPanelComponent],
  template: `
    <div class="container page-shell catalog-page">
      <div class="page-heading">
        <div>
          <span class="kicker">Browse listings</span>
          <h1 class="page-title">Card catalog</h1>
        </div>
        <div class="toolbar card">
          <label>
            Sort by
            <select>
              <option>Featured</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Grade</option>
            </select>
          </label>
        </div>
      </div>

      <div class="catalog-layout">
        <app-filter-panel></app-filter-panel>

        <section class="catalog-results">
          <div class="results-topbar">
            <p>Showing <strong>8</strong> of <strong>240</strong> results</p>
            <div class="pills">
              <span class="badge neutral">Baseball</span>
              <span class="badge neutral">Vintage</span>
            </div>
          </div>

          <div class="product-grid">
            <app-product-card *ngFor="let product of pagedProducts" [product]="product"></app-product-card>
          </div>

          <div class="pagination">
            <button class="ghost-btn" type="button">Previous</button>
            <div class="page-numbers">
              <button class="filter-btn active" type="button">1</button>
              <button class="filter-btn" type="button">2</button>
              <button class="filter-btn" type="button">3</button>
            </div>
            <button class="ghost-btn" type="button">Next</button>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [
    `
      .catalog-page { display: grid; gap: 1.5rem; }
      .page-heading {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 1rem;
      }
      .toolbar {
        padding: 0.8rem 1rem;
      }
      .toolbar label {
        display: block;
        color: var(--muted);
        font-size: 0.76rem;
        font-weight: 600;
      }
      .toolbar select {
        margin-top: 0.45rem;
      }
      .catalog-layout {
        display: grid;
        grid-template-columns: 280px minmax(0, 1fr);
        gap: 1.5rem;
        align-items: start;
      }
      .catalog-results {
        display: grid;
        gap: 1.25rem;
      }
      .results-topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        color: var(--muted);
      }
      .pills {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .product-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
      }
      .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-top: 0.5rem;
      }
      .page-numbers {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .filter-btn {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        border: 1px solid var(--line);
        background: white;
        color: var(--muted);
        cursor: pointer;
      }
      .filter-btn.active {
        background: var(--primary-soft);
        border-color: transparent;
        color: var(--primary);
        font-weight: 700;
      }
      @media (max-width: 900px) {
        .catalog-layout { grid-template-columns: 1fr; }
      }
      @media (max-width: 650px) {
        .page-heading, .results-topbar, .pagination { flex-direction: column; align-items: flex-start; }
        .product-grid { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class CatalogPageComponent {
  pagedProducts = products.slice(0, 6);
}
