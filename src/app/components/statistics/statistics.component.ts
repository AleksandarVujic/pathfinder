import { Component } from '@angular/core';
import { Statistics } from 'src/app/models/statistics.interface';
import { StatisticsService } from 'src/app/services/statistics.service';
import { PathfinderSpinnerComponent } from '../../shared/pathfinder-spinner/pathfinder-spinner.component';
import {
  NgFor,
  DatePipe,
  NgStyle,
  CommonModule,
  NgOptimizedImage,
} from '@angular/common';
import { Observable } from 'rxjs';
import {
  RxVirtualFor,
  RxVirtualScrollViewportComponent,
  FixedSizeVirtualScrollStrategy,
} from '@rx-angular/template/experimental/virtual-scrolling';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  standalone: true,
  imports: [
    PathfinderSpinnerComponent,
    NgFor,
    DatePipe,
    NgStyle,
    CommonModule,
    RxVirtualFor,
    RxVirtualScrollViewportComponent,
    FixedSizeVirtualScrollStrategy,
    NgOptimizedImage,
  ],
})
export class StatisticsComponent {
  totalStats$!: Observable<Statistics>;
  tableData: any[] = [];
  isLoading: boolean = false;
  page: number = 1;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit() {
    this.loadStatsData();
    this.loadTableData();
  }

  private loadStatsData() {
    this.totalStats$ = this.statisticsService.getTotalStatistics();
  }

  private loadTableData() {
    this.isLoading = true;
    this.statisticsService.getTableData().subscribe({
      next: (response) => {
        this.tableData = this.tableData.concat(response);
        console.log(response);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.isLoading = false;
      },
    });
  }
}
