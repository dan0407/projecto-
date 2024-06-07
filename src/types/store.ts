export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string,
    user: any,
    userdata: userType,
    posts: PostType,
    postsProfile: any
}

export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
}

export type Actions = ScreenActions;

interface userType {
    age: number,
    benchpress: number,
    deadLift: number,
    emailaddress: string,
    profile: string,
    squat: number,
    username: string
}

export interface PostType {
    image: string,
    name: string,
    postFirebaseId: string,
    profileImage: string,
    userId: string;
}