import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssignComponent } from './assign/assign.component';
import { BandingComponent } from './banding/banding.component';
import { MidComponent } from './mid/mid.component';
import { NameComponent } from './name/name.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ValidatorsComponent } from './validators/validators.component';
import { FormsComponent } from './forms/forms.component';
import { HttpComponent } from './http/http.component';
import { HomeService } from './appService/home.service';
import { LinkComponent } from './link/link.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LasthttpComponent } from './lasthttp/lasthttp.component';
import { KeshuFormComponent } from './keshu-form/keshu-form.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AssessmentComponent,
    AssignComponent,
    BandingComponent,
    MidComponent,
    NameComponent,
    ReactiveFormComponent,
    ArrayFormComponent,
    ValidatorsComponent,
    FormsComponent,
    HttpComponent,
    LinkComponent,
    ErrorpageComponent,
    LasthttpComponent,
    KeshuFormComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
