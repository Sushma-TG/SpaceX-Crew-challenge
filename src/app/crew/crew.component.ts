import { Component, OnInit } from '@angular/core';
import { Crew } from './crew.model';
import { CrewService } from './crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  providers: [ CrewService ],
})
export class CrewComponent implements OnInit {
  crew: Crew[] = [];

  constructor(private crewService: CrewService) { }

  ngOnInit(): void {
    this.getCrew();
  }

  getCrew(): void {
    this.crewService.getCrew()
      .subscribe(crew => (this.crew = crew));
  }
}