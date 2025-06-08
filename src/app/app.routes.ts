import { createComponent } from '@angular/core';
import { Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HomeComponent } from './home/home.component';
import { JewelsComponent } from './jewels/jewels.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BookComponent } from './book/book.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { ToysComponent } from './toys/toys.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyComponent } from './verify/verify.component';
import { KinderjoyComponent } from './chocolate/kinderjoy/kinderjoy.component';
import { FivestarComponent } from './chocolate/fivestar/fivestar.component';
import { DairymilkComponent } from './chocolate/dairymilk/dairymilk.component';
import { FerreroComponent } from './chocolate/ferrero/ferrero.component';
import { HersheysComponent } from './chocolate/hersheys/hersheys.component';
import { KitkatComponent } from './chocolate/kitkat/kitkat.component';
import { PerkComponent } from './chocolate/perk/perk.component';
import { SnickersComponent } from './chocolate/snickers/snickers.component';
import { VguardComponent } from './kitchen/vguard/vguard.component';
import { ButterflyComponent } from './kitchen/butterfly/butterfly.component';
import { PreethiComponent } from './kitchen/preethi/preethi.component';
import { UshaComponent } from './kitchen/usha/usha.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignindetailsComponent } from './signindetails/signindetails.component';
import { FisherComponent } from './toys/fisher/fisher.component';
import { JohnsonComponent } from './toys/johnson/johnson.component';
import { HashbroComponent } from './toys/hashbro/hashbro.component';
import { RavensburgerComponent } from './toys/ravensburger/ravensburger.component';



export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "signin", component: SigninComponent },
    { path: "firstpage", component: FirstpageComponent },
    { path: "home", component: HomeComponent },
    { path: "homePage", component: HomeComponent },
    { path: "jewel", component: JewelsComponent },
    { path: "beauty", component: BeautyComponent },
    { path: "book", component: BookComponent },
    { path: "chocolate", component: ChocolateComponent },
    { path: "gadget", component: GadgetsComponent },
    { path: "toys", component: ToysComponent },
    { path: "kitchen", component: KitchenComponent },
    {path:"furniture",component:FurnitureComponent},
    {path:"profile",component:ProfileComponent},
    {path:'verify/:username',component:VerifyComponent},
    {path:"kinderjoy",component:KinderjoyComponent},
    {path:"5star",component:FivestarComponent},
    {path:"dairymilk",component:DairymilkComponent},
    {path:"ferrero",component:FerreroComponent},
    {path:"Hersheys",component:HersheysComponent},
    {path:"Kitkat",component:KitkatComponent},
    {path:"perk",component:PerkComponent},
    {path:"Snickers",component:SnickersComponent},
    {path:"vguard",component:VguardComponent},
    {path:"butterfly",component:ButterflyComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:"preethi",component:PreethiComponent},
    {path:"usha",component:UshaComponent},
    {path:"details",component:SignindetailsComponent},
    {path:"fisher",component:FisherComponent},
    {path:"johnson",component:JohnsonComponent},
    {path:"hashbro",component:HashbroComponent},
    {path:"ravensburger",component:RavensburgerComponent}

];
