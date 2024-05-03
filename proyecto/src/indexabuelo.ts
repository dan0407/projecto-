import './components/mycomponent/login/imput';
import './indexabuelo.css';
import './screens/indesx';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('singup-page');
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', AppContainer);
