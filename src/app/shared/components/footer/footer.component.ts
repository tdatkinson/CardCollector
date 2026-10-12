import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <h4>CardCollector</h4>
          <p>Trusted marketplace for collectible sports cards, high-grade inventory, and authenticated memorabilia.</p>
        </div>
        <div>
          <h5>Marketplace</h5>
          <ul>
            <li>Browse catalog</li>
            <li>Advanced search</li>
            <li>Sell your cards</li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>About us</li>
            <li>Support</li>
            <li>Authentication</li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>support&#64;cardcollector.com</li>
            <li>(800) 294-2117</li>
            <li>Mon-Fri • 9am-6pm</li>
          </ul>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .site-footer {
        background: #0f172a;
        color: rgba(255,255,255,0.75);
        padding: 3rem 0;
        margin-top: 4rem;
      }
      .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1.3fr;
        gap: 2rem;
      }
      h4, h5 { color: white; margin: 0 0 1rem; }
      ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.6rem; }
      p { margin: 0; max-width: 32ch; line-height: 1.7; }
      @media (max-width: 760px) {
        .footer-grid { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class FooterComponent {}
