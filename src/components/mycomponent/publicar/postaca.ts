import styles from './post.css';
import { dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";

export class postcard extends HTMLElement {
	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
	handlepostButton() {
		dispatch(navigate(Screens.DASHBOARD));
}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ` `;

			// Create the general div
			const generalDiv = document.createElement('div');
			generalDiv.id = 'general';

			// Create the inputs div
			const inputsDiv = document.createElement('div');
			inputsDiv.id = 'inputs';

			// Create the password label, input, and button
			const postLabel = document.createElement('label');
			postLabel.textContent = 'post';

			const postInput = document.createElement('input');
			postInput.type = 'file';
			postInput.id = 'file';

			// Create the login button
			const postButton = document.createElement('button');
			postButton.classList.add('button');
			postButton.textContent = 'Post';
			postButton.addEventListener('click', () => {
				postButton.addEventListener("click", this.handlepostButton);
				console.log('Se hizo clic en "post"');
			});
			inputsDiv.appendChild(postLabel)
			inputsDiv.appendChild(postInput)
			inputsDiv.appendChild(postButton)

			generalDiv.appendChild(inputsDiv);
			this.shadowRoot.appendChild(generalDiv);
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}
customElements.define('my-post', postcard);

