import { Component, Renderer2 } from '@angular/core';
import { NgIf } from '@angular/common';

import { VideoOverlayComponent } from '../../shared/video-overlay/video-overlay.component';
import { STORY_IMAGE, YOUTUBE_VIDEO } from 'src/app/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [NgIf, VideoOverlayComponent],
})
export class HeaderComponent {
  isVideoOpen: boolean = false;
  videoUrl: string = YOUTUBE_VIDEO;
  storyImage: string = STORY_IMAGE;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  openVideo() {
    this.isVideoOpen = true;
    this.renderer.addClass(document.body, 'disable-scroll');
  }

  closeVideo() {
    this.isVideoOpen = false;
    this.renderer.removeClass(document.body, 'disable-scroll');
  }
}
