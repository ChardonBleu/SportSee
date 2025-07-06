export async function fetchUserActivity(id: number) {
  const res = await fetch(`http://localhost:3000/user/${id}/activity`);
  const data = await res.json();
  return data.data;
}
