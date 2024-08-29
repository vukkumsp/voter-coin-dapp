import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-existing-topic',
  templateUrl: './existing-topic.component.html',
  styleUrl: './existing-topic.component.css'
})
export class ExistingTopicComponent {
  @Input() selectedVotingEvent: any;
}
