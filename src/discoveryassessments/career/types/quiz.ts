export type RIASECType = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export interface QuizOption {
  type: RIASECType;
  imageUrl: string;
  altText: string;
  description: string;
}

export interface QuizQuestion {
  id: number;
  prompt: string;
  optionA: QuizOption;
  optionB: QuizOption;
}

export interface QuizScores {
  R: number;
  I: number;
  A: number;
  S: number;
  E: number;
  C: number;
}

export interface Archetype {
  name: string;
  tagline: string;
  code: string;
  description: string;
  thriveIn: string;
  avoid: string;
  careers: { title: string; reason: string }[];
  superpower: string;
  nextSteps: string[];
}
