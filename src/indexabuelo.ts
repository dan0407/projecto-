import './components/mycomponent/login/imput';
<<<<<<< HEAD
import './indexabuelo.css';
=======
import styles from './indexabuelo.css';
>>>>>>> ayuda
import './screens/indesx';
import { addObserver } from "./store/index";
import { appState } from "./store/index";
import { Screens } from "./types/trips";

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this)
	}

	connectedCallback() {
		this.render();
	}

	render() {
<<<<<<< HEAD

		if(this.shadowRoot) this.shadowRoot.innerHTML = ``
		switch (appState.screen) {

			case Screens.DASHBOARD:
					const dashboard = this.ownerDocument.createElement("app-dashboard");
					this.shadowRoot?.appendChild(dashboard);
					break;
=======
		if(this.shadowRoot) this.shadowRoot.innerHTML = ``
		switch (appState.screen) {
			case Screens.DASHBOARD:
				const dashboard = this.ownerDocument.createElement("app-dashboard");
				this.shadowRoot?.appendChild(dashboard);
				break;
>>>>>>> ayuda

					case Screens.LOGIN:
            const login = this.ownerDocument.createElement("login-page");
            this.shadowRoot?.appendChild(login);
            break;

					case Screens.SINGUP:
            const singup = this.ownerDocument.createElement("singup-page");
            this.shadowRoot?.appendChild(singup);
            break;
					case Screens.POST:
            const post = this.ownerDocument.createElement("public-page");
            this.shadowRoot?.appendChild(post);
            break;

<<<<<<< HEAD
        default:
            break;
		}
=======
					case Screens.PROFILE:
            const PROFILE = this.ownerDocument.createElement("perfil-page");
            this.shadowRoot?.appendChild(PROFILE);
            break;

					case Screens.EDIT:
            const EDIT = this.ownerDocument.createElement("edit-page");
            this.shadowRoot?.appendChild(EDIT);
            break;

        default:
            break;
		}
		
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
>>>>>>> ayuda
	}
}

customElements.define('app-container', AppContainer);
