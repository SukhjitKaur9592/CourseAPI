import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { TopicAdditionService } from './topic-addition.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RestapiService } from './restapi.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTopicComponent,
    SearchDeleteComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TopicAdditionService,RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
