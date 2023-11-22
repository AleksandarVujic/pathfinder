import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private bottomOffset: number = 25;

  getTableScrollEvent(table: HTMLTableElement): Observable<boolean> {
    return fromEvent(table, 'scroll').pipe(
      map(() => this.isScrolledToBottom(table)),
      distinctUntilChanged()
    );
  }

  private isScrolledToBottom(table: HTMLTableElement): boolean {
    const tableHeight = table.clientHeight;
    const scrollTop = table.scrollTop;
    const scrollHeight = table.scrollHeight;

    return scrollHeight - (scrollTop + tableHeight) < this.bottomOffset;
  }
}
