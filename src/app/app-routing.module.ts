import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PropertyComponent } from './product-grid/property/property.component';
import { FurnitureComponent } from './product-grid/furniture/furniture.component';
import { SparePartComponent } from './product-grid/spare-part/spare-part.component';
import { NativeComponent } from './product-grid/native/native.component';
import { ProductDetailsHorizontalComponent } from './product-grid/product-details-horizontal/product-details-horizontal.component';
import { ProductDetailsVerticalComponent } from './product-grid/product-details-vertical/product-details-vertical.component';
import { ProductDetailsComponent } from './product-grid/product-details/product-details.component';

// 404 Component (create a component for this page)
//import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'sidebar-header', component: SidebarHeaderComponent },
  { path: 'fullscreen-header', component: FullscreenHeaderComponent },
  { path: 'sideright-header', component: SiderightHeaderComponent },
  { path: 'large-footers', component: LargeFootersComponent },
  { path: 'small-footers', component: SmallFootersComponent },
  { path: 'grid-amountname', component: GridAmountnameComponent },
  { path: 'grid-imageamtname', component: GridImageamtnameComponent },
  { path: 'nameof-productinimage', component: NameofProductinimageComponent },
  { path: 'nameup-imageamtbelow', component: NameupImageamtbelowComponent },
  { path: 'image-starreviewname', component: ImageStarreviewnameComponent },
  { path: 'buynow-name-desc', component: BuynowNameDescComponent },
  { path: 'cartbuy-name', component: CartbuyNameComponent },
  { path: 'cartbuy-star', component: CartbuyStarComponent },
  { path: 'cartbuy-namedesc', component: CartbuyNamedescComponent },
  { path: 'imgdescname-contactdealer', component: ImgdescnameContactdealerComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'clothes', component: ClothesComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: 'spare-part', component: SparePartComponent },
  { path: 'native', component: NativeComponent },
  { path: 'product-details-horizontal', component: ProductDetailsHorizontalComponent },
  { path: 'product-details-vertical', component: ProductDetailsVerticalComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  
 // { path: '**', component: NotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


