import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="filter-panel card">
      <div class="panel-header">
        <h3>Filters</h3>
        <button class="ghost-btn" type="button">Reset</button>
      </div>

      <div class="filter-group" *ngFor="let group of filters">
        <h4>{{ group.label }}</h4>
        <div class="filter-options">
          <label *ngFor="let option of group.options">
            <input type="checkbox" [checked]="option.checked" />
            {{ option.label }}
          </label>
        </div>
      </div>
    </aside>
  `,
  styles: [
    `
      .filter-panel {
        padding: 1.25rem;
      }
      .panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1.1rem;
      }
      .panel-header h3 { margin: 0; }
      .filter-group {
        padding-top: 1rem;
        border-top: 1px solid var(--line);
        margin-top: 1rem;
      }
      .filter-group h4 {
        margin: 0 0 0.8rem;
      }
      .filter-options {
        display: grid;
        gap: 0.55rem;
        color: var(--muted);
      }
      .filter-options label {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        margin: 0;
        font-weight: 500;
      }
      input[type="checkbox"] {
        width: 16px;
        height: 16px;
      }
    `
  ]
})
export class FilterPanelComponent {
  @Input() filters: Array<{ label: string; options: Array<{ label: string; checked?: boolean }> }> = [
    { label: 'Sport', options: [{ label: 'Baseball' }, { label: 'Basketball' }, { label: 'Football' }] },
    { label: 'Set', options: [{ label: 'Topps' }, { label: 'Fleer' }, { label: 'Upper Deck' }] },
    { label: 'Year', options: [{ label: '1950s' }, { label: '1980s' }, { label: '2000s' }] }
  ];
}
