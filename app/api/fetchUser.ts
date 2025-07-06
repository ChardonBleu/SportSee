export async function fetchUser(id: string) {
  const res = await fetch(`http://localhost:3000/user/${id}`);
  const data = await res.json();
  return data.data;
}
