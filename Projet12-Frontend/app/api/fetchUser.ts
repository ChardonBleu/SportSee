import type { User } from "~/types/userTypes";

/**
 * Fetch user datas from api.
 * After fetching datas from database, it's necesary to format datas
 * because score key isn't always the same for all users.
 * @param { String } id of the user
 * @return { Promise<User | null> }
 */
export async function fetchUser(id: string): Promise<User | null> {
  const response = await fetch(`http://localhost:3000/user/${id}`);
  if (!response) {
    throw new Error("Impossible to fetch user datas");
  }
  if (response.status == 404) {
    throw new Error("User not found");
  }
  const data = await response.json();
  const userScore = data.data.score
    ? data.data.score
    : data.data.todayScore
      ? data.data.todayScore
      : 0;
  return {
    id: data.data.id,
    userInfos: data.data.userInfos,
    score: userScore,
    keyData: data.data.keyData,
  };
}
