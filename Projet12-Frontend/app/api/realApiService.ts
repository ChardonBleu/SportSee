import type { Activity } from "~/types/activityTypes";
import type { User } from "../types/userTypes"
import type { Sessions } from "~/types/sesssionTypes";
import type { Performance } from "~/types/performanceTypes";

const API_BASE_URL = 'http://localhost:3000';

class ApiService {
    async request(endpoint: string, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        
        const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
        };

        const response =  await fetch(url, config);
        if (!response) {
            throw new Error("Impossible to fetch user datas");
        }
        if (response.status == 404) {
            throw new Error("User not found");
        }
        const data = await response.json();
        return data
    }

    async getUser(id: string): Promise<User> {
        const data = await this.request(`/user/${id}`);
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

    async getUserActivity(id:number): Promise<Activity> {
        const data = await this.request(`/user/${id}/activity`);
        return data.data;
    }

    async getUserSessions(id:number): Promise<Sessions> {
        const data = await this.request(`/user/${id}/average-sessions`);
        return data.data;
    }

    async getUserPerformance(id:number): Promise<Performance> {
        const data = await this.request(`/user/${id}/performance`);
        return data.data;
    }
}

export default new ApiService();