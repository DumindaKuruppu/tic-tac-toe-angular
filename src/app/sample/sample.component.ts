import { Component } from '@angular/core';
import {SampleService} from "./sample.service";

// Decorator/ annotation/ metadata
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  title = 'sample component';
  sampleList;

  constructor(service: SampleService) {
    this.sampleList = service.getSampleList();
  }
}
