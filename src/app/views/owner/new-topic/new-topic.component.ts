import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrl: './new-topic.component.css'
})
export class NewTopicComponent {
  @Input() selectedVotingEvent: any;
}
