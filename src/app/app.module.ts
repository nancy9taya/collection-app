import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { collectableServices } from './shared/collectable.service';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing

  ],
  providers: [collectableServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
