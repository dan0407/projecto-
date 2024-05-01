import './components/mycomponent/login/imput';
import './index.css';
import './screens/login';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('my-imputs');
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', AppContainer);
