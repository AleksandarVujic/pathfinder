import { Component, HostListener, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';
import { NgIf, NgFor, NgOptimizedImage } from '@angular/common';
import { PathfinderSpinnerComponent } from '../../shared/pathfinder-spinner/pathfinder-spinner.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  standalone: true,
  imports: [PathfinderSpinnerComponent, NgIf, NgFor, NgOptimizedImage],
})
export class GalleryComponent implements OnInit {
  postImagesList: Post[] = [];
  isLoading: boolean = true;
  shouldLoadMore: boolean = false;
  page: number = 1;
  pageSize: number = 30;

  constructor(private dataService: PostService) {}

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit() {
    this.shouldLoadMore = this.onLoadMoreScroll();
  }

  private loadData() {
    this.dataService.getAllPosts(this.page, this.pageSize).subscribe({
      next: (response) => {
        this.postImagesList = this.postImagesList.concat(response); // Append new data on scroll (infinite scroll alike)
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.isLoading = false;
      },
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.shouldLoadMore) {
      this.page++;
      this.loadData();
    }
  }

  onLoadMoreScroll(): boolean {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    return scrollPosition + 1 >= pageHeight;
  }
}
