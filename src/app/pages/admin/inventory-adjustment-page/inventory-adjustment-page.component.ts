import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../../../shared/data/marketplace-data';

@Component({
  selector: 'app-inventory-adjustment-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container page-shell">
      <div class="section-header">
        <div>
          <span class="kicker">Inventory adjustment</span>
          <h1 class="page-title">Stock and acquisition updates</h1>
        </div>
      </div>

      <div class="inventory-grid">
        <section class="card form-card">
          <h3>Inventory update</h3>
          <div class="grid-2">
            <div class="field">
              <label>Card listing</label>
              <select>
                <option>1986 Michael Jordan Rookie Card</option>
                <option>1952 Mickey Mantle</option>
                <option>2016 Lionel Messi Barcelona</option>
              </select>
            </div>
            <div class="field">
              <label>Adjustment type</label>
              <select>
                <option>Stock increase</option>
                <option>Stock decrease</option>
                <option>Audit correction</option>
              </select>
            </div>
            <div class="field">
              <label>Quantity</label>
              <input class="input" value="3" />
            </div>
            <div class="field">
              <label>Acquisition cost</label>
              <input class="input" value="$420.00" />
            </div>
            <div class="field">
              <label>Supplier</label>
              <input class="input" value="Northside Collectibles" />
            </div>
            <div class="field">
              <label>Reorder flag</label>
              <select>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label>Notes</label>
            <textarea rows="4">Replenishment for premium inventory. Verify card condition and certification before listing.</textarea>
          </div>

          <button class="primary-btn" type="button">Apply adjustment</button>
        </section>

        <aside class="card list-panel">
          <h3>Active stock</h3>
          <div class="stock-item" *ngFor="let product of stockItems">
            <div>
              <strong>{{ product.title }}</strong>
              <p>{{ product.availability }} • {{ product.quantity }} in stock</p>
            </div>
            <span class="badge neutral">{{ product.grade }}</span>
          </div>
        </aside>
      </div>
    </div>
  `,
  styles: [
    `
      .inventory-grid {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) 360px;
        gap: 1.5rem;
      }
      .form-card, .list-panel {
        padding: 1.25rem;
      }
      .primary-btn { margin-top: 0.75rem; }
      .stock-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.8rem 0;
        border-bottom: 1px solid var(--line);
      }
      .stock-item:last-child { border-bottom: none; }
      .stock-item p { margin: 0.25rem 0 0; color: var(--muted); }
      @media (max-width: 900px) {
        .inventory-grid { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class InventoryAdjustmentPageComponent {
  stockItems = products.slice(0, 5);
}
