import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../common-data/common-data.service';
import { SELECTED_TOPIC, VOTING_EVENTS_LIST } from '../../common-data/common-data.keys';
import { combineLatest, concat, forkJoin, merge } from 'rxjs';
import { CommonDataUtilService } from '../../common-data/common-data.util.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{

  votingEvent: any = null;

  isOwner: boolean = false;
  isNewTopic: boolean = false;

  constructor(private cd: CommonDataService, private cdUtil: CommonDataUtilService){}
  ngOnInit(): void {
    this.cdUtil.isOwnerLoggedIn().subscribe(value => this.isOwner = value);

    combineLatest([this.cd.getData(VOTING_EVENTS_LIST), this.cd.getData(SELECTED_TOPIC)])
      .subscribe(([votingEventsList, selectedId]) => {
        if(selectedId==null) selectedId = 0; // initially it emits null
        this.votingEvent = votingEventsList[selectedId];
      });
  }

}
