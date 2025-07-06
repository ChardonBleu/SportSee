export async function fetchUser(id: string) {
  const res = await fetch(`http://localhost:3000/user/${id}`);
  const data = await res.json();
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
