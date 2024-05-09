import './components/mycomponent/login/imput';
import './indexabuelo.css';
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

		if(this.shadowRoot) this.shadowRoot.innerHTML = ``
		switch (appState.screen) {

			case Screens.DASHBOARD:
					const dashboard = this.ownerDocument.createElement("app-dashboard");
					this.shadowRoot?.appendChild(dashboard);
					break;

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

        default:
            break;
		}
	}
}

customElements.define('app-container', AppContainer);
