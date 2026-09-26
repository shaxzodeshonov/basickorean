import raw from './hangeul.json';

export interface TheoryStep {
  type: 'theory';
  title: string;
  korean: string;
  audio?: string;
  image?: string;
  explanation: string;
  points?: string[];
}
export interface ChoiceStep {
  type: 'choice';
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}
export interface ListeningStep {
  type: 'listening';
  question: string;
  audio: string;
  options: string[];
  correct: number;
  explanation?: string;
}
export interface MatchStep {
  type: 'match';
  question: string;
  pairs: { k: string; v: string }[];
}
export interface BuilderStep {
  type: 'builder';
  question: string;
  targetWord?: string;
  target?: string;
  syllables: string[];
  distractors?: string[];
  explanation?: string;
}
export interface StrokeStep {
  type: 'stroke';
  letter: string;
  name: string;
  strokes: string[];
  canvasLetter: string;
}
export type Step = TheoryStep | ChoiceStep | ListeningStep | MatchStep | BuilderStep | StrokeStep;

export interface Lesson {
  id: string;
  sectionId: string;
  title: string;
  subTitle: string;
  steps: Step[];
}
export interface Section {
  id: string;
  title: string;
  korean: string;
  lessonIds: string[];
}
export interface Letter {
  char: string;
  name: string;
  sound: string;
  rom: string;
  uz: string;
  formula?: string;
  organ?: string;
  example?: string;
}
export interface Word {
  korean: string;
  rom: string;
  uzbek: string;
  trans: string;
  category: string;
  image?: string;
  note?: string;
}
export interface CourseInfo {
  name: string;
  subName: string;
  teacher: string;
  office: string;
  grading: { item: string; weight: string; detail: string }[];
  penalties: string[];
  gradeScale: { grade: string; range: string; quota: string }[];
}
export interface HangeulData {
  courseInfo: CourseInfo;
  vowels: Letter[];
  compoundVowels: Letter[];
  consonants: Letter[];
  doubleConsonants: Letter[];
  words: Word[];
  sections: Section[];
  lessons: Lesson[];
}

export const DATA = raw as unknown as HangeulData;
export { IMAGES } from './images';
