import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customerProfile, savedAddresses } from '../../../shared/data/marketplace-data';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container page-shell">
      <div class="section-header">
        <div>
          <span class="kicker">My account</span>
          <h1 class="page-title">Account settings</h1>
        </div>
      </div>

      <div class="account-layout">
        <section class="profile-panel card">
          <h3>Profile</h3>
          <div class="profile-header">
            <div class="avatar">TM</div>
            <div>
              <h4>{{ profile.name }}</h4>
              <p>{{ profile.email }}</p>
            </div>
          </div>

          <div class="details-grid">
            <div><span>Member since</span><strong>{{ profile.memberSince }}</strong></div>
            <div><span>Preferred sport</span><strong>{{ profile.preferredSport }}</strong></div>
            <div><span>Phone</span><strong>{{ profile.phone }}</strong></div>
          </div>
        </section>

        <section class="update-card card">
          <h3>Update information</h3>
          <div class="grid-2">
            <div class="field">
              <label>Full name</label>
              <input class="input" [value]="profile.name" />
            </div>
            <div class="field">
              <label>Email</label>
              <input class="input" [value]="profile.email" />
            </div>
            <div class="field">
              <label>Phone</label>
              <input class="input" [value]="profile.phone" />
            </div>
            <div class="field">
              <label>Preferred sport</label>
              <select>
                <option>Basketball</option>
                <option>Baseball</option>
                <option>Football</option>
              </select>
            </div>
          </div>
          <button class="primary-btn" type="button">Save changes</button>
        </section>

        <section class="addresses-card card">
          <h3>Saved addresses</h3>
          <div class="address-list">
            <div class="address-item" *ngFor="let address of addresses">
              <strong>{{ address.label }}</strong>
              <p>{{ address.street }}</p>
              <p>{{ address.city }}, {{ address.state }} {{ address.zip }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [
    `
      .account-layout {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
      }
      .profile-panel, .update-card, .addresses-card {
        padding: 1.25rem;
      }
      .profile-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.2rem;
      }
      .avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: linear-gradient(135deg, #dfe9ff, #b9d4ff);
        display: grid;
        place-items: center;
        font-weight: 800;
        color: var(--primary);
      }
      .profile-header h4, .profile-header p { margin: 0; }
      .details-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.8rem;
      }
      .details-grid div {
        background: var(--surface-alt);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 0.8rem;
      }
      .details-grid span {
        display: block;
        color: var(--muted);
        font-size: 0.76rem;
      }
      .details-grid strong { display: block; margin-top: 0.4rem; }
      .address-list {
        display: grid;
        gap: 0.8rem;
      }
      .address-item {
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 1rem;
      }
      .address-item p {
        margin: 0.3rem 0;
        color: var(--muted);
      }
      .primary-btn { margin-top: 1rem; }
      @media (max-width: 900px) {
        .account-layout { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class AccountPageComponent {
  profile = customerProfile;
  addresses = savedAddresses;
}
