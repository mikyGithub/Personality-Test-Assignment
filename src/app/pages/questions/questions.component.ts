import { Question, Choice } from './../../model/question';
import { PersonalityTestService } from './../../service/personality-test.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(private ptService: PersonalityTestService,private router:Router) {}

  // Declarations
  questions: Question[] = [];
  answers: string[] = [];
  currentAnswer: Choice = { personalityType: '', option: '' };
  totalQuestion: number = 0;
  currentQuestion: Question = { question: '', choices: [] };
  index: number = 1;


  ngOnInit(): void {
    this.questions = this.ptService.getQuestions();
    this.totalQuestion = this.questions.length;
    this.currentQuestion = this.questions[0];
  }
  onAnswerSelect(selectedAnswer: Choice): void {
    this.currentAnswer = selectedAnswer;
  }
  onPrevious(): void {
    this.answers.pop();
    this.changeQuestion();
    this.index -= 1;
  }

  onNext(isDone: boolean): void {
    this.answers = [...this.answers, this.currentAnswer?.personalityType];
    if (isDone) {
      this.ptService.submitResult(this.answers);
      this.router.navigate(['/result'])
      this.answers = [];
    } else {
      this.changeQuestion();
      this.index += 1;
    }
  }


  changeQuestion(): void {
    this.currentAnswer = { personalityType: '', option: '' };
    this.currentQuestion = this.questions[this.index - 1];
  }

}
