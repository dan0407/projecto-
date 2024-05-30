import styles from './post.css';
import { appState, dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";
import { addPost, subirPost} from '../../../utils/firebase';

export class postcard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
	handlepostButton(imagen: File) {
		// dispatch(navigate(Screens.DASHBOARD));
		subirPost(imagen);
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
			postLabel.textContent = 'POST';

			const postInput = document.createElement('input');
			postInput.type = 'file';
			postInput.id = 'file';

			// Create the login button
			const postButton = document.createElement('button');
			postButton.classList.add('button');
			postButton.textContent = 'Post';
			postButton.addEventListener('click', () => {
				if (postInput.files && postInput.files.length > 0) {
					this.handlepostButton(postInput.files[0]);
					console.log('Se hizo clic en "post"');
				}
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



