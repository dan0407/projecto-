import styles from '../perfil/imps.css';
import { appState, dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";
import { getData } from '../../../utils/firebase';

class perfil extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {

		this.render();
	}

	handleCreatButton() {
		dispatch(navigate(Screens.DASHBOARD));
	}

	handlelogButton() {
		dispatch(navigate(Screens.LOGIN));
	}

	logout() {
		indexedDB.deleteDatabase('firebase-heartbeat-database');
		indexedDB.deleteDatabase('firebaseLocalStorageDb');
		window.location.reload();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ` `;

			// Create the general div
			const general = document.createElement('div');
			general.id = 'general';

			// Create the inputs div
			const inputsDiv = document.createElement('div');
			inputsDiv.id = 'inputs';

			const BenchpressLabel = document.createElement('label');
			BenchpressLabel.textContent = 'Bench press';

			const BenchpressInput = document.createElement('input');
			BenchpressInput.type = 'text';
			BenchpressInput.id = 'Bench press';

			const DeadLiftLabel = document.createElement('label');
			DeadLiftLabel.textContent = 'DeadLift';

			const DeadLiftInput = document.createElement('input');
			DeadLiftInput.type = 'text';
			DeadLiftInput.id = 'DeadLift';

			const SquatLabel = document.createElement('label');
			SquatLabel.textContent = 'Squat';

			const SquatInput = document.createElement('input');
			SquatInput.type = 'text';
			SquatInput.id = 'Squat';

			// Create the login button
			const createButton = document.createElement('button');
			createButton.classList.add('button');
			createButton.textContent = '';

			const logoutBtn = document.createElement('button');
			logoutBtn.classList.add('button');
			logoutBtn.textContent = 'logout';
			logoutBtn.addEventListener('click', this.logout);
		this.shadowRoot?.appendChild(logoutBtn);


			// Add the general div to the document body
			document.body.appendChild(general);
			this.shadowRoot.appendChild(general);

			const create = document.createElement('h8');
			create.classList.add('h8');
			// create.textContent = appState.userdata.username;
			// console.log("AAAAAAAA",appState.userdata.username);


			const up = document.createElement('h5');

			up.classList.add('h5');

			inputsDiv.appendChild(create);
			inputsDiv.appendChild(up);
			inputsDiv.appendChild(BenchpressLabel);
			inputsDiv.appendChild(BenchpressInput);
			inputsDiv.appendChild(DeadLiftLabel);
			inputsDiv.appendChild(DeadLiftInput);
			inputsDiv.appendChild(SquatLabel);
			inputsDiv.appendChild(SquatInput);
			inputsDiv.appendChild(createButton);
			inputsDiv.appendChild(logoutBtn);
			general.appendChild(inputsDiv);



		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('my-perfil', perfil);
export default perfil;
