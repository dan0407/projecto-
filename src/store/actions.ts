import { Screens } from "../types/trips";

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