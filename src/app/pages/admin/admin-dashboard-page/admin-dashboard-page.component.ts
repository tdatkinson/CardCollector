import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { inventoryAlerts, returnsOverview, salesStats } from '../../../shared/data/marketplace-data';

@Component({
  selector: 'app-admin-dashboard-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container page-shell">
      <div class="section-header">
        <div>
          <span class="kicker">Admin dashboard</span>
          <h1 class="page-title">Operations overview</h1>
        </div>
        <div class="header-actions">
          <a class="secondary-btn" routerLink="/admin/products">Maintain products</a>
          <a class="primary-btn" routerLink="/admin/inventory">Inventory adjustments</a>
        </div>
      </div>

      <section class="stats-grid">
        <div class="stat-card card" *ngFor="let stat of stats">
          <span>{{ stat.label }}</span>
          <strong>{{ stat.value }}</strong>
          <small>{{ stat.delta }}</small>
        </div>
      </section>

      <section class="dashboard-grid">
        <div class="card panel">
          <h3>Inventory alerts</h3>
          <div class="alert-list" *ngFor="let alert of inventoryAlertsList">
            <div class="alert-item">
              <span class="badge" [ngClass]="alert.severity === 'warning' ? 'warning' : alert.severity === 'danger' ? 'danger' : 'neutral'">{{ alert.severity }}</span>
              <div>
                <strong>{{ alert.title }}</strong>
                <small>{{ alert.count }} issue(s)</small>
              </div>
            </div>
          </div>
        </div>

        <div class="card panel">
          <h3>Returns overview</h3>
          <div class="returns-list">
            <div class="return-item" *ngFor="let item of returnsOverviewList">
              <span>{{ item.label }}</span>
              <strong>{{ item.count }}</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .header-actions {
        display: flex;
        gap: 0.8rem;
        flex-wrap: wrap;
      }
      .header-actions a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 46px;
        border-radius: 12px;
        padding: 0.75rem 1rem;
        font-weight: 700;
      }
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;
      }
      .stat-card {
        padding: 1.2rem;
      }
      .stat-card span {
        color: var(--muted);
        font-size: 0.8rem;
      }
      .stat-card strong {
        display: block;
        margin: 0.5rem 0;
        font-size: 1.8rem;
      }
      .stat-card small {
        color: var(--success);
        font-weight: 700;
      }
      .dashboard-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
        margin-top: 1.5rem;
      }
      .panel {
        padding: 1.25rem;
      }
      .alert-list, .returns-list {
        display: grid;
        gap: 0.8rem;
      }
      .alert-item, .return-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.8rem 0.9rem;
        border: 1px solid var(--line);
        border-radius: 12px;
        background: #f8fafc;
      }
      .alert-item {
        justify-content: flex-start;
      }
      .alert-item strong { display: block; }
      .alert-item small { color: var(--muted); }
      .return-item span { color: var(--muted); }
      @media (max-width: 760px) {
        .stats-grid, .dashboard-grid { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class AdminDashboardPageComponent {
  stats = salesStats;
  inventoryAlertsList = inventoryAlerts;
  returnsOverviewList = returnsOverview;
}
