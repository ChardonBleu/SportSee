import type { User } from "~/types/userTypes";

const data = {
  data: {
    id: 12,
    userInfos: { firstName: "Olivia", lastName: "Bartolome", age: 36 },
    score: 0.8,
    keyData: {
      calorieCount: 1892,
      proteinCount: 100,
      carbohydrateCount: 106,
      lipidCount: 88,
    },
  },
};

const user: User = data.data;

export default user;
