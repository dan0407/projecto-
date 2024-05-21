import { Screens } from "../types/trips";
import { getPosts, } from '../utils/firebase';

export const navigate = (screen: Screens) => {
    return {
        type: "NAVIGATE",
        payload: screen,
    };
};

export const setUserCredentials = (user: string) => {
	return {
		action: 'SETUSER',
		payload: user,
	};
};
export const getPostsAction = async () => {
	//Ir al utils de firebase y ejecutar la función getPosts
	const posts = await getPosts();
	return {
		action: 'GETPOSTS',
		payload: posts,
	};
};