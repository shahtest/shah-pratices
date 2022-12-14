import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChartsComponent } from './charts/charts.component';
import { CurdComponent } from './curd/curd.component';
import { MailComponent } from './mail/mail.component';
import { MeanComponent } from './mean/mean.component';
import { PagedataComponent } from './pagedata/pagedata.component';
import { SearchComponent } from './search/search.component';
import { SheetconvertComponent } from './sheetconvert/sheetconvert.component';
import { SingleuserComponent } from './singleuser/singleuser.component';

const routes: Routes = [
  { path: '', component:MeanComponent },
  { path: 'mean', component:MeanComponent },
  { path: 'curd', component:CurdComponent },
  { path: 'charts', component:ChartsComponent },
  { path: 'search', canActivate :[AuthGuard], component:SearchComponent },
  { path: 'curd/:id', component:SingleuserComponent },
  { path: 'mail', component:MailComponent },
  { path: 'sheet', component:SheetconvertComponent},
  { path: 'pageData', component: PagedataComponent},
  
  { path: 'dynamic-form',  loadChildren: () => import('./dynamic-from/dynamic-from.module').then(m => m.DynamicFromModule)},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
