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
    // Returns Shuffled Question
    return questions.sort(() => 0.5 - Math.random());
  }

  submitResult(): void {}

  getAnswer(): string {
    return this.personalityType;
  }
}
