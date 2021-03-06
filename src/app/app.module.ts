import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BlogModule } from './blog/blog.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), HttpClientModule, AppRoutingModule, CoreModule, BlogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
