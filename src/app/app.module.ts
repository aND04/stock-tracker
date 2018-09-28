import {NgModule}         from '@angular/core';
import {BrowserModule}    from '@angular/platform-browser';
import {MainComponent}    from './main/main.component';
import {SharedLibsModule} from './shared-libs.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BrowserModule,
    SharedLibsModule,
  ],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {
}
