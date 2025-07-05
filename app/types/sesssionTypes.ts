interface Session {
    day: number;
    sessionLength: number;
}

export interface Sessions {
    userId: number;
    sessions: Array<Session>
}