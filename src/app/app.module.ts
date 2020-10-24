import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolListComponent } from './tool-list/tool-list.component';

import { FormsModule } from '@angular/forms';
import { FerreteriaAboutComponent } from './ferreteria-about/ferreteria-about.component';
import { FerreteriaToolsComponent } from './ferreteria-tools/ferreteria-tools.component';
import { FerreteriaHomeComponent } from './ferreteria-home/ferreteria-home.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerRangeComponent } from './input-integer-range/input-integer-range.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    FerreteriaAboutComponent,
    FerreteriaToolsComponent,
    FerreteriaHomeComponent,
    CartComponent,
    InputIntegerRangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
