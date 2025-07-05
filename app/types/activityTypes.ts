export interface Session {
    day: string;
    kilogram: number;
    calories: number;
}

export interface Activity {
    userId: number;
    sessions: Array<Session>
}