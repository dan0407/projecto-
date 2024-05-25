import { Screens } from "../types/trips";
import { getPosts, getUserByid, } from '../utils/firebase';

export const navigate = (screen: Screens) => {
    return {
        action: "NAVIGATE",
        payload: screen,
    };
};

export const setUserCredentials = (id:string) => {
	return {
		action: 'SETUSER',
		payload: id,
	};
};

export const getUserDataAction = async(id: string) => {
	const userdata = await getUserByid(id)
	return {
		action: 'GETUSERDATA',
		payload: userdata,
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
export const connecteduser= (user: any) => {
	return {
		action: 'CONNECTUSER',
		payload: user,
	};
};