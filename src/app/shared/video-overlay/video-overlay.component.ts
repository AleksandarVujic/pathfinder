import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-overlay',
  templateUrl: './video-overlay.component.html',
  styleUrls: ['./video-overlay.component.css'],
  standalone: true,
})
export class VideoOverlayComponent {
  @Input() unsafeUrl!: string;
  public safeURL: SafeResourceUrl | undefined;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.unsafeUrl
    );
  }
}
