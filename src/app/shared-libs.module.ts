import {CommonModule}                   from '@angular/common';
import {NgModule}                       from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule}        from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class SharedLibsModule {
}
