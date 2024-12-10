import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css',
})
export class DynamicComponent implements OnInit {
  exam!: FormGroup;
  get subjectName() {
    return this.exam?.get('subjectName');
  }
  get numberOfQuestions() {
    return this.exam?.get('numberOfQuestions');
  }
  get doctorName() {
    return this.exam?.get('doctorName');
  }
  get questions() {
    return this.exam.get('questions') as FormArray;
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.CreateForm();
  }

  // Create Form

  CreateForm() {
    this.exam = this._fb.group({
      subjectName: [null, Validators.required],
      numberOfQuestions: [null, Validators.required],
      doctorName: [null, Validators.required],
      questions: this._fb.array([this.CreateQuestion()]),
    });
  }

  CreateQuestion() {
    return this._fb.group({
      title: [null, Validators.required],
      grade: [null, Validators.required],
      choices: this._fb.array([this.CreateChoice()]),
    });
  }

  AddQuestion() {
    const questions = this.questions as FormArray;
    questions.push(this.CreateQuestion());
  }

  CreateChoice() {
    return this._fb.group({
      option: [null, Validators.required],
    });
  }

  AddChoice(questionIndex: number) {
    const choices = this.questions
      ?.at(questionIndex)
      .get('choices') as FormArray;
    choices.push(this.CreateChoice());
  }

  getChoices(index: number) {
    return this.questions?.at(index).get('choices') as FormArray;
  }

  DeleteQuestion(index: number) {
    this.questions.removeAt(index);
  }

  DeleteChoice(questionIndex: number, choiceIndex: number) {
    var choices = this.getChoices(questionIndex);
    choices.removeAt(choiceIndex);
  }

  OnSave(model: FormGroup) {
    console.log(model.value);
  }
}
