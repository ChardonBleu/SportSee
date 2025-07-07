export async function fetchUserSessions(id: number) {
  const res = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
  const data = await res.json();
  return data.data;
}
