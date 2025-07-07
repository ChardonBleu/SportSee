export async function fetchUserPerformance(id: number) {
  const res = await fetch(`http://localhost:3000/user/${id}/performance`);
  const data = await res.json();
  return data.data;
}
