import { useEffect, useState } from "react";
import { fetchUserSessions } from "~/api/fetchUserSessions";
import { Loader } from "~/utilities/Loader";
import type { Sessions } from "~/types/sesssionTypes";

/**
 * Component for dayli sessions
 * @param { String } userId id of the user
 * @return { ReactElement }
 */
export function GraphSessions({ userId }: { userId: number }) {
  const [UserSessions, setUserSessions] = useState<Sessions | null>(null);

  useEffect(() => {
    const fetchUserSessionsData = async () => {
      const data = await fetchUserSessions(userId);
      setUserSessions(data);
    };
    fetchUserSessionsData();
  }, [userId]);

  if (!UserSessions) {
    return <Loader />;
  }

  const sessions: Sessions = UserSessions;
  return (
    <>
      <section className="bg-tomato rounded-md w-1/3 p-4">
        <p>durée moyenne des cessions</p>
        <div className="p-4">
          {sessions.sessions.map((dailySession) => (
            <p key={sessions.sessions.indexOf(dailySession)}>
              {dailySession.day} : {dailySession.sessionLength}min
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
