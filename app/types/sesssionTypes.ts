interface sessionsSession {
  day: number;
  sessionLength: number;
}

export interface Sessions {
  userId: number;
  sessions: Array<sessionsSession>;
}
