// pour le graphe batons
import type { Activity } from "~/types/activityTypes";

const data = {
  data: {
    userId: 12,
    sessions: [
      { day: "2020-07-01", kilogram: 72, calories: 220 },
      { day: "2020-07-02", kilogram: 72, calories: 240 },
      { day: "2020-07-03", kilogram: 71, calories: 230 },
      { day: "2020-07-04", kilogram: 71, calories: 210 },
      { day: "2020-07-05", kilogram: 71, calories: 201 },
      { day: "2020-07-06", kilogram: 69, calories: 230 },
      { day: "2020-07-07", kilogram: 69, calories: 198 },
    ],
  },
};

const userActivity: Activity = data.data;

export default userActivity;
