import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/customer/home-page/home-page.component';
import { CatalogPageComponent } from './pages/customer/catalog-page/catalog-page.component';
import { AdvancedSearchPageComponent } from './pages/customer/advanced-search-page/advanced-search-page.component';
import { ProductDetailPageComponent } from './pages/customer/product-detail-page/product-detail-page.component';
import { CartPageComponent } from './pages/customer/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/customer/checkout-page/checkout-page.component';
import { AccountPageComponent } from './pages/customer/account-page/account-page.component';
import { OrderHistoryPageComponent } from './pages/customer/order-history-page/order-history-page.component';
import { AdminDashboardPageComponent } from './pages/admin/admin-dashboard-page/admin-dashboard-page.component';
import { ProductMaintenancePageComponent } from './pages/admin/product-maintenance-page/product-maintenance-page.component';
import { InventoryAdjustmentPageComponent } from './pages/admin/inventory-adjustment-page/inventory-adjustment-page.component';
import { ReportingPageComponent } from './pages/admin/reporting-page/reporting-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'advanced-search', component: AdvancedSearchPageComponent },
  { path: 'product/:id', component: ProductDetailPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'orders', component: OrderHistoryPageComponent },
  { path: 'admin', component: AdminDashboardPageComponent },
  { path: 'admin/products', component: ProductMaintenancePageComponent },
  { path: 'admin/inventory', component: InventoryAdjustmentPageComponent },
  { path: 'admin/reports', component: ReportingPageComponent },
  { path: '**', redirectTo: '/home' }
];
