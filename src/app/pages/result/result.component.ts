import { PersonalityTestService } from './../../service/personality-test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private ptService:PersonalityTestService) { }

  personalityTrait:string = '';
  ngOnInit(): void {
    this.personalityTrait = this.ptService.getAnswer();
  }

}
