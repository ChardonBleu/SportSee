import user from "../fixtures/user";
import type { User } from "../types/userTypes";
import userActivity from "~/fixtures/userActivity";
import type { Activity } from "~/types/activityTypes";
import userSessions from "~/fixtures/userSessions";
import type { Sessions } from "~/types/sesssionTypes";
import userPerformance from "~/fixtures/userPerformance";
import type { Performance } from "~/types/performanceTypes";

/**
 *API service with mocked datas
 * @return { Promise<User | Activity | Sessions | Performance | null> }
 */
class MockApiService {
  user: User;
  userActivity: Activity;
  userSessions: Sessions;
  userPerformance: Performance;

  constructor() {
    this.user = user;
    this.userActivity = userActivity;
    this.userSessions = userSessions;
    this.userPerformance = userPerformance;
  }

  async getUser(id: string): Promise<User | null> {
    if (this.user.id === Number(id)) {
      return this.user;
    }
    throw new Error("Impossible to fetch user mocked datas");
  }

  async getUserActivity(id: number): Promise<Activity | null> {
    if (this.userActivity.userId === id) {
      return this.userActivity;
    }
    throw new Error("Impossible to fetch user mocked activity datas");
  }

  async getUserSessions(id: number): Promise<Sessions | null> {
    if (this.userSessions.userId === id) {
      return this.userSessions;
    }
    throw new Error("Impossible to fetch user mocked sessions datas");
  }

  async getUserPerformance(id: number): Promise<Performance | null> {
    if (this.userPerformance.userId === id) {
      return this.userPerformance;
    }
    throw new Error("Impossible to fetch user mocked performance datas");
  }
}

export default new MockApiService();
