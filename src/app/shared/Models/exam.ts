export interface Exam {
  subjectName: string;
  numberOfQuestions: number;
  doctorName: string;
  questions: Question[];
}

export interface Question {
  title: string;
  grade: number;
  // will has unknown number from choices will be Dynamic too..
  choices: Choice[];
}

export interface Choice {
  option: string;
}
