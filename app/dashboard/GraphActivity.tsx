// Ajouter loader avec userActivity
import { useEffect, useState } from "react";
import { fetchUserActivity } from "~/api/fetchUserActivity";
import type { Activity } from "~/types/activityTypes";
import { Loader } from "../utilities/Loader";

export function GraphActivity({ userId }: { userId: number }) {
  const [Activity, setActivity] = useState(null);

  useEffect(() => {
    const fetchActivityData = async () => {
      const data = await fetchUserActivity(userId);
      setActivity(data);
    };
    fetchActivityData();
  }, [userId]);

  if (!Activity) {
    return <Loader />;
  }

  const activity: Activity = Activity;

  return (
    <>
      <section className="bg-dust rounded-md w-full h-[50%] p-4">
        <p>Activité quotidienne</p>
        <div className="p-4">
          {activity.sessions.map((dailySession) => <p key={activity.sessions.indexOf(dailySession)}>{ dailySession.day } : { dailySession.calories }kCal - { dailySession.kilogram }kg</p>)}
        </div>
      </section>
    </>
  );
}
