import type { Performance } from "~/types/performanceTypes";

/**
 * Fetch user performa,ce datas from api.
 * @param { String } id of the user
 * @return { Promise<Performance | null>  }
 */
export async function fetchUserPerformance(
  id: number,
): Promise<Performance | null> {
  const response = await fetch(`http://localhost:3000/user/${id}/performance`);
  if (!response) {
    throw new Error("Impossible to fetch user datas");
  }
  const data = await response.json();
  return data.data;
}
