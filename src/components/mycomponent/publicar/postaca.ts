import styles from './post.css';
<<<<<<< HEAD
import { dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";

export class postcard extends HTMLElement {
	constructor() {
		super(); // always call super() first in the ctor.
=======
import { appState, dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";
import { addPost, subirPost} from '../../../utils/firebase';

export class postcard extends HTMLElement {
	constructor() {
		super();
>>>>>>> ayuda
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
<<<<<<< HEAD
	handlepostButton() {
		dispatch(navigate(Screens.DASHBOARD));
}
=======
	handlepostButton(imagen: File) {
		subirPost(imagen);
	}
	handlepostunoButton() {
		dispatch(navigate(Screens.DASHBOARD));
}

>>>>>>> ayuda
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
<<<<<<< HEAD
			postLabel.textContent = 'post';
=======
			postLabel.textContent = 'POST';
>>>>>>> ayuda

			const postInput = document.createElement('input');
			postInput.type = 'file';
			postInput.id = 'file';

			// Create the login button
			const postButton = document.createElement('button');
			postButton.classList.add('button');
			postButton.textContent = 'Post';
			postButton.addEventListener('click', () => {
<<<<<<< HEAD
				postButton.addEventListener("click", this.handlepostButton);
				console.log('Se hizo clic en "post"');
=======
				
							if (postInput.files && postInput.files.length > 0) {
					this.handlepostButton(postInput.files[0]);
					}
					dispatch(navigate(Screens.DASHBOARD));
>>>>>>> ayuda
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

<<<<<<< HEAD
=======


>>>>>>> ayuda
