export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string,
    user: any,
    userdata: userType,
    posts: postType,
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
interface postType {
    image: string,
    }