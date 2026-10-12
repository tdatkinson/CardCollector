import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="topbar">
      <div class="container nav-wrap">
        <a routerLink="/home" class="brand">
          <span class="brand-mark">C</span>
          <div>
            <strong>CardCollector</strong>
            <small>Marketplace</small>
          </div>
        </a>

        <nav class="main-nav">
          <a routerLink="/home" routerLinkActive="active">Home</a>
          <a routerLink="/catalog" routerLinkActive="active">Browse</a>
          <a routerLink="/advanced-search" routerLinkActive="active">Advanced Search</a>
          <a routerLink="/orders" routerLinkActive="active">Orders</a>
          <a routerLink="/admin" routerLinkActive="active">Admin</a>
        </nav>

        <div class="nav-actions">
          <div class="search-mini">
            <span>⌕</span>
            <input type="text" placeholder="Search cards" />
          </div>
          <a class="cart-link" routerLink="/cart">Cart (2)</a>
          <a class="user-pill" routerLink="/account">Account</a>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      .topbar {
        position: sticky;
        top: 0;
        z-index: 50;
        backdrop-filter: blur(12px);
        background: rgba(255,255,255,0.82);
        border-bottom: 1px solid rgba(148,163,184,0.2);
      }
      .nav-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        min-height: 82px;
      }
      .brand {
        display: inline-flex;
        align-items: center;
        gap: 0.8rem;
      }
      .brand-mark {
        width: 42px;
        height: 42px;
        border-radius: 14px;
        display: grid;
        place-items: center;
        font-weight: 800;
        color: white;
        background: linear-gradient(135deg, var(--primary) 0%, #2dc7d2 100%);
      }
      .brand strong {
        display: block;
        font-size: 1.1rem;
      }
      .brand small {
        display: block;
        color: var(--muted);
      }
      .main-nav {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        color: var(--muted);
      }
      .main-nav a {
        font-weight: 600;
        position: relative;
      }
      .main-nav a.active {
        color: var(--text);
      }
      .main-nav a.active::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -9px;
        height: 3px;
        border-radius: 999px;
        background: var(--primary);
      }
      .nav-actions {
        display: flex;
        align-items: center;
        gap: 0.9rem;
      }
      .search-mini {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        background: var(--bg);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 0.7rem 0.8rem;
        min-width: 180px;
      }
      .search-mini input {
        border: none;
        background: transparent;
        width: 100%;
        outline: none;
      }
      .cart-link, .user-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 1rem;
        border-radius: 12px;
        font-weight: 600;
      }
      .cart-link {
        background: var(--surface-alt);
        color: var(--primary);
      }
      .user-pill {
        border: 1px solid var(--line);
      }
      @media (max-width: 920px) {
        .nav-wrap { flex-wrap: wrap; padding: 0.8rem 0; }
        .main-nav { order: 3; width: 100%; justify-content: center; flex-wrap: wrap; }
      }
    `
  ]
})
export class NavbarComponent {}
