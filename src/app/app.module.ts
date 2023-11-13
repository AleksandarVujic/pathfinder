import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { provideImgixLoader } from '@angular/common';
import { provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

import { ROUTES } from './routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NavigationComponent,
    FooterComponent,
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  providers: [
    provideImgixLoader(`https://images.unsplash.com`),
    provideClientHydration(),
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
