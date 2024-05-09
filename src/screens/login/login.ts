import styles from './login.css';
import '../../components/indexpadre';
export enum AttributeCard {
	'name' = 'name',
	'image' = 'image',
}

export class loginPge extends HTMLElement {
	name?: string;
	image?: string;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCard, null> = {
			name: null,
			image: null,
		};
		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: AttributeCard, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}
	connectedCallback() {
		this.render();
	}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
			const something = this.ownerDocument.createElement('my-imputs');
			this.shadowRoot?.appendChild(something);

			const Logo = document.createElement('img');
			Logo.src = `../../../../imagenes/pesa.png`;
			Logo.alt = 'Logo';
			Logo.id = 'logo';
			this.shadowRoot.appendChild(Logo);

			const email = this.ownerDocument.createElement("input");
        	email.placeholder = "email";
       		 email.type = "email";
        	email.addEventListener(
        	"change",
        	(e: any) => (console.log(e))
        	);
        	this.shadowRoot?.appendChild(email);

       		 const password = this.ownerDocument.createElement("input");
        	password.placeholder = "*********";
        	password.type = "password";
        	password.addEventListener(
        	"change",
        	(e: any) => (console.log(e))
        	);
        	this.shadowRoot?.appendChild(password);
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}
customElements.define('login-page', loginPge);
