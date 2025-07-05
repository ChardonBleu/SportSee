export interface UserInfo {
    firstName: string;
    lastName: string;
    age: number;
}

export interface  KeyData {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
}

export interface User {
    id: number;
    userInfo: UserInfo;
    score: number;
    keyData: KeyData;
}

export interface KeyDataCardProps {
    keyDataCount: string;
    title: string;
    imageUrl:string;
}