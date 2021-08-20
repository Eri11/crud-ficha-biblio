import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbCardModule, NbUserModule, NbButtonModule, NbIconModule, NbTabsetModule, NbSelectModule, NbListModule, NbFlipCardComponent, NbCardComponent, NbProgressBarModule, NbCheckboxComponent } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module'
import { HomedashComponent } from './homedash.component';

import { Ng2SmartTableModule, LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { FichasComponent,  } from './fichas/fichas.component';






@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    LeafletModule,
   
    Ng2SmartTableModule
  ],
  declarations: [
    HomedashComponent,
    FichasComponent,
    
    

  ],
  exports: [
    
    
  ],

})
export class HomedashModule { }
