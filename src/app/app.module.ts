import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeanComponent } from './mean/mean.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CurdComponent } from './curd/curd.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './filter.pipe';
import { SingleuserComponent } from './singleuser/singleuser.component';
import { SheetconvertComponent } from './sheetconvert/sheetconvert.component';
import { AuthGuard } from './auth.guard';

import { ApisInterceptor } from './apis.interceptor';
import { HeaderInterceptor } from './header.interceptor';
import { MailComponent } from './mail/mail.component';
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { PagedataComponent } from './pagedata/pagedata.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    MeanComponent,
    CurdComponent,
    SearchComponent,
    FilterPipe,
    SingleuserComponent,
    SheetconvertComponent,
    MailComponent,
    ChartsComponent,
    PagedataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule,
    NgChartsModule,
    NgxPaginationModule
  ],
  providers: [ ApiService , FilterPipe , AuthGuard ,
    { provide: HTTP_INTERCEPTORS, useClass: ApisInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor , multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
