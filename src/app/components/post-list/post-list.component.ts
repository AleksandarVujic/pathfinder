import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';

import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';
import { CardComponent } from '../../shared/card/card.component';
import { PathfinderSpinnerComponent } from '../../shared/pathfinder-spinner/pathfinder-spinner.component';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { NO_IMAGE } from 'src/app/constants';

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
    CommonModule,
  ],
})
export class PostListComponent implements OnInit, OnDestroy {
  @ViewChildren('postsList') postsList!: QueryList<ElementRef>;
  // data: Post[] = [];
  data$!: Observable<Post[]>;
  private dataSubject = new BehaviorSubject<Post[]>([]);
  private destroy$ = new Subject<void>();
  page: number = 1;
  pageSize: number = 21;

  constructor(private dataService: PostService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.dataService.getAllPosts(this.page, this.pageSize).subscribe({
      next: (response) => {
        const currentData = this.dataSubject.value;
        this.dataSubject.next([...currentData, ...response]);
        this.data$ = this.dataSubject
          .asObservable()
          .pipe(takeUntil(this.destroy$));
        this.data$.pipe(takeUntil(this.destroy$)).subscribe((dataArray) => {
          const startIndex = dataArray.length;
          if (startIndex > 0) this.scrollToNewItem(startIndex);
        });
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }

  loadMore(): void {
    this.page++;
    this.loadData();
  }

  scrollToNewItem(startIndex: number) {
    // Ensure the list items have been rendered in the DOM
    this.postsList.changes?.subscribe(() => {
      // Use the ElementRef to scroll to the first new item
      const newItems = this.postsList.toArray().slice(startIndex);
      if (newItems.length > 0) {
        newItems[0].nativeElement.scrollIntoView({ behaviour: 'smooth' });
      }
    });
  }

  formatImageUrl(imageUrl: string): string {
    const formatedUrl = imageUrl.replace('https://images.unsplash.com', '');
    return formatedUrl;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
