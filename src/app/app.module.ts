import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from '../app/top-bar/top-bar.component';
import { ProductListComponent } from '../app/product-list/product-list.component';
import { ProductAlertsComponent } from '../app/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from '../app/product-details/product-details.component';
import { CartService } from '../app/cart.service';
import { CartComponent } from '../app/cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
@NgModule({

  imports: [
    BrowserModule, ReactiveFormsModule,FormsModule, HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
