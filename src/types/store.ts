export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
<<<<<<< HEAD
    screen: string
}

=======
    screen: string,
    user: any,
    userdata: userType,
    posts: postType,
    postsProfile: any

}


>>>>>>> ayuda
export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
}

<<<<<<< HEAD
export type Actions = ScreenActions;
=======
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
>>>>>>> ayuda
