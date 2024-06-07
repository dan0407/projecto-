export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
<<<<<<< HEAD
    screen: string
}

=======
    screen: string,
    user: any,
    userdata: userType,
    posts: PostType,
    postsProfile: any
}

<<<<<<< HEAD
=======

>>>>>>> ayuda
>>>>>>> main
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

export interface PostType {
    image: string,
<<<<<<< HEAD
    name: string,
    postFirebaseId: string,
    profileImage: string,
    userId: string;
}
=======
    }
>>>>>>> ayuda
>>>>>>> main
