import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../../../shared/data/marketplace-data';

@Component({
  selector: 'app-product-maintenance-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container page-shell">
      <div class="section-header">
        <div>
          <span class="kicker">Product maintenance</span>
          <h1 class="page-title">Edit listings</h1>
        </div>
        <button class="primary-btn" type="button">Add listing</button>
      </div>

      <div class="maintenance-grid">
        <section class="card form-card">
          <h3>Listing details</h3>
          <div class="grid-2">
            <div class="field">
              <label>Title</label>
              <input class="input" value="1986 Michael Jordan Rookie Card" />
            </div>
            <div class="field">
              <label>Sport</label>
              <select>
                <option>Basketball</option>
                <option>Baseball</option>
                <option>Football</option>
              </select>
            </div>
            <div class="field">
              <label>Set</label>
              <input class="input" value="Fleer" />
            </div>
            <div class="field">
              <label>Year</label>
              <input class="input" type="number" value="1986" />
            </div>
            <div class="field">
              <label>Condition</label>
              <select>
                <option>Mint</option>
                <option>Near Mint</option>
                <option>Excellent</option>
              </select>
            </div>
            <div class="field">
              <label>Grade</label>
              <select>
                <option>10</option>
                <option>9.5</option>
                <option>9</option>
              </select>
            </div>
            <div class="field">
              <label>Price</label>
              <input class="input" value="1499.99" />
            </div>
            <div class="field">
              <label>Availability</label>
              <select>
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label>Description</label>
            <textarea rows="5">Gem mint rookie card with certification and high-quality presentation.</textarea>
          </div>

          <div class="field">
            <label>Image upload</label>
            <div class="upload-box">Upload card image</div>
          </div>

          <div class="field">
            <label>Certificate number</label>
            <input class="input" value="MJ-1986-FL-1042" />
          </div>

          <div class="action-row">
            <button class="primary-btn" type="button">Save listing</button>
            <button class="ghost-btn" type="button">Deactivate</button>
          </div>
        </section>

        <aside class="card listings-panel">
          <h3>Current listings</h3>
          <div class="listing-item" *ngFor="let product of listedProducts">
            <img [src]="product.image" [alt]="product.title" />
            <div>
              <strong>{{ product.title }}</strong>
              <p>{{ product.sport }} • {{ product.condition }}</p>
              <span class="badge neutral">{{ product.availability }}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `,
  styles: [
    `
      .maintenance-grid {
        display: grid;
        grid-template-columns: minmax(0, 1.4fr) 360px;
        gap: 1.5rem;
      }
      .form-card, .listings-panel {
        padding: 1.25rem;
      }
      .upload-box {
        height: 90px;
        border: 1px dashed var(--line);
        border-radius: 12px;
        display: grid;
        place-items: center;
        background: var(--surface-alt);
        color: var(--muted);
        font-weight: 600;
      }
      .action-row {
        display: flex;
        gap: 0.8rem;
        margin-top: 1rem;
      }
      .listing-item {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.8rem 0;
        border-bottom: 1px solid var(--line);
      }
      .listing-item:last-child { border-bottom: none; }
      .listing-item img {
        width: 72px;
        height: 72px;
        object-fit: cover;
        border-radius: 12px;
      }
      .listing-item p { margin: 0.25rem 0; color: var(--muted); }
      @media (max-width: 900px) {
        .maintenance-grid { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class ProductMaintenancePageComponent {
  listedProducts = products.slice(0, 5);
}
