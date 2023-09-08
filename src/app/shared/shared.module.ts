import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SidenavComponent, FooterComponent],
})
export class SharedModule {}
