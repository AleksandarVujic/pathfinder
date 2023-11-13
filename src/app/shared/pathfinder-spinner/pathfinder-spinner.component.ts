import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'pathfinder-spinner',
  templateUrl: './pathfinder-spinner.component.html',
  styleUrls: ['./pathfinder-spinner.component.css'],
  standalone: true,
  imports: [NgIf],
})
export class PathfinderSpinnerComponent {
  @Input() isLoading!: boolean;
}
