import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomepageComponent} from './components/homepage/homepage.component';
import {UploadComponent} from './components/upload/upload.component';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {CIConfig, CIModule} from 'ng-cloudimage-responsive';
import {environment} from '../environments/environment';

const ciConfig = {
  token: environment.cloud_image_token,
  domain: environment.s3_domain
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CIModule,
    NgbModule,
    NgxDropzoneModule,
  ],
  providers: [
    {provide: CIConfig, useValue: ciConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
