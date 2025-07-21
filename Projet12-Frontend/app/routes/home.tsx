import type { ReactElement } from "react";
import { NavLink } from "react-router";

/**
 *Home Component with just two users link
 * @return { ReactElement }
 */
export default function Home(): ReactElement {
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
