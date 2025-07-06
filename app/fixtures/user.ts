import type { User } from "~/types/userTypes";

const data = {
  data: {
    id: 18,
    userInfos: { firstName: "Cecilia", lastName: "Ratorez", age: 34 },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
};

// {"data":{"id":12,"userInfos":{"firstName":"Karl","lastName":"Dovineau","age":31},"todayScore":0.12,"keyData":{"calorieCount":1930,"proteinCount":155,"carbohydrateCount":290,"lipidCount":50}}}
const user: User = data.data;

export default user;
