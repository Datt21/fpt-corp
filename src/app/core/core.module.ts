import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { RadioButtonModule } from 'primeng/radiobutton';
@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PageErrorComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    GalleriaModule,
    DialogModule,
    ButtonModule,
    PanelModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    NgxPageScrollModule,
    RadioButtonModule,
  ],
  providers: [],
})
export class CoreModule {}
