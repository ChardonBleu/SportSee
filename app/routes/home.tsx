import { Dashboard } from "../dashboard/Dashboard";

export function meta() {
  return [
    { title: "SportSee" },
    { name: "description", content: "Welcome to SportSee!" },
  ];
}

export default function Home() {
  return <Dashboard />;
}
