import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/card/card.component';
import { HeaderComponent } from '../header/header.component';
import {
  NO_IMAGE,
  TOP_DESTINATION_1,
  TOP_DESTINATION_2,
  TOP_DESTINATION_3,
  TOP_DESTINATION_4,
  TRIP_1,
  TRIP_2,
  TRIP_3,
} from 'src/app/constants';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { TopDestination } from 'src/app/models/top_destination.interface';
import { Trip } from 'src/app/models/trip.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    CardComponent,
    RouterLink,
    NgFor,
    NgOptimizedImage,
  ],
})
export class HomeComponent {
  noImagePlaceholder: string = NO_IMAGE;
  topDestinations: TopDestination[] = [
    {
      title: 'Cenote Suytun',
      subtitle: 'Mexico',
      imagePath: TOP_DESTINATION_1,
    },
    { title: 'Sorapis Lake', subtitle: 'Italy', imagePath: TOP_DESTINATION_2 },
    { title: 'Schesaplana', subtitle: 'Austria', imagePath: TOP_DESTINATION_3 },
    {
      title: 'Kilimanjaro',
      subtitle: 'Tanzania',
      imagePath: TOP_DESTINATION_4,
    },
  ];

  trips: Trip[] = [
    {
      title: 'Tibet, China',
      stars: 410,
      price: 2300,
      imageUrl: TRIP_1,
    },
    {
      title: 'Irkutsk Area, Russia',
      stars: 457,
      price: 3650,
      imageUrl: TRIP_2,
    },
    {
      title: 'Lake Bled, Slovenia',
      stars: 256,
      price: 4550,
      imageUrl: TRIP_3,
    },
  ];

  constructor() {}
}
