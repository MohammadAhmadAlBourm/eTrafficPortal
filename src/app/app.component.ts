import { Component, OnInit } from '@angular/core';
import { TrafficEventService } from './core/services/traffic-event.service';
import { TrafficEvents } from './core/interfaces/traffic-events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'TrafficPortal';
  trafficEvents: TrafficEvents[] = [];
  filteredTrafficEvents: TrafficEvents[] = [];
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(private trafficEventService: TrafficEventService) {}

  ngOnInit(): void {
    this.trafficEventService.getTrafficEvents().subscribe((trafficEvents: any) => {
      this.trafficEvents = trafficEvents.data;
      this.filteredTrafficEvents = this.trafficEvents;
      this.extractCategories();
    });
  }

  extractCategories(): void {
    const categorySet = new Set(this.trafficEvents.map(event => event.category));
    this.categories = Array.from(categorySet);
  }

  filterEvents(): void {
    if (this.selectedCategory) {
      this.filteredTrafficEvents = this.trafficEvents.filter(event => event.category === this.selectedCategory);
    } else {
      this.filteredTrafficEvents = this.trafficEvents;
    }
  }
}
