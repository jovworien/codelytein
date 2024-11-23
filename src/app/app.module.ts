import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarHeaderComponent } from './headers/sidebar-header/sidebar-header.component';
import { FullscreenHeaderComponent } from './headers/fullscreen-header/fullscreen-header.component';
import { SiderightHeaderComponent } from './headers/sideright-header/sideright-header.component';
import { LargeFootersComponent } from './footers/large-footers/large-footers.component';
import { SmallFootersComponent } from './footers/small-footers/small-footers.component';
import { GridAmountnameComponent } from './product-grid/grid-amountname/grid-amountname.component';
import { GridImageamtnameComponent } from './product-grid/grid-imageamtname/grid-imageamtname.component';
import { NameofProductinimageComponent } from './product-grid/nameof-productinimage/nameof-productinimage.component';
import { NameupImageamtbelowComponent } from './product-grid/nameup-imageamtbelow/nameup-imageamtbelow.component';
import { ImageStarreviewnameComponent } from './product-grid/image-starreviewname/image-starreviewname.component';
import { BuynowNameDescComponent } from './product-grid/buynow-name-desc/buynow-name-desc.component';
import { CartbuyNameComponent } from './product-grid/cartbuy-name/cartbuy-name.component';
import { CartbuyStarComponent } from './product-grid/cartbuy-star/cartbuy-star.component';
import { CartbuyNamedescComponent } from './product-grid/cartbuy-namedesc/cartbuy-namedesc.component';
import { ImgdescnameContactdealerComponent } from './product-grid/imgdescname-contactdealer/imgdescname-contactdealer.component';
import { ShoesComponent } from './hero-page/shoes/shoes.component';
import { ClothesComponent } from './hero-page/clothes/clothes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarHeaderComponent,
    FullscreenHeaderComponent,
    SiderightHeaderComponent,
    LargeFootersComponent,
    SmallFootersComponent,
    GridAmountnameComponent,
    GridImageamtnameComponent,
    NameofProductinimageComponent,
    NameupImageamtbelowComponent,
    ImageStarreviewnameComponent,
    BuynowNameDescComponent,
    CartbuyNameComponent,
    CartbuyStarComponent,
    CartbuyNamedescComponent,
    ImgdescnameContactdealerComponent,
    ShoesComponent,
    ClothesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
