import { Choice, Question } from './../../model/question';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  @Input() choice: Choice = { option: '', personalityType: '' };
  @Input() currentAnswer: Choice = { option: '', personalityType: '' };

  @Output() selectAnswerEmitter = new EventEmitter<Choice>();

  constructor() {}

  ngOnInit(): void {}

  onAnswerSelect(selectedAnswer: Choice):void{
    this.selectAnswerEmitter.emit(selectedAnswer)
  }
}
