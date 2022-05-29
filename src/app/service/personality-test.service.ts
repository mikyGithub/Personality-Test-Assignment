import { Injectable } from '@angular/core';
import questions from '../data/questions.json';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root',
})
export class PersonalityTestService {
  constructor() {}
  personalityType: string = '';

  getQuestions(): Question[] {
    // Returns shuffled question
    return questions.sort(() => 0.5 - Math.random());
  }

  submitResult(answers:string[]): void {
    // Computes personality type based on the given answers
    this.personalityType = answers.filter(answer => answer === 'introvert').length>2 ? 'introvert' : 'extrovert';
  }

  getAnswer(): string {
    return this.personalityType;
  }
}
