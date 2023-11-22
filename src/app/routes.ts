import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'destinations',
    component: PostListComponent,
    children: [{ path: 'destinations/:identifier', component: PostComponent }],
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'page-not-found',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];
