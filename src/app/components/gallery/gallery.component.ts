import { Component, HostListener, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';
import {
  NgIf,
  NgFor,
  NgOptimizedImage,
  CommonModule,
  NgForOf,
} from '@angular/common';
import { PathfinderSpinnerComponent } from '../../shared/pathfinder-spinner/pathfinder-spinner.component';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  standalone: true,
  imports: [
    PathfinderSpinnerComponent,
    NgIf,
    NgFor,
    NgOptimizedImage,
    CommonModule,
    NgForOf,
  ],
})
export class GalleryComponent implements OnInit {
  postImagesList: Post[] = [];
  isLoading: boolean = true;
  page: number = 1;
  pageSize: number = 30;

  constructor(private dataService: PostService) {}

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.dataService
      .getAllPosts(this.page, this.pageSize)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => {
          this.postImagesList = this.postImagesList.concat(response); // Append new data on scroll (infinite scroll alike)
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        },
      });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.onLoadMoreScroll()) {
      this.page++;
      this.loadData();
    }
  }

  onLoadMoreScroll(): boolean {
    if (typeof window !== 'undefined') {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      return scrollPosition + 50 >= pageHeight;
    } else return false;
  }

  formatImageUrl(imageUrl: string): string {
    const formatedUrl = imageUrl.replace('https://images.unsplash.com', '');
    return formatedUrl;
  }
}
