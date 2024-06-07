import { AppState, Observer } from "../types/store";
import { reducer } from "./reducer";
import { Screens } from "../types/trips";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../utils/firebase";
import { setUserCredentials } from "./actions";
import { navigate } from "./actions";

onAuthStateChanged(auth, (user) => {
	if (user) {
		user.uid !== null ? dispatch(setUserCredentials(user.uid)) : '';
		dispatch(navigate(Screens.DASHBOARD));
	} else {
		dispatch(navigate(Screens.LOGIN));
	}
});

const emptyState: AppState = {
	screen: Screens.DASHBOARD,
	user: {},
	userdata: {
		age: 0,
		benchpress: 0,
		deadLift: 0,
		emailaddress: "",
		profile: "",
		squat: 0,
		username: ""
	},
	posts: {
		image:"",
		name: "",
    postFirebaseId: "",
    profileImage: "",
    userId: "",
	},
	postsProfile: [],
};

export let appState = emptyState;

let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;
	console.log("App State")
	console.log(appState)
	notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};