import './components/indexpadre';


class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('login-page');
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', AppContainer);