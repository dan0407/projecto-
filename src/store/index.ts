<<<<<<< HEAD
import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState, Observer } from "../types/store";
import { reducer } from "./reducer";
import { Screens } from "../types/trips";

const emptyState = {
  screen: Screens.LOGIN,
};

export let appState = Storage.get<AppState>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: AppState) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });
=======
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
	},
	postsProfile: [],
};

export let appState = emptyState;

let observers: Observer[] = [];
>>>>>>> ayuda

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
<<<<<<< HEAD
  const newState = reducer(action, clone);
  appState = newState;

  persistStore(newState);
  notifyObservers();
=======
	const newState = reducer(action, clone);
	appState = newState;
	console.log("App State")
	console.log(appState)
	notifyObservers();
>>>>>>> ayuda
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};