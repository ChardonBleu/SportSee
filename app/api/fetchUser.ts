import user from "../fixtures/user";
// import type { Route } from "../routes/+types/home";
export function mockFetchUser() {
  return user;
}

// export async function FetchUser({params}: Route.ClientLoaderArgs) {
//     const response = await fetch(`/api/profile/${params.userId}`);
//     if (!response.ok) {
//         throw new Error('Failed to load profile');
//     }
//     return response.json();

// }
