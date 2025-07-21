// graphe durée moyenne des sessions
import type { Sessions } from "~/types/sesssionTypes";

const data = {
  data: {
    userId: 12,
    sessions: [
      { day: 1, sessionLength: 20 },
      { day: 2, sessionLength: 60 },
      { day: 3, sessionLength: 45 },
      { day: 4, sessionLength: 40 },
      { day: 5, sessionLength: 60 },
      { day: 6, sessionLength: 20 },
      { day: 7, sessionLength: 60 },
    ],
  },
};

const userSessions: Sessions = data.data;

export default userSessions;
