import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminReports } from '../../../shared/data/marketplace-data';

@Component({
  selector: 'app-reporting-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container page-shell">
      <div class="section-header">
        <div>
          <span class="kicker">Reporting</span>
          <h1 class="page-title">Marketplace analytics</h1>
        </div>
      </div>

      <div class="report-grid">
        <div class="card panel">
          <h3>Sales</h3>
          <div class="chart-bars sales">
            <span *ngFor="let value of sales" [style.height.%]="(value / maxSales) * 100"></span>
          </div>
        </div>
        <div class="card panel">
          <h3>Inventory</h3>
          <div class="chart-bars inventory">
            <span *ngFor="let value of inventory" [style.height.%]="(value / maxInventory) * 100"></span>
          </div>
        </div>
        <div class="card panel">
          <h3>Returns</h3>
          <div class="chart-bars returns">
            <span *ngFor="let value of returns" [style.height.%]="(value / maxReturns) * 100"></span>
          </div>
        </div>
        <div class="card panel">
          <h3>High-value cards</h3>
          <div class="chart-bars highvalue">
            <span *ngFor="let value of highValue" [style.height.%]="(value / maxHighValue) * 100"></span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .report-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
      }
      .panel {
        padding: 1.25rem;
      }
      .chart-bars {
        display: flex;
        align-items: end;
        gap: 0.55rem;
        height: 180px;
        padding-top: 1.5rem;
      }
      .chart-bars span {
        display: block;
        flex: 1;
        border-radius: 10px 10px 0 0;
        background: linear-gradient(180deg, #86aefc 0%, var(--primary) 100%);
      }
      .chart-bars.inventory span { background: linear-gradient(180deg, #86d2b2 0%, #2cb67d 100%); }
      .chart-bars.returns span { background: linear-gradient(180deg, #f6c86d 0%, #f59e0b 100%); }
      .chart-bars.highvalue span { background: linear-gradient(180deg, #dcb7ff 0%, #8b5cf6 100%); }
      @media (max-width: 760px) { .report-grid { grid-template-columns: 1fr; } }
    `
  ]
})
export class ReportingPageComponent {
  sales = adminReports.sales;
  inventory = adminReports.inventory;
  returns = adminReports.returns;
  highValue = adminReports.highValue;

  maxSales = Math.max(...this.sales);
  maxInventory = Math.max(...this.inventory);
  maxReturns = Math.max(...this.returns);
  maxHighValue = Math.max(...this.highValue);
}
