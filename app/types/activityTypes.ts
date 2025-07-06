export interface activitySession {
  day: string;
  kilogram: number;
  calories: number;
}

export interface Activity {
  userId: number;
  sessions: Array<activitySession>;
}
