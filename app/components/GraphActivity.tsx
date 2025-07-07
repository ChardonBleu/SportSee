import { useEffect, useState, type ReactElement } from "react";
import { fetchUserActivity } from "~/api/fetchUserActivity";
import type { Activity } from "~/types/activityTypes";
import { Loader } from "../utilities/Loader";

/**
 * Component for daily activity
 * @param { String } userId id of the user
 * @return { ReactElement }
 */
export function GraphActivity({ userId }: { userId: number }): ReactElement {
  const [UserActivity, setUserActivity] = useState<Activity | null>(null);

  useEffect(() => {
    const fetchUserActivityData = async () => {
      const data = await fetchUserActivity(userId);
      setUserActivity(data);
    };
    fetchUserActivityData();
  }, [userId]);

  if (!UserActivity) {
    return <Loader />;
  }

  return (
    <>
      <section className="bg-dust rounded-md w-full h-[50%] p-4">
        <p>Activité quotidienne</p>
        <div className="p-4">
          {UserActivity.sessions.map((dailySession) => (
            <p key={UserActivity.sessions.indexOf(dailySession)}>
              {dailySession.day} : {dailySession.calories}kCal -{" "}
              {dailySession.kilogram}kg
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
