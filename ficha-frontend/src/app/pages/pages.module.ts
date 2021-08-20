import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomedashModule } from './homedash/homedash.module';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    
    MiscellaneousModule,
    
    HomedashModule,
    
  ],
  declarations: [
    PagesComponent,

    //Placehlder for chartcomp
  ],
})
export class PagesModule {
}
