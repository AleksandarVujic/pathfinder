import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'pathfinder-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
})
export class CardComponent {
  @Input() imageURL?: string;
  @Input() assetsURL?: string;
  @Input() title!: string;
  @Input() stars!: number;
  @Input() price!: number;
}
