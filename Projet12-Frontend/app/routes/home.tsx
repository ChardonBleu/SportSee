import { NavLink } from "react-router";

export default function Home() {
  const usersId = [12, 18];

  return (
    <>
      <p className="text-center text-5xl font-medium m-6">Home</p>
      {usersId.map((userId) => (
        <NavLink
          to={`/profile/${userId}`}
          key={userId}
          className="text-center font-light mt-6 underline"
        >
          Profil du user id={userId}
        </NavLink>
      ))}
    </>
  );
}
