import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" *ngIf="visible" (click)="close()">
      <div class="modal-card card" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>{{ title }}</h3>
          <button class="ghost-btn" type="button" (click)="close()">Close</button>
        </div>
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.45);
        display: grid;
        place-items: center;
        z-index: 100;
        padding: 1rem;
      }
      .modal-card {
        width: min(760px, 100%);
        max-height: 80vh;
        overflow: auto;
        padding: 1.25rem;
      }
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      .modal-header h3 {
        margin: 0;
      }
      .modal-body {
        display: grid;
        gap: 1rem;
      }
    `
  ]
})
export class ModalDialogComponent {
  @Input() title = 'Details';
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.visible = false;
    this.closed.emit();
  }
}
