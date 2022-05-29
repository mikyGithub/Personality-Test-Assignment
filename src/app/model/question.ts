export interface Question {
  question: string;
  choices: Choice[];
}
export interface Choice {
  personalityType: string;
  option: string;
}
