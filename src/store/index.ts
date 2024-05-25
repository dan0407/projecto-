import { Observer } from "../types/store";
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

const emptyState = {
  screen: Screens.DASHBOARD,
  user: '',
  userdata: []
};

export let appState = emptyState;

let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;
	notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};