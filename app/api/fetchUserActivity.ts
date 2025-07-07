import type { Activity } from "~/types/activityTypes";

/**
 * Fetch user activity datas from api.
 * @param { String } id of the user
 * @return { Promise<Activity | null>  }
 */
export async function fetchUserActivity(id: number): Promise<Activity | null> {
  const response = await fetch(`http://localhost:3000/user/${id}/activity`);
  if (!response) {
    throw new Error("Impossible to fetch user datas");
  }
  const data = await response.json();
  return data.data;
}
