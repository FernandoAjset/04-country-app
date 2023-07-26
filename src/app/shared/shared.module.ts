import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loadingSpinner/loadingSpinner.component';



@NgModule({
  declarations: [AboutPageComponent,ContactPageComponent,HomePageComponent,LoadingSpinnerComponent,SidebarComponent, SearchBoxComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AboutPageComponent,ContactPageComponent,HomePageComponent,LoadingSpinnerComponent,SearchBoxComponent,SidebarComponent]
})
export class SharedModule { }
