import type { Sessions } from "~/types/sesssionTypes";

/**
 * Fetch user sessions datas from api.
 * @param { String } id of the user
 * @return { Promise<Sessions | null>  }
 */
export async function fetchUserSessions(id: number): Promise<Sessions | null> {
  const response = await fetch(
    `http://localhost:3000/user/${id}/average-sessions`,
  );
  if (!response) {
    throw new Error("Impossible to fetch user datas");
  }
  const data = await response.json();
  return data.data;
}
