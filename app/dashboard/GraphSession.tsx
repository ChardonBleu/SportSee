// Ajouter loader avec userSessions
import { useEffect, useState } from "react";
import { fetchUserSessions } from "~/api/fetchUserSessions";
import { Loader } from "~/utilities/Loader";
import type { Sessions } from "~/types/sesssionTypes";

export function GraphSessions({ userId }: { userId: number }) {
  const [Sessions, setSessions] = useState(null);
  
    useEffect(() => {
      const fetchSessionsData = async () => {
        const data = await fetchUserSessions(userId);
        setSessions(data);
      };
      fetchSessionsData();
    }, [userId]);
  
    if (!Sessions) {
      return <Loader />;
    }
  
    const sessions: Sessions = Sessions;
  return (
    <>
      <section className="bg-tomato rounded-md w-1/3 p-4">
        <p>durée moyenne des cessions</p>
        <div className="p-4">
          {sessions.sessions.map((dailySession) => <p key={sessions.sessions.indexOf(dailySession)}>{ dailySession.day } : { dailySession.sessionLength }min</p>)}
        </div>
      </section>
    </>
  );
}
