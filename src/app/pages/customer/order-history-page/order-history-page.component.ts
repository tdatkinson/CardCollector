import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { orderHistory } from '../../../shared/data/marketplace-data';
import { ModalDialogComponent } from '../../../shared/components/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-order-history-page',
  standalone: true,
  imports: [CommonModule, ModalDialogComponent],
  template: `
    <div class="container page-shell">
      <div class="section-header">
        <div>
          <span class="kicker">Orders</span>
          <h1 class="page-title">Order history</h1>
        </div>
      </div>

      <div class="order-list card">
        <div class="order-row" *ngFor="let order of orders">
          <div>
            <strong>{{ order.id }}</strong>
            <p>{{ order.date }}</p>
          </div>
          <div>
            <span class="badge neutral">{{ order.status }}</span>
          </div>
          <div>
            <strong>{{ formatPrice(order.total) }}</strong>
          </div>
          <div>
            <span>{{ order.tracking || 'Awaiting shipment' }}</span>
          </div>
          <button class="ghost-btn" type="button" (click)="openModal(order)">View details</button>
        </div>
      </div>
    </div>

    <app-modal-dialog [title]="selectedOrder?.id || 'Order details'" [visible]="modalVisible" (closed)="modalVisible = false">
      <div class="detail-grid" *ngIf="selectedOrder">
        <div><span>Status</span><strong>{{ selectedOrder.status }}</strong></div>
        <div><span>Date</span><strong>{{ selectedOrder.date }}</strong></div>
        <div><span>Tracking</span><strong>{{ selectedOrder.tracking || 'N/A' }}</strong></div>
        <div><span>Total</span><strong>{{ formatPrice(selectedOrder.total) }}</strong></div>
      </div>
      <div class="items-list" *ngIf="selectedOrder">
        <div class="mini-item" *ngFor="let item of selectedOrder.items">
          <img [src]="item.image" [alt]="item.title" />
          <div>
            <strong>{{ item.title }}</strong>
            <p>{{ item.sport }} • {{ item.condition }} • Grade {{ item.grade }}</p>
          </div>
        </div>
      </div>
    </app-modal-dialog>
  `,
  styles: [
    `
      .order-list {
        overflow: hidden;
      }
      .order-row {
        display: grid;
        grid-template-columns: 1.2fr 1fr 1fr 1.4fr 0.9fr;
        gap: 1rem;
        align-items: center;
        padding: 1rem 1.2rem;
        border-bottom: 1px solid var(--line);
      }
      .order-row:last-child { border-bottom: none; }
      .order-row p { margin: 0.3rem 0 0; color: var(--muted); }
      .detail-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
        margin-bottom: 1rem;
      }
      .detail-grid div {
        background: var(--surface-alt);
        border-radius: 12px;
        padding: 0.8rem;
      }
      .detail-grid span {
        display: block;
        color: var(--muted);
        font-size: 0.7rem;
      }
      .items-list {
        display: grid;
        gap: 0.8rem;
      }
      .mini-item {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 0.7rem;
      }
      .mini-item img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 10px;
      }
      .mini-item p { margin: 0.25rem 0 0; color: var(--muted); }
      @media (max-width: 760px) {
        .order-row { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class OrderHistoryPageComponent {
  orders = orderHistory;
  modalVisible = false;
  selectedOrder: typeof orderHistory[number] | null = null;

  openModal(order: typeof orderHistory[number]): void {
    this.selectedOrder = order;
    this.modalVisible = true;
  }

  formatPrice(value: number): string {
    return `$${value.toFixed(2)}`;
  }
}
