import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { provideImgixLoader } from '@angular/common'; // EMBEDED IMAGE LOADER
import { provideClientHydration } from '@angular/platform-browser'; // NON-DESTRUCTIVE HYDRATION

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

import { ROUTES } from './routes';
import { provideUnsplashImageLoader } from './config/images/image-loader'; // CUSTOM IMAGE LOADER

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    NavigationComponent,
    FooterComponent,
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  providers: [
    provideUnsplashImageLoader(), // CUSTOM IMAGE LOADER
    // provideImgixLoader(`https://images.unsplash.com`), // EMBEDED IMAGE LOADER
    provideClientHydration(), // NON-DESTRUCTIVE HYDRATION
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
