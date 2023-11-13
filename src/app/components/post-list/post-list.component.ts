import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';
import { CardComponent } from '../../shared/card/card.component';
import { PathfinderSpinnerComponent } from '../../shared/pathfinder-spinner/pathfinder-spinner.component';
import {
  FixedSizeVirtualScrollStrategy, // ScrollStrategy
  RxVirtualScrollViewportComponent, // Viewport
  RxVirtualFor, // ViewRepeater
} from '@rx-angular/template/experimental/virtual-scrolling';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  standalone: true,
  imports: [
    PathfinderSpinnerComponent,
    NgIf,
    NgFor,
    CardComponent,
    RxVirtualFor,
    RxVirtualScrollViewportComponent,
    FixedSizeVirtualScrollStrategy,
  ],
})
export class PostListComponent implements OnInit {
  @ViewChildren('postsList') postsList!: QueryList<ElementRef>;
  data: Post[] = [];
  isLoading: boolean = true;
  page: number = 1;
  pageSize: number = 30;

  constructor(private dataService: PostService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;
    this.dataService.getAllPosts(this.page, this.pageSize).subscribe({
      next: (response) => {
        const startIndex = this.data.length;
        this.data = this.data.concat(response); // Append new data
        this.isLoading = false;
        if (startIndex > 0) this.scrollToNewItem(startIndex);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.isLoading = false;
      },
    });
  }

  loadMore() {
    this.page++;
    this.loadData();
  }

  scrollToNewItem(startIndex: number) {
    // Ensure the list items have been rendered in the DOM
    this.postsList.changes.subscribe(() => {
      // Use the ElementRef to scroll to the first new item
      const newItems = this.postsList.toArray().slice(startIndex);
      if (newItems.length > 0) {
        newItems[0].nativeElement.scrollIntoView({ behaviour: 'smooth' });
      }
    });
  }
}
