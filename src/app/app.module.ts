
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule } from './lib/ng-zorro-antd/ng-zorro-antd.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsComponent } from './pages/questions/questions.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ResultComponent } from './pages/result/result.component';
import { ChoiceComponent } from './components/choice/choice.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    WelcomeComponent,
    ResultComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
